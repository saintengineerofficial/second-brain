import { RiLoader5Fill } from "@remixicon/react";
import React, { type PropsWithChildren } from "react";

type Props = {
  isLoading: boolean;
  text?: string;
};

const loaderWrapper = ({ isLoading, text = "Creating note...", children }: PropsWithChildren<Props>) => {
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background/20 backdrop-blur-xs z-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <RiLoader5Fill className="w-16 h-16 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">{text}</p>
        </div>
      </div>
    )
  }
  return children
};

export default loaderWrapper;
