import React from 'react';
import styles from './NavigationItem.module.css';

export default (props) => (
    <li className={styles.navigationItem}>
        <a
            className={props.active ? styles.active : null}
            href={'/'}>
            {props.children}
        </a>
    </li>
);