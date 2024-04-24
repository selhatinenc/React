import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

const Base_URL="http://localhost:3005/"
function App() {
  const getAllUsers=async()=>{
    const response= await axios.get(Base_URL+"users")
    console.log(response.data)

  }
  const getUserById=async()=>{
    const response= await axios.get(`${Base_URL}users/2`)
    console.log(response.data)

  }
  useEffect(()=>{
    getAllUsers();
  },[])

  return (
    <>
      
    </>
  )
}

export default App
