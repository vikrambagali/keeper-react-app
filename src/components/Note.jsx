import React from 'react'
import { Trash2 } from 'lucide-react';

function Note(props) {
    function handleClick(){
        props.onDelete(props.id)
    }
    return (
        <div className='note bg-white rounded-lg shadow-md p-4 m-2 max-w-sm'>
            <h1 className='text-xl font-bold text-gray-800'>{props.title}</h1>
            <p className='text-gray-600'>{props.content}</p>
            <button
            className='mt-2 bg-red-500 gap-2 text-white hover:text-red-700 transition px-3 py-1 rounded'
            onClick={handleClick}><Trash2 className="w-5 h-5" /></button>
        </div>
    );
}
export default Note;