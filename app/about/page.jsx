import React from 'react'
import TestInfo from '../components/TestInfo'
import Footer from '../components/Footer'

const page = () => {
  return (
    // <div className='min-h-screen p-4'>About Page</div>
    <main className=" min-h-screen">
      <div className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[500px] relative">
          <div className="absolute w-full h-full text-red-100 max-h-[500px] bg-gradient-to-bl from-transparent to-black flex flex-col justify-end p-10">
            <h1 className="px-4 text-4xl sm:text-7xl md:text-12xl lg:18xl font-bold"> About Our Tests </h1>
          </div>
          <img className='w-full max-h-[500px] object-cover' src= 'classroom.jpg' alt="/" />

        </div>
      </div>
      <TestInfo/>
      <Footer/>
  
    </main>
  )
}

export default page
