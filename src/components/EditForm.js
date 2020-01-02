import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { editNote } from '../actions/noteActions'

class EditForm extends Component {

    state= {
        title: this.props.note.title,
        content: this.props.note.content,
        tags: '' 
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
        const note = {
            title: this.state.title,
            content: this.state.content,
            tags: this.state.tags.split(', '), 
            noteId: this.props.note.id
        }
        console.log(note)
        this.props.editNote(note)
        this.setState({
            title: '',
            content: '',
            tags: ''
        })
    }

    render() {
        return (
            <Form onSubmit={(event) => this.handleSubmit(event)} id="edit-form">
                <h2>Edit Note</h2>
                <Form.Field>
                    <input type="text" name="title" value={this.state.title}  onChange={(event) => this.handleChange(event)}/>
                </Form.Field>
                <Form.Field>
                    <textarea name="content" value={this.state.content}  onChange={(event) => this.handleChange(event)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" name="tags" value={this.state.tags} placeholder="Add tags" onChange={(event) => this.handleChange(event)}/>
                </Form.Field>
                <Button type="submit">Save</Button>
            </Form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editNote: (note) => dispatch(editNote(note)),

    }
}

export default connect(null, mapDispatchToProps)(EditForm)