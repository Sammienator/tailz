import React from 'react'
import pic2 from '../assets/pic2.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-8 px-4 ' >
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4'  src={pic2} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[aqua] font-bold'> ANALYSE YOUR PERFOMANCE</p>
          <h1 className='md:text-4xl sm:text-2xl font-bold py-2'> Manage your Data Efficiently</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsam aperiam aliquam velit nam repellat dolor atque quas perspiciatis sapiente voluptatibus ex eum tempore maxime ducimus quos incidunt, sit ipsum.</p>

          <button className='bg-[aqua] w-[200px] rounded-md font-medium my-4 mx-auto  py-6 text-black'> Get Started</button>
        </div>

       </div>
    </div>
  )
}

export default Analytics