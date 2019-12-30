import fetch from 'cross-fetch'

export function login(username) {
    return (dispatch) => {
        console.log(username)
        dispatch({type: 'LOADING_USER'});
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: username
            })
        }
        fetch('http//localhost/3000/users', configObj)
        .then(resp => resp.json())
        .then(user => console.log(user))
        // .then(user => dispatch({type: "LOG_IN", userinfo: {currentuser: user.username, notes: user.notes}}))
    }
}