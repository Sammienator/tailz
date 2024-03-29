import React ,  {useState} from 'react'
import { AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'




const Navbar = () => {
    const [Nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!Nav)
    }


  return (
    <div className= 'flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white' >
        <h1 className='w-full text-5xl font-bold text-[#aqua] '>INLIGHT.  </h1>
      <ul className='hidden sm:flex hover:cursor-pointer text-2xl'>
        <li className='p-4'> <a href='#home'>Home </a> </li>
        <li className='p-4'> <a href="#about" > About</a>  </li>
        <li className='p-4'> <a href="#equipments"> Equipment</a> </li>
       
      </ul>

      <div onClick={handleNav} className='block sm:hidden' >

        {!Nav ? <AiOutlineClose size={40}/> : <AiOutlineMenu size={40} /> }
       </div>
      <div className={!Nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed hidden   left-[-100%]' }>
      <h1 className='w-full text-3xl font-bold text-[#aqua] m-4'>INLIGHT.  </h1>
        
        <ul className='pt-6 uppercase'>
        <li  className='p-4 border-b border-gray-600'> <a href="#home" > Home</a> </li>
        <li className='p-4 border-b border-gray-600'> <a href="#about">About</a> </li>
        <li className='p-4 border-b border-gray-600'> <a href="#equipments"> Equipment.</a> </li>
        

        </ul>
      </div>
      
    
    
    </div>
  )
}

export default Navbar