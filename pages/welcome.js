import Link from 'next/link'
import React from 'react'
import { Footer } from '../components'

const welcome = () => {
  return (
    <div className='flex items-center justify-end h-screen  flex-col bg-green-500'>

        <div className="text-center uppercase mb-10">
          <h1 className='text-[5rem] text-white font-bold'>NACOS</h1>
          <p>Department of computer science <br /> gateway ict polytechnic</p>
        </div>

        <div className="">
            <div className="border bg-white px-20 py-2 font-medium rounded-full shadow-lg mb-4 hover:shadow-xl">
                <Link href='/authenicate/login'>Login</Link>
            </div>

            <div className="border bg-white px-20 py-2 font-medium rounded-full shadow-lg mb-4 hover:shadow-xl">
                <Link href='/authenicate/register'>Register</Link>
            </div>

        </div>
        <p className=' text-sm mt-10 px-5 text-center'>By signing in, your have agreed with our terms and conditions </p>

        <Footer/>
    </div>
  )
}

export default welcome