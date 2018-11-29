import React from 'react';

const getTextMessage = length => {
    if (length < 5) {
        return "Text too short";
    }

    return length > 10
        ? "Text too long."
        : "Valid text input :]";
};

export default (props) => {
    return (
        <div>
            <h1>{getTextMessage(props.textLength)}</h1>
        </div>
    )
};
