import React, { useState } from 'react'
// import Classes from './App.module.css';

const App = () => {
  const [output, setOutput] = useState('')

  const handleDisplay = (e) => {
    setOutput(output.concat(e.target.value))
  }

  const handleClear = () => {
    setOutput('')
  }

  const handleDelete = () => {
    setOutput(output.slice(0, -1))
  }

  const handleCalculate = () => {
    try{
      setOutput(eval(output))
    }
    catch (err) {
      setOutput('Error')
    }
  }
  return (
    <div className="App">
      <form>
        <input type='text' placeholder="0" value={output}/>
      </form>
      <div className='buttons'>
        <button className='character' onClick={handleClear}>C</button>
        <button className='character' onClick={handleDelete}>DEL</button>
        <button className='character'>%</button>
        <button className='character' value= '/' onClick={handleDisplay}>/</button>
        <button className='7' value= '7' onClick={handleDisplay}>7</button>
        <button className='8' value= '8' onClick={handleDisplay}>8</button>
        <button className='9' value= '9' onClick={handleDisplay}>9</button>
        <button className='character' value= '-' onClick={handleDisplay}>-</button>
        <button className='4' value= '4' onClick={handleDisplay}>4</button>
        <button className='5' value= '5' onClick={handleDisplay}>5</button>
        <button className='6' value= '6' onClick={handleDisplay}>6</button>
        <button className='character' value= '*' onClick={handleDisplay}>*</button>
        <button className='1' value= '1' onClick={handleDisplay}>1</button>
        <button className='2' value= '2' onClick={handleDisplay}>2</button>
        <button className='3' value= '3' onClick={handleDisplay}>3</button>
        <button className='character' value= '+' onClick={handleDisplay}>+</button>
        <button className='character' value= '.' onClick={handleDisplay}>.</button>
        <button className='' value= '0' onClick={handleDisplay}>0</button>
        <button className='character' value= '=' onClick={handleCalculate}>=</button>

      </div>
    </div>
  );
}

export default App;
