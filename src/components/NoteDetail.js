import React from 'react';
import { Button } from 'semantic-ui-react'
import history from '../history'

const NoteDetail = ({note, deleteNote}) => {
    return ( 
        <div className="note-detail">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            {note.tags.length > 0 ? <h4>Tags: {note.tags.map(tag => `${tag.content}, `)}</h4> : null }
            
            <Button.Group >
                <Button onClick={() => history.push(`/dashboard/note/${note.id}/edit`)}>Edit</Button>
                <Button onClick={() => deleteNote(note.id)}>Delete</Button>
            </Button.Group>
        </div>
    )
}


export default NoteDetail