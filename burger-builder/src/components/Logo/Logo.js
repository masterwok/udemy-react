import React from 'react';
import burgerLogo from '../../assets/images/burgerLogo.png';
import styles from './Logo.module.css';

export default (props) => (
    <div className={styles.logo}>
        <img src={burgerLogo}/>
    </div>
);