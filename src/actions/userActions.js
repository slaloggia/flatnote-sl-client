
export function login(username) {
    return (dispatch) => {
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
        };
        fetch('http://localhost:3000/users', configObj)
        .then(resp => resp.json())
        .then(user => dispatch({type: "LOG_IN", userinfo: {currentuser: user.username, notes: user.notes}}))
    }
}