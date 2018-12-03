import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';


const button = (props) => {
    return (
        <button
            className={`${styles.Button} ${styles[props.buttonType]}`}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
};

button.propTypes = {
    buttonType: PropTypes.string.isRequired
    , onClick: PropTypes.func.isRequired
};

export default button;
