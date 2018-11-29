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
        , otherState: 'some other state'
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

    render() {
        return (
            <div className="App">
                {/*Lambda expression callback (not preferred)*/}
                <button onClick={() => this.onSwitchName('Max!!!')}>Switch Name</button>

                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.onSwitchName.bind(this, 'Max')} onNameChange={this.onNameChange}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.onSwitchName}/>

                {/*Bind syntax preferred over lambda expression*/}
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    click={this.onSwitchName.bind(this, 'Derp')}/>
            </div>
        );
    }
}

export default App;
