import React, {Component} from 'react';
import { Button, Form } from 'semantic-ui-react'

class NoteForm extends Component {

    render() {
        return (
            <Form>
                <h2>Add Note</h2>
                <Form.Field>
                    <input type="text" name="title" placeholder="Note Title" />
                </Form.Field>
                <Form.Field>
                    <textarea name="content" placeholder="Your Note" />
                </Form.Field>
                <Button type="submit">Create Note</Button>
            </Form>
        )
    }
}

export default NoteForm