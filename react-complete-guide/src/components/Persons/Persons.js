import React, {PureComponent} from 'react';
import Person from "../Person/Person";


class Persons extends PureComponent {

    constructor(props) {
        super(props);

        console.log('Constructor invoked.');
    }

    componentWillMount() {
        console.log('ComponentWillMount invoked.');
    }

    componentDidMount() {
        console.log('ComponentDidMount invoked.');
    }

    componentWillReceiveProps(nextProps) {
        console.log('ComponentWillReceiveProps invoked', nextProps);
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate invoked', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate invoked');
    }

    render() {
        console.log('Render invoked.');

        return this.props.isVisible
            ? this.props.persons.map((person, index) =>
                <Person
                    key={person.id}
                    position={index}
                    name={person.name}
                    age={person.age}
                    click={this.props.onDeletePerson.bind(this, index)}
                    onNameChange={(event) => this.props.onNameChange(event, person.id)}/>
            )
            : null;
    }
}

export default Persons;



