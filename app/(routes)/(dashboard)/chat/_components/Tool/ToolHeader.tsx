import { Button } from '@/components/ui/button';
import { CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDownIcon, type LucideIcon } from 'lucide-react';
import React from 'react'

type Props = {
  text: string;
  icon: LucideIcon;
  collapsible?: boolean;
}

// 自定义 ToolHeader 组件,可以不折叠
const ToolHeader = React.memo(({ text, icon: Icon, collapsible }: Props) => {
  const Wrapper = collapsible ? CollapsibleTrigger : Button;

  return (
    <Wrapper className="flex items-center justify-between w-full rounded-md hover:bg-muted/50 py-2 px-2 text-muted-foreground transition-colors border-0">
      <div className="flex items-center gap-2">
        <Icon className="size-4 text-muted-foreground" />
        <span>{text}</span>
      </div>
      {collapsible && (
        <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
      )}
    </Wrapper>
  )
})

ToolHeader.displayName = "ToolHeader"

export default ToolHeader