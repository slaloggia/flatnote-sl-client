import React, {Component} from 'react';
import {connect} from 'react-redux'
import { login } from '../actions/userActions'

class LogIn extends Component {

    state={
        username: ''
    }

    handleChange(event) {
        this.setState({username: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        const username = this.state.username
        this.props.login(username)


    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" name="username" placeholder="Enter username" value={this.state.username} onChange={(event) => this.handleChange(event)}/>
                <input type="submit" value="Log In"/>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {login: (username) => dispatch(login(username))}
     
}

export default connect(null, mapDispatchToProps)(LogIn)