import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuildControl.module.css';


const buildControl = (props) => {
    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>
                {props.label}
            </div>
            <button
                className={styles.Less}
                disabled={props.disabled}
                onClick={props.onRemove.bind(this, props.type)}>
                Less
            </button>
            <button
                className={styles.More}
                onClick={props.onAdd.bind(this, props.type)}>
                More
            </button>
        </div>
    );
};

buildControl.propTypes = {
    label: PropTypes.string.isRequired
    , type: PropTypes.string.isRequired
    , onAdd: PropTypes.func.isRequired
    , onRemove: PropTypes.func.isRequired
    , disabled: PropTypes.bool.isRequired
};

export default buildControl;
