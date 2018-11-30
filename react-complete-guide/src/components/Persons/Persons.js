import React, {Component} from 'react';
import Person from "../Person/Person";


class Persons extends Component {

    render() {
        return this.props.isVisible
            ? this.props.persons.map((person, index) =>
                <Person
                    name={person.name}
                    age={person.age}
                    click={this.props.onDeletePerson.bind(this, index)}
                    onNameChange={(event) => this.props.onNameChange(event, person.id)}/>
            )
            : null;
    }
}

export default Persons;



