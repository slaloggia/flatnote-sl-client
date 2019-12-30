

export default function manageNotes(state= {
    currentuser: {},
    notes:[],
    loading: false
}, action) {
    switch (action.type) {
        case 'LOADING_USER':
            return {...state, loading: true}
        case 'LOG_IN':
            return {currentuser: action.userinfo.currentuser, notes: action.userinfo.notes, loading: false}
        case 'ADD_NOTE':
            return {...state, notes: [...state.notes, action.newNote]}
        default:
        return state
    }
}