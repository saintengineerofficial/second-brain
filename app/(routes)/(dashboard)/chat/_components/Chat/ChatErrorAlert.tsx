import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from 'lucide-react';

type Props = {
  title: string;
  message: string
}

const ChatErrorAlert = ({ title, message }: Props) => {
  return (
    <Alert variant="destructive" className="w-full bg-destructive/20 border-destructive/50">
      <AlertCircleIcon className="h-4 w-4" />
      <div>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription className="whitespace-break-spaces">
          <p>{message}</p>
        </AlertDescription>
      </div>
    </Alert>
  )
}

export default ChatErrorAlert