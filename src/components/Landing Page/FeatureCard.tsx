import Image from 'next/image'
import React from 'react'

function FeatureCard({imagePath,text,title}:{imagePath:string,text:string,title:string}) {
  return (
    <div className='flex text-white flex-col w-5/6 md:w-1/4 lg:w-1/4 items-center p-4 hover:bg-slate-500 rounded-xl'>
        <Image src={imagePath} alt='Image of dog' width={10} height={10} className='w-full h-80 rounded-xl' unoptimized/>
        <div className='text-xl font-bold'>{title}</div>
        <div>{text}</div>
    </div>
  )
}

export default FeatureCard