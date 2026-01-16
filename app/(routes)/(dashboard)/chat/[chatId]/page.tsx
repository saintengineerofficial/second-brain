import React from "react"
import ChatHeader from "../../_components/ChatHeader"
import { generateUUID } from "@/lib/utils";
import Chat from "../_components/Chat";

type Props = {}

const Page = (props: Props) => {
  const id = generateUUID();

  return (
    <React.Fragment>
      {/* <ChatHeader showActions /> */}
      <div className="relative w-full">
        <Chat
          key={id}
          chatId={id}
          initialMessages={[]}
          initialLoading={false}
          onlyInput={false}
        />
      </div>
    </React.Fragment>
  )
}

export default Page
