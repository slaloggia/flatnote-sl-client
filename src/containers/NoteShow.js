import React from 'react'
import { Grid } from 'semantic-ui-react'
import NoteList from './NoteList'
import NoteDetail from '../components/NoteDetail'

const NoteShow = () => {
    return (
        <Grid>
            <Grid.Column width={4}>
                <NoteList />
            </Grid.Column>
            <Grid.Column width={8}>
                <NoteDetail />
            </Grid.Column>
        </Grid>
    )
}

export default NoteShow