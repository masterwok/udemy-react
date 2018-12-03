import React from 'react';
import styles from './Backdrop.module.css'


export default (props) => (
    props.show ? <div
            className={styles.backdrop}
            onClick={props.onClick}/>
        : null
);
