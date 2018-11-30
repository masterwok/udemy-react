import React from 'react';
import styles from './Person.module.css';


export default (props) => (
    <div className={styles.Person}>
        <p onClick={props.click}>Hi, I'm {props.name} and I'm {props.age} years old!</p>
        <p onClick={props.click}>{props.children}</p>
        <input
            type="text"
            onChange={props.onNameChange}
            value={props.name}/>
    </div>
);
