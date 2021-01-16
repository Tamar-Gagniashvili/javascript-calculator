import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import "./components/Button.css";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input) });
  };

  render() {
    return (
      <div className="app">

        <div className="calculator">
          <Input input={this.state.input} />
          <div className="firstDiv">
            <ClearButton id="clear" className="clear" handleClear={() => this.setState({ input: "" })} value="AC">
              AC
        </ClearButton>
            <Button id="divide" handleClick={this.addToInput}>/</Button>
            <Button id="multiply" handleClick={this.addToInput}>*</Button>
          </div>

          <Button id="seven" handleClick={this.addToInput}>7</Button>
          <Button id="eight" handleClick={this.addToInput}>8</Button>
          <Button id="nine" handleClick={this.addToInput}>9</Button>
          <Button id="subtract" handleClick={this.addToInput}>-</Button>
          <Button id="four" handleClick={this.addToInput}>4</Button>
          <Button id="five" handleClick={this.addToInput}>5</Button>
          <Button id="six" handleClick={this.addToInput}>6</Button>
          <Button id="add" handleClick={this.addToInput}>+</Button>
          <Button id="one" id="one" handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button id="equals" handleClick={() => this.handleEqual()}>=</Button>
          <div className="last">
            <Button id="zero" handleClick={this.addToInput}>0</Button>
            <Button id="decimal" handleClick={this.addToInput}>.</Button>
          </div>

          <p>Desighned and Coded by <br></br><b>Tamar Gagniashvili</b></p>
        </div>

      </div>

    );
  }
}

export default App;
