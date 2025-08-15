import React, { useState } from "react";
import { useNotes } from "@/context/NotesContext";

export default function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addNote } = useNotes();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    addNote(title, description);

    setTitle("");
    setDescription("");
  }

  return (
    <div className="container mx-auto max-w-md p-6 bg-white rounded-lg shadow-md mt-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="note-title"
            className="block text-lg  font-medium text-gray-700 mb-1"
          >
            Note Title
          </label>
          <input
            id="note-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter note title"
            required
          />
        </div>
        <div>
          <label
            htmlFor="note-description"
            className="block text-lg font-medium text-gray-700 mb-1"
          >
            Note Description
          </label>
          <textarea
            id="note-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            rows={4}
            maxLength={180}
            placeholder="Enter note description"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition duration-200 cursor-pointer"
        >
          Add Note
        </button>
      </form>
    </div>
  );
}
