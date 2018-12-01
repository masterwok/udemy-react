import React from 'react';


export default (props) => (
    <>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </>
);
