
import { ragChat } from "@/lib/rag-chat";
import { RedirectStatusCode } from "next/dist/client/components/redirect-status-code";
import {cookies} from "next/headers";
import { ChatInterface } from "@/component/ChatInterface";    

interface pageProps{
    params:{
        url: string | string[] | undefined
    };
}


//genrate session id for it 
function newUrl({url}:{url:string[]}){
    
    if(!url){
        return '';
    }
    
    const extractedUrl = url.map((ele)=> decodeURIComponent(ele));

    return extractedUrl.join("//")
}


const page = async ({params}:pageProps) => {

    const modifiedUrl = newUrl({url: params.url as string[]}) 

    await ragChat.context.add({
        type:"html",
        source: modifiedUrl
    })

    const sessionId = "demo-sesion-id"

    const isExists = await redis.sismember("urlsIndexes", modifiedUrl)

    //const response = await ragChat.chat()

    if(!isExists){
        await redis.sadd("urlsIndexes",modifiedUrl) 
    }

    return (
        <ChatInterface sessionId={sessionId}/>
    )
}


export default page;

//implement cookies