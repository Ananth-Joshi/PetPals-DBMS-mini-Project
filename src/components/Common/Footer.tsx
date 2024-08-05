import React from 'react'
import { FaPaw } from 'react-icons/fa'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";


function Footer() {
  return (
    <div className='flex bg-white justify-between items-center bg-opacity-25 w-full p-10 h-60'>
        <div>
            <FaPaw color='white' size={60}/>
            <div className='text-3xl font-bold text-white'>PetPals</div>
        </div>
        <div>
            <div className=' text-white'>
                <FaPhoneAlt className='inline'/> +91 738292720
            </div>
            <div className=' text-white'>
                <MdEmail className='inline'/> helpdesk@petpals.com
            </div>
        </div>
    </div>
  )
}

export default Footer