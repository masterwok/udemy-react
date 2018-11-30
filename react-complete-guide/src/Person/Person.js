import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '400px',
            backgroundColor: "orange"
        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>Hi, I'm {props.name} and I'm {props.age} years old!</p>
            <p onClick={props.click}>{props.children}</p>
            <input
                type="text"
                onChange={props.onNameChange}
                value={props.name}/>
        </div>
    )
};

export default Radium(person);