import React from 'react'
import { Trash2, Edit } from 'lucide-react';

function Note({ id, title, content, onDelete, onEdit }) {
    return (
        <div className='note bg-white rounded-lg shadow-md p-4 m-2 max-w-sm'>
            <h1 className='text-xl font-bold text-gray-800'>{title}</h1>
            <p className='text-gray-600'>{content}</p>
            <div className='flex gap-2 mt-2'>
                <button
                    className='bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition'
                    onClick={() => onEdit(id)}>
                    <Edit className="w-5 h-5" />
                </button>
                <button
                    className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition'
                    onClick={() => onDelete(id)}>
                    <Trash2 className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
export default Note;
