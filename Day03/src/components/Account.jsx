import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../actions'

const Account = () => {
  const [val, setval] = useState();
  const amount = useSelector(state => state.account.amount)
  const dispatch = useDispatch();
  return (
    <div className='b-2 p-5 mt-10'>
          <h1 className="text-red">Account Component</h1>
          <h4 className="text-yellow p-5">Amount: {amount} </h4>

          <div className="flex-row">
        <button className="p-5" onClick={() => {
          dispatch(increment())
              }} >Increase</button>
        <button className="p-5" onClick={() => {
          dispatch(decrement())
              }}>Decrease</button>
        <input onChange={(e) => {
          setval(e.target.value)
              }} value={val}  placeholder='Increase Value' type="number" name="" id="" className="p-5" />
        <button onClick={() => {
          dispatch(incrementByAmount(val))
              }} className="p-5" >IncreaseByAmount</button>
          </div>
  </div>
  )
}

export default Account
