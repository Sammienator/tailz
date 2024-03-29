import React from 'react'

const Newsletter = () => {
  return (
    <div id='news' className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px]  mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '> Want tips and help with your operations?</h1>
                <p> Sign up to our newsletter and stay up to date</p>
            </div>
            <div className='my-4 flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                <button className='bg-[aqua] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'> Notify Me</button>

             

            </div>
            <p className='md:flex-col'> We care about the protection of your Data. Read our <span  className='text-[aqua]' ><a href='https://www.privacypolicies.com/'> Privacy Policy. </a>  </span> </p>
            

        </div>
        

    </div>
  )
}

export default Newsletter