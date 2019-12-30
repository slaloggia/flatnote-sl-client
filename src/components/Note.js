import React from 'react';
import {Link} from 'react-router-dom'

const Note = () => {
    return (
        <div>
            <Link to='/dashboard/note/1'>Note Detail</Link>
            <p>Note Content</p>
        </div>
    )
}

export default Note