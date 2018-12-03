import React from 'react';
import burgerLogo from '../../assets/images/burgerLogo.png';
import styles from './Logo.module.css';

export default (props) => (
    <div
        className={styles.logo}
        style={{height: props.height}}>
        <img src={burgerLogo}/>
    </div>
);