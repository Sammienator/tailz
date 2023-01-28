import React from 'react'

const Hero = () => {
  return (
    <div id='hero' className='text-white'>
        <div className='max-v-[100px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[aqua] font-bold p-2'> GROW WITH INLIGHT</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> Grow with Us</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text=5xl sm:text-4xl text-xl font-bold py-4'> Fast, Reliable and Affordable Entertainment Solutions With Inlight Entertainment.</p>
            </div>

            <p className='md:text-5xl sm:text-4xl text-xl font-bold pt-2 text-gray-500'>   We offer professional Sound & DJ services for your events and functions. </p>

            <button className='bg-[aqua] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'> Reach Out To Us.  </button>

        </div>
    </div>
  )
}

export default Hero 