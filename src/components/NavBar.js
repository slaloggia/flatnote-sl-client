import React from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import history from '../history'
import { logout } from '../actions/userActions'

class NavBar extends React.Component {
    render() {
        return (
            <Menu>
                <Menu.Item header>FlatNote</Menu.Item>
                <Menu.Item onClick={() => history.push('/note/new')}>New Note</Menu.Item>
                <Menu.Menu position='right'>
                {this.props.currentuser.id ?
                <Menu.Item onClick={() => this.props.logout()}>Log Out</Menu.Item> :
                <Menu.Item href="/login">Log In</Menu.Item>
                }
                </Menu.Menu>
            </Menu>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {logout: () => dispatch(logout())}
}

export default connect(null, mapDispatchToProps)(NavBar)