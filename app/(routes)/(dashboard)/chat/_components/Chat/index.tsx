import { DefaultChatTransport, UIMessage } from "ai"
import React, { useEffect, useState } from "react"
import { useChat } from "@ai-sdk/react"
import { generateUUID } from "@/lib/utils"
import { DEFAULT_MODEL_ID } from "@/lib/ai/models"
import ChatInput from "./ChatInput/ChatInput"

type Props = {
  chatId: string
  initialMessages: UIMessage[]
  initialLoading: boolean
  onlyInput: boolean
  inputDisable: boolean
}

const Chat = ({ chatId, initialLoading, initialMessages, onlyInput, inputDisable }: Props) => {
  const [input, setInput] = useState("")

  const { messages, sendMessage, setMessages, status, stop, error } = useChat({
    id: chatId,
    messages: initialMessages,
    generateId: () => generateUUID(),
    // 自定义请求
    transport: new DefaultChatTransport({
      api: "/api/chat",
      // 发送前最后执行的函数
      prepareSendMessagesRequest({ messages, id, body }) {
        console.log("🚀 ~ prepareSendMessagesRequest ~ messages:", messages)

        return {
          body: {
            id,
            message: messages.at(-1), // 只把最后一条消息user给服务端
            selectedModelId: DEFAULT_MODEL_ID,
            ...body,
          },
        }
      },
    }),
    async onToolCall() {},
    onFinish: () => {},
    onError: error => {
      console.log("Chat error", error)
    },
  })

  useEffect(() => {
    if (initialMessages && initialMessages.length > 0) {
      setMessages(initialMessages)
    }
  }, [initialMessages, setMessages])

  if (onlyInput) {
    return (
      <div className="relative w-full">
        <ChatInput
          className="w-full"
          chatId={chatId}
          input={input}
          setInput={val => setInput(val)}
          messages={messages}
          status={status}
          stop={stop}
          initialModelId={DEFAULT_MODEL_ID}
          sendMessage={sendMessage}
        />
      </div>
    )
  }

  return (
    <div className="bg-background flex h-screen min-w-0 flex-col overflow-x-hidden">
      <div className="bg-background sticky inset-y-1 bottom-1 z-[1] mt-2 flex w-full gap-2 px-4 pb-1">
        <div className="relative mx-auto w-full md:max-w-3xl"></div>
      </div>
    </div>
  )
}

export default Chat
