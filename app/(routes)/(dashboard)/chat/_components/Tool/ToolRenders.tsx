import { ToolTypeEnum } from '@/lib/ai/tools/constant'
import type { ToolUIPart } from 'ai'
import React from 'react'
import ToolNoteCard from './ToolNoteCard'
import SearchExtractPreview from './SearchExtractPreview'

type ReturnToolRenders = Record<ToolUIPart['type'], (output: any, input: any) => React.ReactNode>

const ToolRenders = (): ReturnToolRenders => {

  return {
    [ToolTypeEnum.CreateNote]: (output) => {
      const note = output?.note ?? null;
      return (
        <div className="mb-1.5 mt-1">
          <ToolNoteCard noteId={note?.id} title={note?.title} content={note.content} />
        </div>
      )
    },
    [ToolTypeEnum.SearchNote]: (output, input) => {
      console.log("🚀 ~ ToolRenders ~ output, input:", output, input)
      const notes = output?.notes ?? [];
      return (
        <div className="w-full border border-border/40 rounded-lg py-3 px-1.5">
          <p className="text-sm pl-2">Searched for {`"${input?.query}"`}</p>
          <ul className="w-full list-none pl-0 pb-4 pt-2 space-y-1 max-h-48 overflow-y-auto">
            {Array.isArray(notes) &&
              notes?.map((note: any) => (
                <li key={note.id}>
                  <ToolNoteCard noteId={note.id} title={note.title} />
                </li>
              ))}
          </ul>
        </div>
      )
    },
    [ToolTypeEnum.WebSearch]: (output, input) => {
      return (
        <div className="mb-1.5 mt-1">
          <SearchExtractPreview type="webSearch" input={input} output={output} />
        </div>
      )
    },
    [ToolTypeEnum.ExtractWebUrl]: (output, input) => {
      return (
        <div className="mb-1.5 mt-1">
          <SearchExtractPreview type="extractWebUrl" input={input} output={output} />
        </div>
      )
    },
  }
}

export default ToolRenders