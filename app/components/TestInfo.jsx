import React from 'react'

const TestInfo = () => {
  return (
    <div className='w-full bg-white py-10 px-4 mt-10'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='drop-shadow-2xl w-[350px] mx-auto my-2' src="books.png" alt="/" />
            <div className='flex flex-col justify-center'>
                {/* <p>Data Analytics</p> */}
                <h1 className='text-red-900 md:text-4xl sm:text-3xl text-2xl font-bold py-4'>Our Tests</h1>
                <p className='text-lg'>Here at Mana Samskriti, we offer Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo tempore dolorem quo ab, expedita similique cumque culpa, debitis vero sit sunt nesciunt amet aut. Numquam ducimus quasi quidem impedit.</p>
                
                <div className='text-red-900 mt-3'>
                    <h1 className=' text-xl  py-2'>Sign in to register for a test!</h1>
                </div>
            </div>
            
        </div> 
        
    </div>
  )
}

export default TestInfo
