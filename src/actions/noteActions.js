
export function addNote(note) {
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: note.title,
                content: note.content
            })
        }
        fetch('http://localhost:3000/notes', configObj)
        .then(resp => resp.json())
        .then(newNote => dispatch({type: "ADD_NOTE", newNote}))
    }
}