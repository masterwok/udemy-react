import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from "./NavigationItem/NavigationItem";

export default (props) => (
    <ul className={styles.navigationItems}>
        <NavigationItem link={'/'} active>Burger Builder</NavigationItem>
        <NavigationItem link={'/'}>Checkout</NavigationItem>
    </ul>
);
