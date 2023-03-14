import React from 'react'
import DSC from '../assets/DSC.jpg'

const Analytics = () => {
  return (
    <div id='about' className='w-full bg-white py-8 px-4 ' >
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>

        <img className='w-[500px] mx-auto my-4'  src={DSC} alt="/" />

        <div className='flex flex-col justify-center'>

          <p className='text-[aqua] font-bold'> WHAT DO WE OFFER</p>
          <h1 className='md:text-4xl sm:text-2xl font-bold py-2'> Quality Sound Equipment , Quality Vibes , Quality Service  </h1>

          <p>For sound reinforcement systems and public address systems solutions , we got you covered.  For your DJ NEEDS we Got you covered. Our Equipment is ready, set , and roaring to light up your party / event.</p>
         

          <a href="#equipments" className='bg-[aqua] w-[200px] rounded-md font-medium my-4 mx-auto  py-6 text-black text-center '>
          <button > View More.</button>
          </a>

        </div>

       </div>
    </div>
  )
}

export default Analytics