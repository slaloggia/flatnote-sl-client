import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import Note from '../components/Note'

class NoteList extends Component {

    listNotes =() => {
       return this.props.notes.map(note => <Segment><Note note={note} key={note.id}/></Segment>)
    }

    render() {
        return (
            <div className="notelist">
                <Segment.Group>
                    <Segment><Note /></Segment>
                    <Segment><Note /></Segment>
                    <Segment><Note /></Segment>
                    <Segment><Note /></Segment>
                </Segment.Group>

            </div>
        )
    }
}

  

export default NoteList;