'use client'
//{sessionId}:{sessionId:string}
import { useChat } from "ai/react"

export const ChatInterface = ({sessionId}:{sessionId:string}) => {

    const {messages,handleInputChange,input} = useChat({
        api:"/api/chat-route",
        body:{sessionId}
    })

    return(
        <div className="min-h-full bg-slate-800">
            <div className="bg-zinc-700">
                {JSON.stringify(messages)}
            </div>
            <input type="text" onChange={handleInputChange} value={input}></input>
        </div>
    )

}