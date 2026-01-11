import { PromptInput, PromptInputFooter, PromptInputTextarea, PromptInputTools } from "@/components/ai-elements/prompt-input"
import { cn } from "@/lib/utils"
import { UIMessage, UseChatHelpers } from "@ai-sdk/react"
import { ChatStatus } from "ai"
import { XIcon } from "lucide-react"
import React from "react"
import ModelSelector from "./ModelSelector"

type Props = {
  chatId: string
  input: string
  status: ChatStatus
  messages: Array<UIMessage>
  initialModelId: string
  disabled?: boolean
  className?: string
  setInput: (val: string) => void
  sendMessage: UseChatHelpers<UIMessage>["sendMessage"]
  stop: () => void
}

const ChatInput = (props: Props) => {
  const { chatId, input, initialModelId, status, className, setInput, sendMessage, disabled, stop } = props

  const isGenerating = status === "streaming" || status === "submitted"
  const selectedModelId = initialModelId

  const handleSelect = () => {}
  const onSubmit = () => {}

  return (
    <PromptInput
      className={cn(`ring-border relative !divide-y-0 !rounded-3xl bg-white pb-2 shadow-md dark:bg-[#242628] dark:shadow-black/5`, className)}
      onSubmit={onSubmit}>
      <div className="relative">
        {/* {selectedTool && (
          <div className="flex items-center gap-1 pt-1.5 pl-2">
            <div className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-medium">
              <selectedTool.icon size={12} />
              <span>{selectedTool.name}</span>
              <button className="hover:bg-primary/20 ml-1 rounded-sm p-0.5 transition-colors" onClick={removeTool}>
                <XIcon size={10} />
              </button>
            </div>
          </div>
        )} */}

        <PromptInputTextarea
          placeholder="Ask, search or create note..."
          rows={2}
          autoFocus
          value={input}
          className="min-h-16 overflow-hidden pt-2 !text-sm"
          // onChange={}
        />
      </div>

      <PromptInputFooter>
        <PromptInputTools>
          <ModelSelector selectedModelId={selectedModelId} onSelect={handleSelect} />
        </PromptInputTools>
      </PromptInputFooter>
    </PromptInput>
  )
}

export default ChatInput
