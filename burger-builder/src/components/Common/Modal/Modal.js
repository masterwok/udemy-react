import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import Backdrop from "../Backdrop/Backdrop";


const modal = (props) => (
    <>
        <Backdrop
            show={props.show}
            onClick={props.onBackdropClick}/>
        <div
            className={styles.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'
                , opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </>
);

modal.propTypes = {
    show: PropTypes.bool
    , onBackdropClick: PropTypes.func
};

export default modal;
