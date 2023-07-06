import React from 'react'
import Account from './components/Account'
import Bonus from './components/Bonus'

import {useSelector} from 'react-redux'
import Admin from './components/Admin'
const App = () => {
  // create slice ma deyeko nam yaha kam lagxa
const amount=useSelector(state=> state.account.amount)
 const points=useSelector(state => state.bonus.points) 
  return (
    <div className='h-full bg-black'>
      <h1 className="text-white">Current Amount: {amount}</h1>
      <h1 className="text-white">Bonus: {points} </h1>

      <Account></Account>
      <Bonus></Bonus>
      <Admin></Admin>
    </div>
  )
}

export default App
