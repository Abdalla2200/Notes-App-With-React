import { NotesContext } from "../context/NotesContext";
import { type Note } from "../context/NotesContext";
import { useStoredState } from "@/hooks/useStoredState";

export default function NotesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notes, setNotes] = useStoredState<Note[]>("notes", []);

  function addNote(title: string, description: string) {
    const newNote = { title, description, id: Date.now() };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id: number) {
    const filteredNotes = notes.filter((note) => note.id !== id);

    setNotes(filteredNotes);
  }

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
}
