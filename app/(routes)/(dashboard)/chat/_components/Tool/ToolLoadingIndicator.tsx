import { LoaderIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'

type Props = {
  loadingText: string
}

const ToolLoadingIndicator = React.memo(({ loadingText }: Props) => {
  const [time, setTime] = useState(0);

  // 每秒钟更新一次
  useEffect(() => {
    const interval = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-4 rounded-md bg-background/50 shadow-sm relative">
      <div className="absolute top-2 right-2 text-xs text-primary">
        {time}s
      </div>
      <div className="flex items-center gap-2 mb-2">
        <LoaderIcon className="h-4 2-4 animate-spin" />
        <span className="font-light text-sm">{loadingText}</span>
      </div>
      <div className="w-full h-1 bg-background/30 rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full animate-progressBar"></div>
      </div>
    </div>
  )
})

ToolLoadingIndicator.displayName = "ToolLoadingIndicator";

export default ToolLoadingIndicator