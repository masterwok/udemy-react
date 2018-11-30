import React, {PureComponent} from 'react';
import styles from './App.module.css';
import Persons from "../../components/Persons/Persons";
import Cockpit from "../../components/Cockpit/Cockpit";
import WithClass from "../../hoc/WithClass";

class App extends PureComponent {

    state = {
        persons: [
            {id: 1, name: 'Jonathan', age: 28}
            , {id: 2, name: 'Jeremy', age: 20}
            , {id: 3, name: 'Nigel', age: 5}
        ]
        , isPersonsVisible: false
    };

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

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate invoked', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate invoked');
    }

    onDeletePerson = (index) => {
        // Create a copy of the array to  ensure immutability.
        // This can also be done with slice()
        const persons = [...this.state.persons];

        persons.splice(index, 1);

        return this.setState({
            persons: persons
        });
    };

    onNameChange = (event, id) => {
        const personIndex = this
            .state
            .persons
            .findIndex(p => p.id === id);

        const persons = [...this.state.persons];

        persons[personIndex] = {
            ...this.state.persons[personIndex]
            , name: event.target.value
        };

        return this.setState({
            persons: persons
        });
    };

    onTogglePersons = () => this.setState({
        isPersonsVisible: !this.state.isPersonsVisible
    });

    render() {
        console.log('Render invoked.');

        return (
            <WithClass classes={styles.App}>
                <button onClick={() => this.setState({isPersonsVisible: true})}>Show Persons
                </button>
                <Cockpit
                    isPersonsVisible={this.state.isPersonsVisible}
                    personsCount={this.state.persons.length}
                    onToggleButtonClick={this.onTogglePersons}/>
                <Persons
                    isVisible={this.state.isPersonsVisible}
                    persons={this.state.persons}
                    onDeletePerson={this.onDeletePerson}
                    onNameChange={this.onNameChange}/>
            </WithClass>
        );
    }
}

export default App;
