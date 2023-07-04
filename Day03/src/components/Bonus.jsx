import React from 'react'
import { useState } from 'react'
import { incrementBonus } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const Bonus = () => {
  const bonus = useSelector(state => state.bonus.points)
  
  const dispatch = useDispatch();
  return (
    <div className='b-2 p-5 mt-10'>
          <h1 className="text-red">Bonus Component</h1>
          
          <div className="flex-col">
              <h4 className="text-yellow p-5">Bonus: {bonus} </h4>
        <button className="p-5" onClick={() => {
          dispatch(incrementBonus())
        }} >Increase</button>
             
          </div>
  </div>
  )
}

export default Bonus
