import React from 'react';
import Person from "../Person/Person";

export default (props) => props.isVisible
    ? props.persons.map((person, index) =>
        <Person
            name={person.name}
            age={person.age}
            click={props.onDeletePerson.bind(this, index)}
            onNameChange={(event) => props.onNameChange(event, person.id)}/>
    )
    : null;

