import React from 'react';
import styles from './Toolbar.module.css';
import Logo from "../../Logo/Logo";


export default (props) => (
    <header className={styles.toolbar}>
        <div>MENU</div>
        <Logo/>
        <nav>...</nav>
    </header>
);
