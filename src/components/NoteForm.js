import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { addNote } from '../actions/noteActions'

class NoteForm extends Component {

    state= {
        title: '',
        content: ''
    }

    handleChange(event) {
        event.persist()
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    } 

    handleSubmit(event) {
        event.preventDefault()
        const note = this.state
        this.props.addNote(note)
        this.setState({
            title: '',
            content: ''
        })
    }

    render() {
        return (
            <Form onSubmit={(event) => this.handleSubmit(event)}>
                <h2>Add Note</h2>
                <Form.Field>
                    <input type="text" name="title" value={this.state.title} placeholder="Note Title" onChange={(event) => this.handleChange(event)}/>
                </Form.Field>
                <Form.Field>
                    <textarea name="content" value={this.state.content} placeholder="Your Note" onChange={(event) => this.handleChange(event)}/>
                </Form.Field>
                <Button type="submit">Create Note</Button>
            </Form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {addNote: (note) => dispatch(addNote(note))}
}

export default connect(null, mapDispatchToProps)(NoteForm)