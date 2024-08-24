
import { ragChat } from "@/lib/rag-chat";

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


    const isExists = await redis.sismember("urls", modifiedUrl)

    //const response = await ragChat.chat()

    if(!isExists){
        
    }

    return (
        <messages>hey from the compoentn</messages>
    )
}


export default page