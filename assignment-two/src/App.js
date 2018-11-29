import React, {Component} from 'react';
import './App.css';
import CharComponent from "./Components/CharComponent/CharComponent";
import ValidationComponent from "./Components/ValidationComponent/ValidationComponent";

class App extends Component {

    state = {
        inputText: ""
    };

    onTextChanged = (event) => this.setState({
        inputText: event.target.value
    });

    onRemove = (charIndex) => {
        let inputText = [...this.state.inputText];

        inputText.splice(charIndex, 1);

        return this.setState({
            inputText: inputText.join('')
        });
    };

    render() {
        return (
            <div className="App">
                <input
                    type="text"
                    onChange={this.onTextChanged}
                    value={this.state.inputText}/>

                <p>Text Length: {this.state.inputText.length}</p>

                <ValidationComponent textLength={this.state.inputText.length}/>

                {[...this.state.inputText].map((c, i) =>
                    <CharComponent
                        key={i}
                        onRemove={this.onRemove.bind(this, i)}
                        character={c}/>
                )}
            </div>
        );
    }
}

export default App;
