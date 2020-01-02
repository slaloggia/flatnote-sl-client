import React from 'react';
import { Button } from 'semantic-ui-react'
import history from '../history'

const NoteDetail = ({notes, deleteNote, match}) => {
    const id = parseInt(match.params.noteId)
    const myNote = notes.find(note => note.id === id)
    console.log(myNote)
    return ( 
        <div className="note-detail">
            <h2>{myNote.title}</h2>
            <p>{myNote.content}</p>
            {myNote.tags.length > 0 ? <h4>Tags: {myNote.tags.map(tag => `${tag.content}, `)}</h4> : null }
            
            <Button.Group >
                <Button onClick={() => history.push(`/dashboard/note/${myNote.id}/edit`)}>Edit</Button>
                <Button onClick={() => deleteNote(myNote.id)}>Delete</Button>
            </Button.Group>
        </div>
    )
}


export default NoteDetail