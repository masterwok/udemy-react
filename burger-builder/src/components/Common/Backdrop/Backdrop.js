import React from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.module.css'


const backdrop =  (props) => (
    props.show ? <div
            className={styles.backdrop}
            onClick={props.onClick}/>
        : null
);

backdrop.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default backdrop;
