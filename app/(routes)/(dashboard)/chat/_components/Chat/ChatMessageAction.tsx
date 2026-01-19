import type { UIMessage } from 'ai';
import React from 'react'
import { Download, CopyIcon } from 'lucide-react';
import { MessageActions, MessageAction } from '@/components/ai-elements/message';
import { toast } from 'sonner';
import { useCreateNote } from '../../../_lib/useNote';

type Props = {
  message: UIMessage;
  isLoading: boolean;
}

const ChatMessageAction = React.memo(({ message, isLoading }: Props) => {
  const { mutateAsync } = useCreateNote()

  const rawText = message.parts?.filter((p) => p.type === "text").map((p) => p.text).join("\n").trim();

  const handleCopy = async () => {
    if (!rawText) return toast.error("No text to copy!");
    await navigator.clipboard.writeText(rawText);
    toast.success("Copied!");
  };

  const handleSave = async () => {
    if (!rawText) return toast.error("No text to save!");
    toast.promise(mutateAsync({ title: "Untitled", content: rawText }), {
      loading: "Saving note...",
      success: () => "Note saved!",
      error: "Failed to save note",
    });
  };

  if (isLoading || message.role === 'user') return null;

  return (
    <MessageActions className="mt-2 text-base">
      <MessageAction className="h-auto w-auto bg-muted cursor-pointer px-2 py-1" label="Copy" onClick={handleCopy}>
        <CopyIcon className="size-4" />
        <span>Copy</span>
      </MessageAction>
      <MessageAction className="h-auto w-auto bg-muted cursor-pointer px-2 py-1" label="Save as note" onClick={handleSave}>
        <Download className="size-4" />
        <span>Save as note</span>
      </MessageAction>
    </MessageActions>
  )
})

ChatMessageAction.displayName = "ChatMessageAction";

export default ChatMessageAction