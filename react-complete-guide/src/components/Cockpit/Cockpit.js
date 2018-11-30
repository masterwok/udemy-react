import React from 'react';
import styles from './Cockpit.module.css'
import Aux from "../../hoc/Aux";


export default (props) => {
    const buttonClasses = [styles.toggleButton];
    const containerClasses = [];

    if (props.isPersonsVisible) {
        buttonClasses.push(styles.toggleButtonVisible)
    }

    if (props.personsCount <= 2) {
        containerClasses.push(styles.red);
    }

    if (props.personsCount <= 1) {
        containerClasses.push(styles.bold);
    }

    return (
        <Aux>
            <h1>This is a React app!</h1>
            <p className={containerClasses.join(' ')}>Foo bar baz bax</p>
            <button
                className={buttonClasses.join(' ')}
                onClick={props.onToggleButtonClick}>
                Toggle Persons
            </button>
        </Aux>
    );
}