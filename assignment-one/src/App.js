import React, {Component} from 'react';
import './App.css';
import UserOutput from "./Components/UserOutput/UserOutput";
import UserInput from "./Components/UserInput/UserInput";

class App extends Component {
    state = {
        username: 'Jonathan'
    };

    onUsernameChanged = (event) => this.setState({
        username: event.target.value
    });

    render() {
        return (
            <div className="App">
                <UserInput
                    username={this.state.username}
                    onUsernameChanged={this.onUsernameChanged}/>
                <UserOutput username={this.state.username}/>
            </div>
        );
    }
}

export default App;
