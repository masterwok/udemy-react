import React from 'react';

export default (
    WrapperComponent
    , className
) => (props) => (
    <div className={className}>
        <WrapperComponent/>
    </div>
);