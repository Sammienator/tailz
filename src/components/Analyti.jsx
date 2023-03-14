import React from 'react'
import pic8 from '../assets/pic8.jpg'

const Analyti = () => {
  return (
    <div className='w-full bg-white py-8 px-4 ' >

       <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>





       <div className='flex flex-col justify-center'>

          <p className='text-[aqua] font-bold'> WHAT DO WE OFFER</p>
          <h1 className='md:text-4xl sm:text-2xl font-bold py-2'> Creating happy memories for your events and function</h1>
          <p>We offer professional Sound & DJ services for your events and functions.We are up to task and also offer quality sound for any live band performances as well. For Sound and DJ services , talk to us! </p>

          <a href="#footer" className='bg-[aqua] w-[200px] rounded-md font-medium my-4 mx-auto  py-6 text-black text-center '>
         <a href="#footer"> <button > Contact Us.</button>  </a> 
          </a>

        </div>

        <img className='w-[500px] mx-auto my-4 h-[300px]'  src={pic8} alt="/" />
       

       </div>
    </div>
  )
}

export default Analyti