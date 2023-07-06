import React,{useState} from 'react'

import { useDispatch,useSelector } from 'react-redux';
import { decreament, increament,incByAmt,getUserAmount } from '../slices/accountSlice';


const Account = () => {
  const [val, setval] = useState();

const amount=useSelector(state=>state.account.amount)
  const dispatch = useDispatch();
  return (
    <div className='b-2 p-5 mt-10'>
          <h1 className="text-red">Account Component</h1>
          <h4 className="text-yellow p-5">Amount: {amount} </h4>

          <div className="flex-row">
        <button className="p-5" onClick={() => {
          dispatch(increament())
        }}>Increase</button>
        <button className="p-5" onClick={() => {
          dispatch(decreament())
        }} >Decrease</button>
        <input onChange={(e) => {
          setval(e.target.value)
              }} value={val}  placeholder='Increase Value' type="number" name="" id="" className="p-5" />
        <button 
           className="p-5" onClick={() => {
            dispatch(incByAmt(parseInt(val) ))
          }}>IncreaseByAmount</button>
        
        <button 
           className="p-5" onClick={() => {
            dispatch(getUserAmount(1))
          }}>User Amount</button>
          </div>
  </div>
  )
}

export default Account
