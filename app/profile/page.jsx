'use client'
import React, {useEffect, useState} from 'react'
import { UserAuth } from '../context/AuthContext'
import RegisterPopout from '../components/RegisterPopout'


const page = () => {
  const {user} = UserAuth()
  const [loading, setLoading] = useState(true)
  const [showPopup, setShowPopup] = useState(false)
  const handleOnClose = () => setShowPopup(false)

  useEffect( ()=> {
    const checkAuthentication = async () => {
        await new Promise((resolve) => setTimeout(resolve, 50))
        setLoading(false);
    }
    checkAuthentication()
  }, [user])

  return (
    <div className='min-h-screen p-4'>
      
      {user ? (
        <>

        <div className="max-w-[1640px] mx-auto p-4">

          <div className="max-h-[500px] relative">
            <div className="absolute w-full h-full text-red-100 max-h-[500px] bg-gradient-to-bl from-transparent to-black flex flex-col justify-end p-10">
              <h1 className="px-4 text-4xl sm:text-7xl md:text-12xl lg:18xl font-bold"> Welcome, {user.displayName} </h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src='show.png' alt="/" />
          </div>
          <div className='py-5'>
            <button onClick={() => setShowPopup(true)} className='text-xl px-5 py-2 cursor-pointer bg-red-300 shadow-md hover:shadow-none hover:bg-red-400 hover:bg-opacity-70 rounded-md flex justify-center'>Register For A Test</button>
          </div>
          <RegisterPopout onClose={handleOnClose} visible={showPopup}/>

        </div>

        </>
      ) : (
        <p>You must be logged in to view this page</p>
      )}
      
    </div>
  )
}

export default page
