import React from 'react';
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import styles from './SideDrawer.module.css';
import Backdrop from "../../Common/Backdrop/Backdrop";


export default (props) => {

    const sideDrawerClasses = [
        styles.sideDrawer
        , props.show ? styles.open : styles.close
    ].join(' ');

    return (
        <>
            <Backdrop
                show={props.show}
                onClick={props.onCloseDrawer}/>

            <div
                className={sideDrawerClasses}>
                <div className={styles.logo}>
                    <Logo/>
                </div>

                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </>
    );
}
