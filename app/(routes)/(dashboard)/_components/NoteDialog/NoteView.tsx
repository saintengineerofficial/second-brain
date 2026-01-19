import { useNoteDetail, useUpdateNote } from '@/app/(routes)/(dashboard)/_lib/useNote'
import { AutosizeTextarea, type AutosizeTextAreaRef } from '@/components/ui/autosize-textarea'
import { Button } from '@/components/ui/button'
import { SheetClose, SheetFooter } from '@/components/ui/sheet'
import { RiLoader5Fill } from '@remixicon/react'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
  noteId: string
}

const NoteView = ({ noteId }: Props) => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleTextRef = useRef<AutosizeTextAreaRef | null>(null);
  const contentTextRef = useRef<AutosizeTextAreaRef | null>(null);

  const { data: note, isLoading } = useNoteDetail(noteId)
  const { mutate, isPending } = useUpdateNote()


  const handleSave = () => {
    if (!noteId) return
    mutate({ id: noteId, title, content })
  }

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);


  useEffect(() => {
    if (!isLoading) {
      const titleTextAreaEle = titleTextRef.current;
      if (titleTextAreaEle) {
        titleTextAreaEle.textArea.style.minHeight = "auto !important";
        titleTextAreaEle.textArea.style.maxHeight = "auto !important";
        titleTextAreaEle.textArea.focus();
      }
    }
  }, [isLoading]);


  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-[20vh]">
        <RiLoader5Fill className="w-16 h-16 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full p-6">
      <div className="w-full pl-2 mb-3">
        <div className="border-b">
          <AutosizeTextarea
            ref={titleTextRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Untitled note..."
            className="w-full resize-none border-none! outline-none bg-transparent font-bold
            placeholder:text-muted-foreground/40 text-4xl leading-tight
            overflow-hidden px-0! focus-visible:ring-0! focus-visible:ring-offset-0!"
          />
        </div>

        <div className="w-full pl-2">
          <AutosizeTextarea
            ref={contentTextRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Untitled note..."
            className="w-full resize-none border-none! outline-none bg-transparent 
            placeholder:text-muted-foreground/40 leading-tight
            overflow-hidden px-0 focus-visible:ring-0! focus-visible:ring-offset-0! min-h-[65vh]!"
          />
        </div>

        <SheetFooter>
          <div className='flex items-center'>
            <Button
              disabled={isPending || !noteId || !content}
              className="ml-auto rounded-full px-10! text-lg! cursor-pointer disabled:opacity-75"
              size="lg"
              onClick={handleSave}
            >
              {isPending && <RiLoader5Fill className="w-7! h-7! animate-spin" />}
              Save Changes
            </Button>
            {/* <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose> */}
          </div>
        </SheetFooter>
      </div>
    </div>
  )
}

export default NoteView