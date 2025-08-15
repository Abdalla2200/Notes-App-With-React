import { createContext, useContext } from "react";

export type Note = {
  title: string;
  description: string;
  id: number;
};

type NotesContextType = {
  notes: Note[];
  addNote: (title: string, description: string) => void;
  deleteNote: (id: number) => void;
};

export const NotesContext = createContext<NotesContextType | undefined>(
  undefined
);

export function useNotes() {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
}
