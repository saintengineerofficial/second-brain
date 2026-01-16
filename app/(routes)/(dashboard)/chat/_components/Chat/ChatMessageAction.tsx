import type { UIMessage } from 'ai';
import React from 'react'
import { ArrowBigDownIcon, CopyIcon } from 'lucide-react';
import { MessageActions, MessageAction } from '@/components/ai-elements/message';
import { toast } from 'sonner';

type Props = {
  message: UIMessage;
  isLoading: boolean;
}

const ChatMessageAction = React.memo(({ message, isLoading }: Props) => {

  const rawText = message.parts?.filter((p) => p.type === "text").map((p) => p.text).join("\n").trim();

  const handleCopy = async () => {
    if (!rawText) return toast.error("No text to copy!");
    await navigator.clipboard.writeText(rawText);
    toast.success("Copied!");
  };

  const handleSave = async () => {

  };

  if (isLoading) return null;

  return (
    <MessageActions className="mt-2 text-base">
      <MessageAction className="h-auto w-auto bg-muted rounded-full cursor-pointer" label="Copy" onClick={handleCopy}>
        <CopyIcon className="size-4" />
      </MessageAction>
      <MessageAction className="h-auto w-auto bg-muted rounded-full cursor-pointer" label="Save as note" onClick={handleSave}>
        <ArrowBigDownIcon className="size-4" />
      </MessageAction>
    </MessageActions>
  )
})

ChatMessageAction.displayName = "ChatMessageAction";

export default ChatMessageAction