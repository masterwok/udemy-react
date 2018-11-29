import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        // This component uses stylesheets for styling (as opposed to inline styles)
        <div className="UserOutput">
            <h1>Username: {props.username}</h1>
            <p>First paragraph.</p>
            <p>Second paragraph.</p>
        </div>
    );
};

export default userOutput;
