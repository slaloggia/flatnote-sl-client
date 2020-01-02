import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteNote } from '../actions/noteActions'
import { Button } from 'semantic-ui-react'
import NoteList from './NoteList'
import NoteDetail from '../components/NoteDetail'
import EditForm from '../components/EditForm'
import { Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'


class Dashboard extends Component {

    state= {
        filteredNotes: this.props.notes,
    }

    selectNote = (note) => {
        this.setState({selectedNote: note})
    }

    listTags() {
       const tags = this.props.notes.map(note => note.tags).flat()
       const uniqueTags = tags.filter((tag, i, arr) => arr.findIndex(t => t.id === tag.id) === i)
       return uniqueTags.map(tag => <Button basic size='mini' key={tag.id} id={tag.id}>{tag.content}</Button>)
    }

    filterNotes = (id) => {
        // console.log(id)
        const filteredNotes = this.props.notes.filter(note => note.tags.some(tag => tag.id === parseInt(id)))
        this.setState({filteredNotes: filteredNotes})
    }

    resetFilter = () => {
        this.setState({filteredNotes: this.props.notes})
    }


    

    render() {
        return (
            <div>
                <Grid>
                <Grid.Column width={4}>
                    {this.props.notes && this.props.notes.length > 0 ? (
                    <NoteList notes={this.state.filteredNotes} selectNote={this.selectNote}/>
                    ) : null }
                </Grid.Column>
                <Grid.Column width={8}>
                    <Route exact path={`${this.props.match.url}/note/:noteId`} render={routerProps => <NoteDetail {...routerProps} deleteNote={this.props.deleteNote} notes={this.props.notes}/>} />
                    <Route exact path={`${this.props.match.url}/note/:noteId/edit`} render={routerProps => <EditForm  {...routerProps} note={this.state.selectedNote} />} />
                </Grid.Column>
                <Grid.Column width={4}>
                    <h3 onClick={() => this.listTags()}>Filter By Tag</h3>
                    <Button basic size='mini' onClick={this.resetFilter}>All Notes</Button>
                    <div className='tag-list' onClick= {(event) => this.filterNotes(event.target.id)}>{this.listTags()}</div>
                </Grid.Column>

                </Grid>
                
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {deleteNote: (noteId) => dispatch(deleteNote(noteId))}
}

const mapStateToProps = ({notes}) => ({notes})


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
