"use client";
import { RiScanLine, RiChatAiLine, RiBankCard2Line, RiSettings3Line } from "@remixicon/react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";
import Logo from "../Logo";
import NavMenu from "./NavMenu";

const items = [
  { title: "Home", url: "/home", icon: RiScanLine },
  { title: "AI Chat", url: "/chat", icon: RiChatAiLine },
  { title: "Billing", url: "/billing", icon: RiBankCard2Line },
  { title: "Settings", url: "/settings", icon: RiSettings3Line },
];

const AppSideBar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar {...props} className="z-99">
      <SidebarHeader>
        <div className="w-full flex items-center justify-between">
          <Logo url="/home" />
          <SidebarTrigger className="-ms-4" />
        </div>
        <hr className="border-border mx-2 -mt-px" />
      </SidebarHeader>
      <SidebarContent className="px-2 pt-2 overflow-x-hidden">
        <NavMenu items={items} />
        {/* <NavNotes /> */}
      </SidebarContent>
      <SidebarFooter>
        <hr className="border-border mx-2 -mt-px" />
        {/* <NavUser
          isLoading={isPending}
          user={{
            name: user?.name || "",
            email: user?.email || "",
          }}
          isSigningOut={isSigningOut}
          onSignOut={handleLogout}
        /> */}
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSideBar