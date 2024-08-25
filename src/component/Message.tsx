import {cn} from "@/lib/utils"

interface MessageProps{
    content:string,
    isUser:boolean,
}


export const Message = ({content,isUser}:MessageProps) =>{  
    return ( 
    <div
        className={cn({
        "bg-zinc800":isUser,
        "bg-zinc-50":!isUser,
    })}
    >
        
        <div className="flex items-center justify-between">
            <div className="max-w-3xl mx-auto flex items-start">
                <div className={cn("size-10 shrink-0 rounded-full",{"bg-zinc-50":isUser})}></div>
                <div className="ml-3 text-sm font-medium text-zinc-900">
                    {content}
                </div>
            </div>
        </div>


    </div>
    
    )
}