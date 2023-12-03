
import { useState } from 'react'
import './App.css'
import Countries from './Component/Countries/Countries';

function App() {
  const [value, setValue]= useState(0)

  const increament =()=> {
    console.log('increasing');
    // let updateCount = value + 1
    setValue(value + 1)
  }
  const decreament =()=> {
    if(value > 0){
      setValue(value - 1)
    }  
  }

  
  return (
    <div className='app'>

      <div className='counter'>
      <h1>Counter: {value}</h1>
      <button onClick={increament}>+</button>
      <button onClick={decreament}>-</button>
      </div>

    {/* Countries component */}
    <Countries></Countries>
    

    </div>
  )
}

export default App
