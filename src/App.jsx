import Header from "./components/Header";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";
import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  function addNote(newNote) {
    if (editingIndex !== null) {
      // Update existing note
      setNotes(prevNotes => {
        const updated = [...prevNotes];
        updated[editingIndex] = newNote;
        return updated;
      });
      setEditingIndex(null); // exit edit mode
    } else {
      // Add new note
      setNotes(prevNotes => [...prevNotes, newNote]);
    }
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((_, index) => index !== id));
  }

  function editNote(id) {
    setEditingIndex(id);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col flex-1 px-4 sm:px-6 lg:px-8 py-4">
        <CreateNote 
          onAdd={addNote} 
          editingNote={editingIndex !== null ? notes[editingIndex] : null} 
        />
        <div className="grid gap-4 mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {notes.map((noteItem, index) => (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
              onEdit={editNote}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
