import React from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
    render() {
        return (
            <Menu>
                <Menu.Item header>FlatNote</Menu.Item>
                <Menu.Item href="/login">Log In</Menu.Item>
                <Menu.Item href="/note/new">New Note</Menu.Item>
            </Menu>
        )
    }
}

export default NavBar