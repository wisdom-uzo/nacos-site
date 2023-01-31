"use client"
import React, { useState } from 'react'
import TextField  from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from 'next/link'



const page = () => {

    const [student, setStudent] = useState({
      firstName: '',
      middleName:'',
      lastName:'',
      phoneNo: '',
      email: '', 
      matric_No: '',
      level: ''
    })

    const handleChange = (e) => {
      setStudent({ ...student , [e.target.name]: e.target.value})
    }


  return (
    <div className='flex justify-center bg-gray-900 items-center pb-10 min-h-screen'>
        <div className="bg-white flex flex-col gap-5 mt-5 p-5 rounded-md shadow-lg w-[100%] lg:w-[30%]">
        
            <TextField
              required
              id="outlined-required"
              label="E-mail"
              type='email'
              name=""
              value=''
            />

            <TextField
              required
              id="outlined-required"
              type='text'
              name=""
              label="Matric-No"
              value=''
            />

            <p>Already have an account <Link className='text-blue-500' href='/auths/login'>Click here to Re    </Link></p>

            <Button className='bg-green-800 text-white hover:bg-green-700'>Submit</Button>
        </div>

    </div>
  )
}

export default page