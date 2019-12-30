import React from 'react'
import NoteList from './NoteList'
import NoteDetail from '../components/NoteDetail'
import { Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'


const Dashboard = ({match}) => {
    return (
        <div>
            <Grid>
            <Grid.Column width={4}>
                <NoteList />
            </Grid.Column>
            <Grid.Column width={8}>
                <Route path={`${match.url}/note/1`} component={NoteDetail} />
            </Grid.Column>
            </Grid>
            
        </div>
    )
}

export default Dashboard
