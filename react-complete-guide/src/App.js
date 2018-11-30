import React, {Component} from 'react';
import Person from './Person/Person.js'
import styles from './App.module.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {

    state = {
        persons: [
            {id: 1, name: 'Jonathan', age: 28}
            , {id: 2, name: 'Jeremy', age: 20}
            , {id: 3, name: 'Nigel', age: 5}
        ]
        , isPersonsVisible: false
    };

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
        let persons = null;
        const buttonClasses = [styles.toggleButton];

        if (this.state.isPersonsVisible) {
            persons = <div>
                {this.state.persons.map((person, index) =>
                    <ErrorBoundary key={person.id}>
                        <Person
                            name={person.name}
                            age={person.age}
                            click={this.onDeletePerson.bind(this, index)}
                            onNameChange={(event) => this.onNameChange(event, person.id)}/>
                    </ErrorBoundary>
                )}
            </div>;

            buttonClasses.push(styles.toggleButtonVisible)
        }

        const containerClasses = [];

        if (this.state.persons.length <= 2) {
            containerClasses.push(styles.red);
        }

        if (this.state.persons.length <= 1) {
            containerClasses.push(styles.bold);
        }

        return (
            <div className={styles.App}>
                <h1>This is a React app!</h1>
                <p className={containerClasses.join(' ')}>Foo bar baz bax</p>
                <button
                    className={buttonClasses.join(' ')}
                    onClick={this.onTogglePersons}>
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
