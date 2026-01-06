import React from "react";
import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { RiAddLine, RiFileTextLine, RiLoader5Fill } from "@remixicon/react";
import LoaderOverlay from "@/components/global/LoaderOverlay";
import { useCreateNote, useNotesList } from "@/app/(routes)/(dashboard)/_lib/useNote";
import useNoteId from "@/hooks/useNoteId";


const NavNotes = () => {
  const { noteId, setNoteId } = useNoteId()
  const { data: notesData, isPending } = useNotesList()
  const { mutate, isPending: isLoading } = useCreateNote()

  const handleAddNote = () => {
    mutate({ title: "Untitled", content: "" })
  }

  return (
    <>
      <LoaderOverlay text="Creating note..." isLoading={isLoading} />
      <SidebarGroup>
        <SidebarGroupLabel>
          <h5>Notes</h5>
          <SidebarGroupAction className="mt-[1.5px] flex items-center size-5.5 rounded-md bg-primary/20 border cursor-pointer" onClick={handleAddNote}>
            <RiAddLine className="size-5!" />
            <span className="sr-only">Add Notes</span>
          </SidebarGroupAction>
        </SidebarGroupLabel>
        <SidebarGroupContent className="w-full h-auto min-h-32 max-h-[360px] overflow-y-auto">
          <SidebarMenu>
            {notesData?.list?.length === 0 ? (
              <div>No Notes</div>
            ) : isPending ? (
              <div className="flex items-center justify-center">
                <RiLoader5Fill className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              notesData?.list?.map((note) => {
                const isActive = note.id === noteId;
                return (
                  <SidebarMenuItem key={note.id}>
                    <SidebarMenuButton className="flex items-center w-full" isActive={isActive} onClick={() => setNoteId(note.id)}>
                      <span className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                        <RiFileTextLine className="w-4 h-4 text-primary" />
                      </span>
                      <h5 className="flex-1 truncate">{note.title}</h5>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })
            )}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
};

export default NavNotes;
