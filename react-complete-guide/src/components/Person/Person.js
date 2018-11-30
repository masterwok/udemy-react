import React, {Component} from 'react';
import styles from './Person.module.css';
import WithClass from "../../hoc/WithClass";
import secondWithClass from "../../hoc/secondWithClass";

class Person extends Component {

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

    componentWillUnmount() {
        console.log('ComponentWillUnmount invoked.');
    }

    render() {
        console.log('Render invoked.');

        return <>
            <p onClick={this.props.click}>Hi, I'm {this.props.name} and I'm {this.props.age} years
                old!</p>
            <p onClick={this.props.click}>{this.props.children}</p>
            <input
                type="text"
                onChange={this.props.onNameChange}
                value={this.props.name}/>
        </>
    }
}

export default secondWithClass(Person, styles.Person);

