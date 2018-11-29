import React from 'react';

// Inline style example
const style = {
    margin: '16px auto'
    , border: '1px solid #ddd'
    , width: '60%'
    , padding: '20px'
};

const userInput = (props) => {
    return (
        <div style={style}>
            <input
                type="text"
                value={props.username}
                onChange={props.onUsernameChanged}/>
        </div>
    );
};

export default userInput;
