import React, {Component} from 'react';
import Person from './Person/Person.js'
import './App.css';

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

        // Scoped styles are defined as objects and applied through the style attribute
        const buttonStyle = {
            margin: '16px auto'
            , backgroundColor: 'green'
            , color: 'white'
            , font: 'inherit'
            , border: '1px solid blue'
            , padding: '8px'
            , cursor: 'pointer'
        };

        let persons = null;

        if (this.state.isPersonsVisible) {
            persons = <div>
                {this.state.persons.map((person, index) =>
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        click={this.onDeletePerson.bind(this, index)}
                        onNameChange={(event) => this.onNameChange(event, person.id)}/>
                )}
            </div>

            buttonStyle.backgroundColor = 'red';
        }

        const classes = [];

        if (this.state.persons.length <= 2) {
            classes.push('red');
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>This is a React app!</h1>
                <p className={classes.join(' ')}>Foo bar baz bax</p>
                <button
                    style={buttonStyle}
                    onClick={this.onTogglePersons}>
                    Toggle Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
