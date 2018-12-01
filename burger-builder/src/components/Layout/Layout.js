import React from 'react';
import styles from './Layout.module.css';


export default (props) => (
    <>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.content}>
            {props.children}
        </main>
    </>
);
