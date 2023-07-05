import React,{useState} from 'react'


const Account = () => {
  const [val, setval] = useState();

  return (
    <div className='b-2 p-5 mt-10'>
          <h1 className="text-red">Account Component</h1>
          <h4 className="text-yellow p-5">Amount:  </h4>

          <div className="flex-row">
        <button className="p-5" >Increase</button>
        <button className="p-5" >Decrease</button>
        <input onChange={(e) => {
          setval(e.target.value)
              }} value={val}  placeholder='Increase Value' type="number" name="" id="" className="p-5" />
        <button 
           className="p-5" >IncreaseByAmount</button>
          </div>
  </div>
  )
}

export default Account
