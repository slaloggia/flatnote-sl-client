import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import Welcome from './components/Welcome';
// import NoteShow from './containers/NoteShow';
import NoteForm from './components/NoteForm';
import Dashboard from './containers/Dashboard'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <Router>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/login" component={LogIn} />
              <Route path="/dashboard" render={routerProps => <Dashboard {...routerProps} />} />
              {/* <Route path="/note/1" component={NoteShow} /> */}
              <Route path="/note/new" component={NoteForm}/>
            </Switch>
          </Router>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({currentuser, loading, notes}) => ({currentuser, loading, notes})
  


export default connect(mapStateToProps)(App);
