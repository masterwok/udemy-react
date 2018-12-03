import React from 'react';
import styles from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";


export default (props) => (
    <>
        {/*<div>Toolbar, SideDrawer, Backdrop</div>*/}
        <Toolbar/>
        <main className={styles.content}>
            {props.children}
        </main>
    </>
);
