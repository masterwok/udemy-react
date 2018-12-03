import React from 'react';
import styles from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";


export default (props) => (
    <>
        <Toolbar/>
        <SideDrawer/>
        <main className={styles.content}>
            {props.children}
        </main>
    </>
);
