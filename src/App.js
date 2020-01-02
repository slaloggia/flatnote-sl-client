import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import Welcome from './components/Welcome';
import NewNoteForm from './components/NewNoteForm';
import Dashboard from './containers/Dashboard'
import history from './history';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <NavBar currentuser={this.props.currentuser}/>
          <Container>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/login" component={LogIn} />
              {this.props.currentuser.id ?
              <Route path="/dashboard" render={routerProps => <Dashboard {...routerProps} />} /> : history.push('/login')
              }
              {this.props.currentuser.id ?
              <Route path="/note/new" render={routerProps => <NewNoteForm {...routerProps} />}/> : history.push('/login')
              }
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({currentuser, loading, notes}) => ({currentuser, loading, notes})
  


export default connect(mapStateToProps)(App);
