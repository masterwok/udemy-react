import React, {PureComponent} from 'react';
import styles from './App.module.css';
import Persons from "../../components/Persons/Persons";
import Cockpit from "../../components/Cockpit/Cockpit";
import secondWithClass from '../../hoc/secondWithClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

    state = {
        persons: [
            {id: 1, name: 'Jonathan', age: 28}
            , {id: 2, name: 'Jeremy', age: 20}
            , {id: 3, name: 'Nigel', age: 5}
        ]
        , isAuthenticated: false
        , isPersonsVisible: false
        , toggleClickedCount: 0
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

    // setState is an asynchronous call when invoked with an object as a parameter.
    // Therefore, it is not a good idea to reference previous state directly on the state object.
    // Instead, pass setState(..) a function that accepts both the previous state and current
    // properties. By doing this, the previous state can be safely accessed preventing race conditions.
    onTogglePersons = () => this.setState((oldState, props) => ({
        toggleClickedCount: oldState.toggleClickedCount + 1
        , isPersonsVisible: !this.state.isPersonsVisible
    }));

    onAuthenticate = () => this.setState({
        isAuthenticated: true
    });

    render() {
        console.log('Render invoked.');

        return (
            <>
                <button onClick={() => this.setState({isPersonsVisible: true})}>
                    Show Persons
                </button>
                <button onClick={this.onAuthenticate}>Authenticate</button>
                <Cockpit
                    isPersonsVisible={this.state.isPersonsVisible}
                    personsCount={this.state.persons.length}
                    onToggleButtonClick={this.onTogglePersons}/>

                <AuthContext.Provider value={this.state.isAuthenticated}>
                    {this.state.isPersonsVisible ? <Persons
                        persons={this.state.persons}
                        onDeletePerson={this.onDeletePerson}
                        onNameChange={this.onNameChange}/> : null}
                </AuthContext.Provider>

            </>
        );
    }
}

export default secondWithClass(App, styles.App);
