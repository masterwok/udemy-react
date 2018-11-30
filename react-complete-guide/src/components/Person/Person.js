import React, {Component} from 'react';
import styles from './Person.module.css';
import secondWithClass from "../../hoc/secondWithClass";
import PropTypes from 'prop-types';

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

        // Referenced elements are available only after render is invoked.
        // Therefore mutations to referenced elements should occur in componentDidMount()
        if (this.props.position === 0) {
            this.inputElement.focus();
        }
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
                // Add reference to this element on this component.
                // Referenced elements can only exist in stateful class components.
                ref={(el) => {
                    this.inputElement = el;
                }}
                type="text"
                onChange={this.props.onNameChange}
                value={this.props.name}/>
        </>
    }
}

// Restrict and defined property types.
Person.propTypes = {
    click: PropTypes.func
    , change: PropTypes.func
    , name: PropTypes.string
    , age: PropTypes.number
    , position: PropTypes.number
};

export default secondWithClass(Person, styles.Person);

