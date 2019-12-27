import React, { Component } from 'react';
import Note from '../components/Note'

class NoteList extends Component {

    render() {
        return (
            <div>
                List of User's notes
                <ul>
                    <li><Note/></li>
                    <li><Note /></li>
                    <li><Note /></li>
                </ul>
            </div>
        )
    }
}

export default NoteList;