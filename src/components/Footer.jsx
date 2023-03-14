import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube,} from 'react-icons/fa';

const Footer = () => {
  return (
    <div id='footer' className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className='sm:flex flex-col text-center justify-between items-center'>
                <h1> Inlight</h1>
                <div className='flex justify-between w-full sm:max-w[280px] my-4 '>
                  <a href='https://www.facebook.com/'><FaFacebook className='icon hover:scale-150 transition duration-300 ease-in-out' /> </a>
                 <a href='https://www.twitter.com/'><FaTwitter className='icon hover:scale-150 transition duration-300 ease-in-out' /> </a> 
                 <a href='https://www.youtube.com/'> <FaYoutube className='icon hover:scale-150 transition duration-300 ease-in-out' /> </a> 
                 <a href='https://www.Instagram.com/'><FaInstagram className='icon hover:scale-150 transition duration-300 ease-in-out' /> </a> 
                  <a href='https://www.Pinterest.com/'><FaPinterest className='icon hover:scale-150 transition duration-300 ease-in-out' /> </a>
                </div>

            </div>
            <div className='flex justify-between'>
              <ul className='md:flex'>
                <a href=" #hero"><li >About</li>    </a>
                <li>Patnership</li>
                <a href=" #news"><li> NewsLetter</li>    </a>
                <li>Advertising</li>
              </ul>
              <ul className='text-right md:flex'>
              <a href=" #hero"><li >Home</li>    </a>
              <a href=" #equipments"><li> Equipments</li>    </a>
                <li>Travel</li>
                
              </ul>
            </div>

        </div>

    </div>
  )
}

export default Footer