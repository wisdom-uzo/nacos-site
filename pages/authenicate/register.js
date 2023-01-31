import React, { useState } from 'react'
import TextField  from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from 'next/link'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'


const Register = () => {

    const [student, setStudent] = useState({
      firstName: '',
      middleName:'',
      lastName:'',
      phoneNo: '',
      email: '', 
      matric_No: '',
      level: ''
    })

    const router  = useRouter()

    const handleChange = (e) => {
      setStudent({ ...student , [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      let res;

      try {
    
        const data = await axios.post('/api/auth/register', student);
        
        res = data.statusText
      
    } catch (error) { 
      console.log(error);    
    }
  
    

      if(!res){
       return toast.error('Your detailes exits')
         
      }
      toast.success('Your detailes has been added')
    
      router.push('../')
    }


  return (
    <div className='flex justify-center bg-green-500 px-5 items-start pb-10 min-h-screen'>
    <ToastContainer />
        <form onSubmit={handleSubmit} className="bg-white flex flex-col gap-5 mt-5 p-5 rounded-md shadow-lg w-[100%] lg:w-[30%]">
          <h1 className="text-center font-bold"> CREATE ACCOUNT</h1>
            <TextField
            required
            id="outlined-required"
            label="First Name"
            type='text'
            size="small"
            name="firstName"
            value={student.firstName}
            onChange={handleChange}
            />

            <TextField
              required
              id="outlined-required"
              label="Middle Name"
              type='text'
              name="middleName"
              size="small"
              value={student.middleName}
              onChange={handleChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Surname"
              type='text'
              name="lastName"
              size="small"
              value={student.lastName}
              onChange={handleChange}
            />
            <TextField
              required
              id="outlined-required"
              label="E-mail"
              type='email'
              name="email"
              size="small"
              value={student.email}
              onChange={handleChange}
            />

            <TextField
              required
              id="outlined-required"
              type='text'
              name="matric_No"
              label="Matric-No"
              size="small"
              value={student.matric_No}
              onChange={handleChange}
            />

            <TextField
              required
              id="outlined-required"
              type='text'
              name="phoneNo"
              label="Phone Number"
              size="small"
              value={student.phoneNo}
              onChange={handleChange}
            />

            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Level</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={student.level}
                label="level"
                size="small"
                name="level"
                onChange={handleChange}
            >
                    <MenuItem value='HND 2'>HND 2</MenuItem>
                    <MenuItem value='HND 1'>HND 1</MenuItem>
                    <MenuItem value='ND 2'>ND 2</MenuItem>
                    <MenuItem value='ND 1'>ND 1</MenuItem>
                
            </Select>
            </FormControl>

            <p>Already have an account <Link className='text-blue-500' href='/authenicate/login'>Click here to login</Link></p>

            <Button type='submit' className='bg-green-800 text-white hover:bg-green-700'>Submit</Button>
        </form>

    </div>
  )
}

export default Register