import React, { useState } from 'react'
import TextField  from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'



const Login = () => {

    const [student, setStudent] = useState({
      email: '', 
      matric_No: '',
    })

    const router  = useRouter()

    const handleChange = (e) => {
      setStudent({ ...student , [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault()

      let res;

      try {
    
        const data = await axios.post('/api/auth/login', student);
        res = data.statusText
      
        console.log(data);
      
    } catch (error) { 
      console.log(error); 
    }

    if(res){
      return router.push('../')
    }
    }


  return (
    <div className='flex justify-center bg-green-500 px-5 items-center pb-10 min-h-screen'>
        <form onSubmit={handleSubmit}  className="bg-white flex flex-col gap-5 mt-5 p-5 rounded-md shadow-lg w-[100%] lg:w-[30%]">
        <h1 className='text-center font-bold'>LOGIN </h1>
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

            <p>Already have an account <Link className='text-blue-500' href='/authenicate/register'>Click here to Re    </Link></p>

            <Button type='submit' className='bg-green-800 text-white hover:bg-green-700'>Submit</Button>
        </form>

    </div>
  )
}

export default Login