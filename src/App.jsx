
import { useState } from 'react'
import './App.css'

import Friend from './Component/Friend/Friend'
import Institute from './Component/Institute/Institute'

function App() {
  const [count, setCount]= useState(0)

  const increament =()=> {
    console.log('increasing');
    let updateCount = count + 1
    setCount(updateCount)
  }
  const decreament =()=> {
    let upgreadCount = count - 1
    setCount(upgreadCount)
  }

  
  return (
    <div className='app'>

      <h1>Counter: {count}</h1>
      <button onClick={increament}>+</button>


      <button onClick={decreament}>-</button>


      {/* <h1 className='title'>World TouR</h1> */}

      {/* <h1>ReactDay2</h1>
      <Friend> </Friend>
      <Institute></Institute>

     <Friend name = 'Rohul' age = {12} country = 'BD' ></Friend>
      <Friend name = 'Mendi' age = {22} country = 'BD' ></Friend>
      <Friend name = 'Habiba' age = {32} country = 'BD' ></Friend> */}

    </div>
  )
}

export default App


// function Friend (props) {
//   console.log(props);

//   return(
//     <div className='friend'>
//       <h1>Friend:{props.name} </h1>
//       <h1>Age:{props.age} </h1>
//       <h1>Country:{props.country} </h1>
//     </div>
//   )
// }