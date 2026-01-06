"use client";
import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import useNoteId from "@/hooks/useNoteId";
import NoteView from "./NoteView";

const NotDialog = () => {
  const { noteId, clearNoteId } = useNoteId();

  return (
    <Sheet open={!!noteId} onOpenChange={() => clearNoteId()}>
      <SheetContent side="right" className="p-0 border-l lg:w-1/2 sm:max-w-[50vw]">
        <SheetHeader className="py-2 border-b bg-muted px-4">
          <SheetTitle>Current Note</SheetTitle>
        </SheetHeader>
        <div className="flex-1 min-h-20 max-h-screen overflow-y-auto">
          {noteId && <NoteView noteId={noteId} />}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NotDialog;
