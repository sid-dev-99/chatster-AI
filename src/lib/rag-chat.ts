import {RAGchat,upstash} from '@upstash/rag-chat'


export const ragChat = new RAGchat({
    model: upstash("meta-llma/Meta-Llma-3-8B-Instruct"),
    
})