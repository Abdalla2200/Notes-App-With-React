import { useNotes } from "@/context/NotesContext";
import NoteDetails from "./NoteDetails";

export default function NotesList() {
  const { notes } = useNotes();

  return (
    <main className="container min-`h-[80vh] pb-5">
      <h1 className="my-6 text-3xl md:text-4xl text-purple-900 font-medium">
        Your Notes
      </h1>
      {notes.length === 0 && (
        <h1 className="text-center mt-16 text-3xl md:text-4xl text-purple-950 font-medium">
          There are no notes to show
        </h1>
      )}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4">
        {notes.map((note) => (
          <NoteDetails key={note.id} note={note} />
        ))}
      </div>
    </main>
  );
}
