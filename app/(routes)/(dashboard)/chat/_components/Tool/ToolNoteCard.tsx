import useNoteId from '@/hooks/useNoteId';
import { RiFileTextLine } from '@remixicon/react';
import React from 'react'

type Props = {
  noteId: string;
  title: string;
  content?: string;
}

const ToolNoteCard = React.memo(({ noteId, title, content }: Props) => {
  const { setNoteId } = useNoteId();

  if (!content) {
    <button
      className="flex w-full item-center gap-2 py-1 text-sm dark:text-white/80 text-left hover:bg-accent rounded-sm"
      onClick={() => setNoteId(noteId)}
    >
      <RiFileTextLine className="w-5 h-5" />
      <span>{title}</span>
    </button>
  }

  return (
    <div
      role="button"
      className="flex flex-col gap-2 p-4 bg-muted rounded-md shadow-sm border border-border hover:shadow-md transition-all cursor-pointer"
      onClick={() => setNoteId(noteId)}
    >
      <h4 className="font-semibold text-xl line-clamp-1">{title}</h4>
      <p className="text-sm text-muted-foreground line-clamp-3">{content}</p>
    </div>
  )
})

ToolNoteCard.displayName = "ToolNoteCard";

export default ToolNoteCard