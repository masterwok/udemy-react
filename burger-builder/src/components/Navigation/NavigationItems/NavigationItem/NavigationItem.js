import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavigationItem.module.css';


const navigationItem = (props) => (
    <li className={styles.navigationItem}>
        <a
            className={props.active ? styles.active : null}
            href={'/'}>
            {props.children}
        </a>
    </li>
);

navigationItem.propTypes = {
    active: PropTypes.bool
};

export default navigationItem;