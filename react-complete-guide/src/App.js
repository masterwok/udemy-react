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

    onSwitchName = (newName) => {
        // DO NOT DO THIS: this.state.persons[0].name = 'John';
        // React will not recognize state changes when mutated directly
        // use setState(...) instead.

        this.setState({
            persons: [
                {name: newName, age: 123}
                , {name: 'Jeremy', age: 20}
                , {name: 'Nigel', age: 5}
            ]
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
                {this.state.persons.map(p =>
                    <Person
                        name={p.name}
                        age={p.age}
                        click={this.onSwitchName.bind(this, 'Max')}
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
