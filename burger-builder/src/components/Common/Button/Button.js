import React from 'react';
import styles from './Button.module.css';


export default (props) => {
    return (
        <button
            className={`${styles.Button} ${styles[props.buttonType]}`}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
}
