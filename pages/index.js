import axios from 'axios'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Header } from '../components'
import { withSessionSsr } from '../lib/withSession'
import error from '../img/error.jpg'
import Image from 'next/image'

const Index = ({students}) => {
  
  const router = useRouter()

  useEffect(() => {
   if(!students){
    router.push('/welcome') 
   }
  }, [students])
  
  return (
    <div>
        <Head>
          <title>nacos</title>
        </Head>

        <Header user={students} />

        <main className='flex items-center h-screen flex-col text-center px-5 relative'>
        <Image src={error} alt=''   className='object-contain w-[50%] '  />
        {students && (
          <h3 className=' mb-4'> <span className=' font-semibold'>Hello </span>
           <br /> {`${students.data.lastName} ${students.data.firstName}`} 
            <br/> thanks for signing up your, information has be recorded  <br /> the site is still under construction by your HOC and will be completed soon</h3>
        )}
           <h2>Also note that Programming with Python [COM315] Test starts from 1st of feb, futher information will be passed to you soon</h2>
        </main>
    </div>
  )
}

export default Index



export const getServerSideProps = withSessionSsr( async ({req, res}) => {

    const user = req.session.user
    

    if(!user){
        return {
          redirect:{
            destination:'/welcome',
            permanent: false
          }
        }
    }
    const {data} = await axios.get(`http://localhost:3000/api/user/${user?.id}`)
  
	
  
	return {
		props: {
			students: data
		},
	}; 
}

)