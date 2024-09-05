import React from 'react'
import Link from 'next/link'

const Info = () => {
  return (
    <div className='w-full py-16 text-red-800'>
      <div className='max-w-[1240] mx-20 grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='text-red-900 md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Akshara Program</h1>
                <p className='my-3 text-lg'>Mana Samskriti’s accredited language teaching program is called Akshara.
                     This popular program has been helping many students all over the world
                      gain Telugu language skills in reading, writing and speaking. In addition,
                       many students obtained high school and college level credits with the
                        skills they gained in Akshara.</p>
            </div>
            {/* <div className='my-auto'>
                <div className='items-center justify-between text-center'>
                    <ul className='text-xl text-white m-8  py-3 hover:bg-red-900 cursor-pointer bg-red-800 rounded-md border-4 border-rose-900 justify-self-center'>
                        <p className='group relative'>
                            <Link target='_blank' href={"https://manasamskriti.org/home"}>Learn More</Link>
                        </p>
                      
                    </ul>
                </div>
            </div> */}
            <div className='my-auto'>
              <div className='items-center justify-between text-center'>
                <Link target='_blank' href="https://manasamskriti.org/home" passHref>
                  <div className='text-xl text-white m-8 py-3 hover:bg-red-900 cursor-pointer bg-red-800 rounded-md border-4 border-rose-900 justify-self-center'>
                    <p className='group relative'>
                      Learn More
                    </p>
                  </div>
                </Link>
              </div>
            </div>

      </div>
    </div>
  )
}

export default Info
