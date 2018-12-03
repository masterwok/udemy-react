import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import Backdrop from "../Backdrop/Backdrop";


class Modal extends Component {

    shouldComponentUpdate = (
        nextProps
    ) => nextProps.show !== this.props.show;

    render = () => (
        <>
            <Backdrop
                show={this.props.show}
                onClick={this.props.onBackdropClick}/>
            <div
                className={styles.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)'
                    , opacity: this.props.show ? '1' : '0'
                }}>
                {this.props.children}
            </div>
        </>
    );
}

Modal.propTypes = {
    show: PropTypes.bool
    , onBackdropClick: PropTypes.func
};

export default Modal;
