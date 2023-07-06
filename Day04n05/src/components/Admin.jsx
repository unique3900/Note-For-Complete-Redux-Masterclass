import React from 'react'
import { useGetAccountsQuery } from '../api/adminSlice'

// Day 05 RTK qurty (Optional of asyncThunk)
const Admin = () => {

    // Destructure data,error,isLoading is prebuild
    const { data, error, isLoading } = useGetAccountsQuery();

  return (
    <div className='b-2 p-5 mt-10'>
          <h1 className="text-red">Admin Component</h1>
          
          <div className="flex-col">
              <h4 className="text-yellow p-5">Admin Component </h4>
              {
                  data && data.map((item, index) => (
                      <p className="text-white" key={index}>{index} :
                          { item.amount }</p>
                  ))
       }
             
          </div>
  </div>
  )
}

export default Admin
