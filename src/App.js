import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import Welcome from './components/Welcome';
import NoteList from './containers/NoteList';
import NoteShow from './containers/NoteShow';
import NoteForm from './components/NoteForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container className="">
        <Router>
          <div>
            <Route exact path="/" component={Welcome} />
            <Route path="/login" component={LogIn} />
            <Route path="/dashboard" component={NoteList} />
            <Route path="/note/1" component={NoteShow} />
            <Route path="/note/new" component={NoteForm}/>
          </div>
        </Router>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({currentuser, loading, notes}) => ({currentuser, loading, notes})
  


export default connect(mapStateToProps)(App);
