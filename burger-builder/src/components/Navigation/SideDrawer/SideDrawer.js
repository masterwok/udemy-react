import React from 'react';
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import styles from './SideDrawer.module.css';


export default (props) => {

    // TODO: Add class logic

    return (
        <div className={[styles.sideDrawer]}>
            <div className={styles.logo}>
                <Logo/>
            </div>

            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );
}
