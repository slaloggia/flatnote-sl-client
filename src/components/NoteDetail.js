import React from 'react';
import NoteList from '../containers/NoteList'

const NoteDetail = () => {
    return (
        <div>
            <NoteList />
            <h2>Note Title</h2>
            <p>Note content block</p>
            <h4>Tags: </h4>
        </div>
    )
}

export default NoteDetail