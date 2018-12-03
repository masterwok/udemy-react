import React from 'react';
import PropTypes from 'prop-types';
import styles from './Toolbar.module.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../DrawerToggle/DrawerToggle";


const toolbar = (props) => (
    <header className={styles.toolbar}>
        <DrawerToggle onClick={props.onToggleDrawer}/>
        <div className={styles.logo}>
            <Logo/>
        </div>
        <nav className={styles.desktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

toolbar.propTypes = {
    onToggleDrawer: PropTypes.func
};

export default toolbar;
