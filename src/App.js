import React, {Component} from 'react'
import './App.css'

class App extends Component {
  state ={
    output: ''
  }
  handleDisplay = (e) => {
    const output = this.state.output;

    this.setState({
      output: output.concat(e.target.value)
    })
  }

  handleClear = () => {
    this.setState ({
      output : ''
  })
}
  handleDelete = () => {
    const output = this.state.output;
    
    this.setState({
      output: output.slice(0, -1)
    })
  }

  handleCalculate = () => {
    const output = this.state.output;

    try{
      this.setState({
        output: (eval(output))
      })
    }
    catch (err) {
      this.setState({
        output: ('Error')
      })
    }
  }
  render(){
    return (
      <div className="App">
        <div className='Calculator'>
          <input className='Input' type='text' placeholder="0" value={this.state.output}/>
          <div className='Buttons'>
            <button className='Character' onClick={this.handleClear}>C</button>
            <button className='Character' onClick={this.handleDelete}>DEL</button>
            <button className='Character' onClick={this.handleDisplay}>00</button>
            <button className='Character' value= '/' onClick={this.handleDisplay}>/</button>
            <button className='Number' value= '7' onClick={this.handleDisplay}>7</button>
            <button className='Number' value= '8' onClick={this.handleDisplay}>8</button>
            <button className='Number' value= '9' onClick={this.handleDisplay}>9</button>
            <button className='Character' value= '-' onClick={this.handleDisplay}>-</button>
            <button className='Number' value= '4' onClick={this.handleDisplay}>4</button>
            <button className='Number' value= '5' onClick={this.handleDisplay}>5</button>
            <button className='Number' value= '6' onClick={this.handleDisplay}>6</button>
            <button className='Character' value= '*' onClick={this.handleDisplay}>*</button>
            <button className='Number' value= '1' onClick={this.handleDisplay}>1</button>
            <button className='Number' value= '2' onClick={this.handleDisplay}>2</button>
            <button className='Number' value= '3' onClick={this.handleDisplay}>3</button>
            <button className='Character' value= '+' onClick={this.handleDisplay}>+</button>
            <button className='Character' value= '.' onClick={this.handleDisplay}>.</button>
            <button className='Number' value= '0' onClick={this.handleDisplay}>0</button>
            <button className='CharacterEquals' onClick={this.handleCalculate} value= '='>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
