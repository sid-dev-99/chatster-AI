interface MessageProps {
    messages:string[]
}

export const Messages = ({messages}:MessageProps) =>{ 
    return (
    <div className="flex flex-col items-center justify-center">
        {messages.length ? messages.map((msg) => (
            <Message key={index} content={message.content} />))
            : (<div>START MESSAGING</div>)
        }
    </div>)
}