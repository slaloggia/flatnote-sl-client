import React, {Component} from 'react';

class NoteForm extends Component {

    render() {
        return (
            <form>
                <input type="text" name="title" placeholder="Note Title" />
                <textarea name="content" placeholder="Your Note" />
                <input type="submit" />
            </form>
        )
    }
}

export default NoteForm