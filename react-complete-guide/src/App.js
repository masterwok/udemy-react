import React, {Component} from 'react';
import Person from './Person/Person.js'
import './App.css';

class App extends Component {

    state = {
        persons: [
            {name: 'Jonathan', age: 28}
            , {name: 'Jeremy', age: 20}
            , {name: 'Nigel', age: 5}
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

    onNameChange = (event) => {
        this.setState({
            persons: [
                {name: event.target.value, age: 123}
                , {name: 'Jeremy', age: 20}
                , {name: 'Nigel', age: 5}
            ]
        });
    };

    onTogglePersons = () => this.setState({
        isPersonsVisible: !this.state.isPersonsVisible
    });

    render() {

        // Scoped styles are defined as objects and applied through the style attribute
        const buttonStyle = {
            margin: '16px auto'
            , backgroundColor: 'white'
            , font: 'inherit'
            , border: '1px solid blue'
            , padding: '8px'
            , cursor: 'pointer'
        };

        const persons = this.state.isPersonsVisible
            ? <div>
                {this.state.persons.map((p, i) =>
                    <Person
                        name={p.name}
                        age={p.age}
                        click={this.onDeletePerson.bind(this, i)}
                        onNameChange={this.onNameChange}/>
                )}
            </div>
            : null;

        return (
            <div className="App">
                {/*Lambda expression callback (not preferred)*/}
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
