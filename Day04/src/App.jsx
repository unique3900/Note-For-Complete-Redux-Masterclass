import React from 'react'
import Account from './components/Account'
import Bonus from './components/Bonus'

const App = () => {
  return (
    <div className='h-full bg-black'>
      <h1 className="text-white">Current Amount: </h1>
      <h1 className="text-white">Bonus: </h1>

      <Account></Account>
      <Bonus></Bonus>
    </div>
  )
}

export default App
