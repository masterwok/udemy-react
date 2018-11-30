import React, {Component} from 'react';
import styles from './Person.module.css';

class Person extends Component {
    render() {
        return <div className={styles.Person}>
            <p onClick={this.props.click}>Hi, I'm {this.props.name} and I'm {this.props.age} years
                old!</p>
            <p onClick={this.props.click}>{this.props.children}</p>
            <input
                type="text"
                onChange={this.props.onNameChange}
                value={this.props.name}/>
        </div>
    }
}

export default Person;

