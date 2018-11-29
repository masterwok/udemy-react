import React, {Component} from 'react';
import Person from './Person/Person.js'
import './App.css';

class App extends Component {

    state = {
        persons: [
            {name: 'Jonathan', age: 28}
            , {name: 'Jeremey', age: 20}
            , {name: 'Nigel', age: 5}
        ]
        , otherState: 'some other state'
    };

    onSwitchName = () => {
        // DO NOT DO THIS: this.state.persons[0].name = 'John';
        // React will not recognize state changes when mutated directly
        // use setState(...) instead.

        this.setState({
            persons: [
                {name: 'John', age: 28}
                , {name: 'Jeremey', age: 20}
                , {name: 'Nigel', age: 666}
            ]
        });
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.onSwitchName}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
