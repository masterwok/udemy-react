import React from 'react';

const style = {
    display: 'inline-block'
    , padding: '16px'
    , textAlign: 'center'
    , margin: '16px auto'
    , border: '1px solid black'
};

export default (props) => {
    return (
        <div
            style={style}
            onClick={props.onRemove}>
            <h1>{props.character}</h1>
        </div>
    )
};
