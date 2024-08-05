'use client'
import React from 'react'
import { FaPaw } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavBar() {
  const path=usePathname()
  return (
   <div className='flex p-8 justify-between'>
    <Link href="/" className='flex items-center gap-2 text-center text-white'>
        <FaPaw size={35}/>
        <div className='text-2xl'>
            PetPals
        </div>
    </Link>
    <div className='flex gap-4 text-xl text-white'>
        <Link href="/" className={`hover:bg-white p-2 hover:text-blue-900 ${(path==='/')?'bg-white text-blue-900':''} rounded-md hover:cursor-pointer`}>
            Home
        </Link>
        <Link href={"/about"} className={`hover:bg-white p-2 hover:text-blue-900 ${(path==='/about')?'bg-white text-blue-900':''} rounded-md hover:cursor-pointer`}>
            About Us
        </Link>
        <Link href="/login" className='flex items-center gap-1 hover:bg-white p-2 hover:text-blue-900 rounded-md hover:cursor-pointer '>
           <MdLogin/>
            Login
        </Link>    
    </div>
   </div>
  )
}

export default NavBar