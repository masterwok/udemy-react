import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Hi, I'm {props.name} and I'm {props.age} years old!</p>
            <p onClick={props.click}>{props.children}</p>
            <input
                type="text"
                onChange={props.onNameChange}
                value={props.name}/>
        </div>
    )
};

export default person;