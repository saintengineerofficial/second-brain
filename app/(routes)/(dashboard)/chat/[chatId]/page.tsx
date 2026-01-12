import React from "react"
import ChatHeader from "../../_components/ChatHeader"
import { generateUUID } from "@/lib/utils";
import ChatInterface from "../_components/Chat";

type Props = {}

const Page = (props: Props) => {
  const id = generateUUID();

  return (
    <>
      {/* <ChatHeader showActions /> */}
      <div className="relative w-full">
        <ChatInterface
          key={id}
          chatId={id}
          initialMessages={[]}
          initialLoading={false}
          onlyInput={false}
        />
      </div>
    </>
  )
}

export default Page
