import { Button } from '@mui/material'
import axios from 'axios'
import { Router, useRouter } from 'next/router'
import React from 'react'
import {FaHome,} from 'react-icons/fa'

const header = ({user}) => {
  const router = useRouter()

  const handleLogout = async () => {
    const data = await axios.get('/api/auth/logout')
    router.push('/welcome')
   

  }

  console.log(user.data)
  return (
    <div className='flex py-3 justify-between px-5'>
      <div className="">NACOS </div>
      <div className="">
          <FaHome />
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center items-center space-x-1"><span className='mr-1 bg-orange-500 text-white p-2 rounded-full'>
          {user?.data.firstName[0]}
          {user?.data.lastName[0]}</span> {user.data.firstName}</div>
        <Button onClick={handleLogout}>logout</Button>
      </div>
    </div>
  )
}

export default header