import React, {Component} from 'react';
import Person from './Person/Person.js'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Person/>
                <Person/>
            </div>
        );
    }
}

export default App;
