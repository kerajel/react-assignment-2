import React, { Component } from 'react';
import './index.css';
import './App.css';
import Input from './Input/Input'
import Validation from './Validation/Validation'
import CharComponent from './CharComponent/CharComponent'
import './Input/Input.css';

class App extends Component {
  state = {
    input: {
      value: "",
      length: 0
    },
    chars: []
  }

  inputChangedHandler = (event) => {
    console.log('input works');
    this.setState(
      {
        input: {
          value: event.target.value,
          length: event.target.value.length
        },
        chars: event.target.value.split('')
      }
    )
  }

  deleteCharHandler = (charIndex) => {
    console.log('delete works');
    const chars = [...this.state.chars];
    chars.splice(charIndex, 1);
    this.setState({ chars: chars });
  }

  render() {

      const charComponents = (<div>
        {this.state.chars.map((char, index) => {
          return <CharComponent
            click={() => this.deleteCharHandler(index)}
            text={char}
            index={index}
            key={index}
          />
        })}
      </div>
      );
    

    return <div className="App">
      <h1>Assignment #2</h1>
      <Input
        value={this.state.input.value}
        length={this.state.input.length}
        changed={(event) => this.inputChangedHandler(event)}
      />
      <Validation
        valText={this.state.input.length > 5 ? "Input is fine" : "Input is not fine yet"}
      />
      {charComponents}
    </div>;
  }
}


export default App;
