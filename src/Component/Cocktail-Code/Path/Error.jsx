import React from 'react'
import {Link} from 'react-router-dom';
export default function Error() {
    return (
        <div>
            <h1>Error!!Please go back</h1>
            <Link to="/home"><button>Go Back</button></Link>
        </div>
    )
}
