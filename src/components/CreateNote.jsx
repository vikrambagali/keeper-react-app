import React,{useState, useEffect} from 'react';
import { Plus, Pencil } from "lucide-react";

function CreateNote({ onAdd, editingNote }) {
    const [note, setNote] = useState({ title: "", content: "" });
    const [error, setError] = useState("");

    // Pre-fill when editing
    useEffect(() => {
        if (editingNote) {
            setNote(editingNote);
        }
    }, [editingNote]);

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevNote => ({ ...prevNote, [name]: value }));
    }

    function submitNote(event) {
        event.preventDefault();
        if (note.title.trim() === "" || note.content.trim() === "") {
            setError("⚠ Please fill in both Title and Content.");
            setTimeout(() => setError(""), 3000);
            return;
        }
        onAdd(note);
        setNote({ title: "", content: "" });
    }

    return (
        <div className='p-4'>
            <form>
                <input 
                    className='block w-full p-2 mb-2 border rounded-md'
                    name="title" 
                    onChange={handleChange}
                    value={note.title}
                    placeholder='Title'
                />
                <textarea 
                    className='block w-full p-2 mb-2 border rounded-md'
                    name="content"
                    rows="3"
                    onChange={handleChange}
                    value={note.content}
                    placeholder='Take a note'
                ></textarea>

                {error && (
                    <div className="mb-2 rounded-md bg-red-100 border border-red-400 text-red-700 px-4 py-2 text-sm">
                        {error}
                    </div>
                )}

                <button
                    type='submit'
                    className='flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
                    onClick={submitNote}>
                    {editingNote ? <Pencil className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    {editingNote ? "Update" : "Add"}
                </button>
            </form>
        </div>
    );
}

export default CreateNote;
