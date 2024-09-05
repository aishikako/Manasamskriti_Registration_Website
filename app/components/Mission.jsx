import React from 'react'

const Mission = () => {
  return (
    <div className='w-full bg-white py-10 px-4 mt-10'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='drop-shadow-2xl w-[350px] mx-auto my-2' src="logo.png" alt="/" />
            <div className='flex flex-col justify-center'>
                {/* <p>Data Analytics</p> */}
                <h1 className='text-red-900 md:text-4xl sm:text-3xl text-2xl font-bold py-4'>Who Are We?</h1>
                <p className='text-lg'>Here at Mana Samskriti, our collective vision is to 
                    serve the community by imparting the language and 
                    cultural aspects of India so as to imbibe the richness
                     and diversity of that tradition and spark the innate,
                      creative intent inside everyone.
                </p>
            </div>
        </div> 
    </div>
  )
}

export default Mission
