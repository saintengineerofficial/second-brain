import React from "react"

import {
  PromptInputSelect,
  PromptInputSelectContent,
  PromptInputSelectItem,
  PromptInputSelectTrigger,
  PromptInputSelectValue,
} from "@/components/ai-elements/prompt-input"
import { MODEL_OPTIONS } from "@/lib/ai/models"

type Props = {
  selectedModelId: string
  onSelect: (value: string) => void
}

const ModelSelector = ({ selectedModelId, onSelect }: Props) => {
  return (
    <PromptInputSelect value={selectedModelId} onValueChange={value => onSelect(value)}>
      <PromptInputSelectTrigger className="border bg-white dark:bg-inherit">
        <PromptInputSelectValue />
      </PromptInputSelectTrigger>
      <PromptInputSelectContent>
        {MODEL_OPTIONS.map(model => (
          <PromptInputSelectItem key={model.value} value={model.value}>
            {model.label}
          </PromptInputSelectItem>
        ))}
      </PromptInputSelectContent>
    </PromptInputSelect>
  )
}

export default ModelSelector
