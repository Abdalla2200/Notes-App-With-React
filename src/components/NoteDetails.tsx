import { useNotes, type Note } from "@/context/NotesContext";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { format } from "date-fns";

type NoteDetailsProps = {
  note: Note;
};

export default function NoteDetails({ note }: NoteDetailsProps) {
  const { deleteNote } = useNotes();

  return (
    <div>
      <Card className="flex flex-col h-[270px] bg-gradient-to-br from-white to-purple-50 border-purple-200 hover:border-purple-300 transition-colors">
        <CardHeader>
          <CardTitle className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            {note.title}
          </CardTitle>
          <CardAction>
            <Button
              onClick={() => deleteNote(note.id)}
              size="sm"
              variant="outline"
              className="text-purple-700 border-purple-300 hover:bg-purple-50 hover:text-purple-800 hover:shadow-md cursor-pointer"
            >
              Delete Note
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="flex-1 break-words whitespace-pre-wrap text-purple-900/80">
          <p>{note.description}</p>
        </CardContent>
        <CardFooter className="mt-auto text-purple-500/70 text-sm">
          <p>{format(new Date(note.id), "MMM dd, yyyy • h:mm a")}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
