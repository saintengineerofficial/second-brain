"use client";
import React from "react";
import { RiFileTextLine, RiLoader5Fill } from "@remixicon/react";
import useNoteId from "@/hooks/useNoteId";
import { useCreateNote, useNotesList } from "../../_lib/useNote";
import EmptyState from "@/components/feature/EmptyState";

const RecentNotes = () => {
  const { setNoteId } = useNoteId();
  const { data: notes, isPending: isLoading } = useNotesList(1, 8);
  const { mutate, isPending } = useCreateNote();

  const handleClick = () => {
    mutate({ title: "Untitled", content: "" });
  };

  return (
    <div className="w-full mt-1.5">
      <ul className="flex w-full  flex-col gap-2">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <RiLoader5Fill className="w-10 h-10 animate-spin text-primary" />
          </div>
        ) : notes?.list?.length === 0 ? (
          <EmptyState title="No notes yet" isLoading={isPending} iconClassName="w-8! h-8!" onButtonClick={handleClick} />
        ) : (
          notes?.list?.map((note) => {
            return (
              <li key={note.id} className="relative">
                <button
                  className="flex w-full item-center gap-2 py-1 text-sm dark:text-white/80 text-left hover:bg-accent rounded-sm"
                  onClick={() => setNoteId(note.id)}
                >
                  <span className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <RiFileTextLine className="w-4 h-4 text-primary" />
                  </span>
                  <h5 className="flex-1 truncate mt-1">{note.title}</h5>
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default RecentNotes;
