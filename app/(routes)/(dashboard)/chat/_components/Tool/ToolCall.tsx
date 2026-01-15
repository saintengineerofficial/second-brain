import type { ToolUIPart } from 'ai';
import React, { Fragment } from 'react'
import { getToolStatus } from './uitls';
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible';
import ToolHeader from './ToolHeader';
import { ToolTypeEnum } from '@/lib/ai/tools/constant';
import ToolLoadingIndicator from './ToolLoadingIndicator';

interface ToolCallProps {
  toolCallId: string;
  type: ToolUIPart["type"];
  state: ToolUIPart["state"];
  output?: any;
  input?: any;
  errorText?: string;
  isLoading: boolean;
}

const ToolCall = ({ type, state, output, input, isLoading }: ToolCallProps) => {
  console.log("🚀 ~ ToolCall ~ type, state, output, input:", type, state, output, input)

  const toolName = type.split("-")[1]
  const { text, icon } = getToolStatus(toolName, state, output)

  const renderOutput = () => {

    return (
      <div></div>
    )
  }

  if (isLoading && (state === "input-streaming" || state === "input-available")) {
    return <ToolLoadingIndicator loadingText={text} />
  }

  if (type === ToolTypeEnum.CreateNote) {
    return (
      <Fragment>
        <ToolHeader text={text} icon={icon} />
        <div>{renderOutput()}</div>
      </Fragment>
    )
  }

  return (
    <Collapsible defaultOpen={true}>
      <ToolHeader text={text} icon={icon} collapsible />
      <CollapsibleContent>{renderOutput()}</CollapsibleContent>
    </Collapsible>
  )
}

export default ToolCall