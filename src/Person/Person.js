import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Hi, I'm {props.name} and I'm {props.age} years old!</p>
            <p onClick={props.click}>{props.children}</p>
        </div>
    )
};

export default person;