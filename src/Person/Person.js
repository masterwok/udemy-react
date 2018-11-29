import React from 'react';

const getAge = () => Math.floor(Math.random() * 28);

const person = () => {
    return (
        <p>I'm a person and I'm {getAge()} years old!</p>
    )
};

export default person;