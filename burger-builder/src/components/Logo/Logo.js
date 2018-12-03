import React from 'react';
import PropTypes from 'prop-types';
import burgerLogo from '../../assets/images/burgerLogo.png';
import styles from './Logo.module.css';

const logo = (props) => (
    <div
        className={styles.logo}
        style={{height: props.height}}>
        <img src={burgerLogo}/>
    </div>
);

logo.propTypes = {
    height: PropTypes.string
};

export default logo;
