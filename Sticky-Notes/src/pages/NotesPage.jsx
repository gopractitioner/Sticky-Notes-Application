import React from 'react';
import NoteCard from '../ components/NoteCard';
import { fakeData } from '../assets/fakaData';

const NotesPage = () => {
    const notes = fakeData;
    return (
        <div>
            {
                notes.map((note) => (
                    <NoteCard key={note.$id} note={note} />
                ))
            }
        </div>
    );
}
export default NotesPage;