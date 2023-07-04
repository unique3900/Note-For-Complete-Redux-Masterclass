import React from 'react'
import Account from './components/Account'
import Bonus from './components/Bonus'
import { useSelector } from 'react-redux'



const App = () => {
  const amount = useSelector(state => state.account.amount);
  const bonus = useSelector(state => state.bonus.points)
  return (
    <div className='h-full bg-black'>
      <h1 className="text-white">Current Amount: { amount}</h1>
      <h1 className="text-white">Bonus: {bonus}</h1>

      <Account></Account>
      <Bonus></Bonus>
    </div>
  )
}

export default App
