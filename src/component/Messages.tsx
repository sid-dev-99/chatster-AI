import {Message} from "./Message"   

interface MessagesProps {
    messages:string[]
}

const msgRole = "user"


export const Messages = ({messages}:MessagesProps) =>{ 
    return (
    <div className="flex flex-col items-center justify-center">
        {messages.length ? messages.map((msg) => (
            <Message key={index} content={message.content} isUser={msgRole === "user"}/>))
            : (<div>START MESSAGING</div>)
        }
    </div>)
}