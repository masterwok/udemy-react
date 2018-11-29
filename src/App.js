import React, {Component} from 'react';
import Person from './Person/Person.js'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Person name="Jonathan" age="28"/>
                <Person name="Jeremy" age="20"/>
                <Person name="Nigel" age="5">
                    Hobbies: Being a blob.
                </Person>
            </div>
        );
    }
}

export default App;
