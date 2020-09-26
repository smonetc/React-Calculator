import React, { Component } from 'react';
import './App.css';
import ResultComponent from './ResultComponent';
import KeypadComponent from './KeypadComponent';

class App extends Component{
  constructor(){
    super()
    this.state ={
      result:''
    }
  }


onButtonClick = button => {
  if (button === '='){
    this.calculate() //Calculate the result of our expression, this is triggered, when “=” button is pressed.
  }
  else if(button === 'C'){
    this.reset() //Clear our output, this is trigered when “CLEAR” is pressed.
  }
  else if(button === 'BACK'){
    this.backspace() //Clear the last character that was pressed. triggered on “BACK”
  }
  else{
    this.setState({
      result: this.state.result + button
    })
  }
}
calculate = () => {
  try{
    this.setState({
      result: (eval(this.state.result) || "") + ""
    })
  }
  catch (e) {
    this.setState({
      result: 'error'
    })
  }
}

result = () => {
  this.setState({
    result: ''
  })
}

reset = () => {
  this.setState({
    result: ""
  })
}

backspace = () => {
  this.setState({
      result: this.state.result.slice(0, -1)
  })
};


  render(){
  return (
    <div className="App">
      <header>
        <h2>Let's Calculate</h2>
        <ResultComponent results={this.state.result}/>
        <KeypadComponent onClick={this.onButtonClick} />
      </header>
    </div>
  );
  }
}

export default App;
