import React from 'react';
import styles from './Cockpit.module.css'


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
        <>
            <h1>This is a React app!</h1>
            <p className={containerClasses.join(' ')}>Foo bar baz bax</p>
            <button
                className={buttonClasses.join(' ')}
                onClick={props.onToggleButtonClick}>
                Toggle Persons
            </button>
        </>
    );
}