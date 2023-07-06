import React from 'react'
import { useAddAccountsMutation, useDeleteAccountMutation, useGetAccountsQuery, useUpdateAccountMutation } from '../api/adminSlice'

// Day 05 RTK qurty (Optional of asyncThunk)
const Admin = () => {

    // Destructure data,error,isLoading is prebuild
    const { data, error, isLoading } = useGetAccountsQuery();

    // Now for POST method
    const [addAccount, response] = useAddAccountsMutation(); //addAccount ko thau ma j nam deye pani huncha tala dispatcher jasari kam garxa

    // Delete Method
    const [deleteAccount, resp] = useDeleteAccountMutation();

    // Update
    const [updateAccount] = useUpdateAccountMutation();
  return (
    <div className='b-2 p-5 mt-10'>
          <h1 className="text-red">Admin Component</h1>
          
          <div className="flex-col">
              <h4 className="text-yellow p-5">Admin Component </h4>
              {
                  data && data.map((item, index) => (
                      <div className='flex-row'>
                          <p className="text-white" key={index}>{index} :
                              {item.amount}</p>
                          <button className="" onClick={() => {
                              deleteAccount(item.id)
                          }} >Delete</button>
                         <button className="" onClick={() => {
                              updateAccount({amount:6969,id:item.id})
                          }} >Update</button>
                          
                      </div>
                      
                      
                      
                  ))
              }
              <button onClick={() => {
                  addAccount(2999,data.length-1)
              }}>Add Account</button>
             
          </div>
  </div>
  )
}

export default Admin
