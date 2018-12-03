import React, {Component} from 'react';
import styles from './Layout.module.css';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";


class Layout extends Component {

    state = {
        isSideDrawerShown: false
    };

    hideSideDrawer = () => this.setState({
        isSideDrawerShown: false
    });

    toggleSideDrawer = () => this.setState((prevState) => ({
        isSideDrawerShown: !prevState.isSideDrawerShown
    }));

    render = () => (
        <>
            <Toolbar onToggleDrawer={this.toggleSideDrawer}/>

            <SideDrawer
                show={this.state.isSideDrawerShown}
                onCloseDrawer={this.hideSideDrawer}/>

            <main className={styles.content}>
                {this.props.children}
            </main>
        </>
    );
}

export default Layout;
