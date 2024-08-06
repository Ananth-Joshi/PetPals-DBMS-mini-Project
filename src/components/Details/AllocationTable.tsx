'use client'

import { userType } from '@/app/details/page'
import React, {FormEvent, useEffect, useRef, useState } from 'react'


type AllocationType={
    CID:number,
    A_NAME:string,
    A_AMOUNT:number
}

function AllocationTable({login}:{login:userType|false}) {
    const [data,setData]=useState<Array<AllocationType>>([])
    const AllocationRef = useRef<HTMLFormElement | null>(null);
    const fetchData=async()=>{
      const dat=await fetch('/details/api/ALLOCATION')
      const js=await dat.json()
      setData(js)
    }
    useEffect(()=>{
      fetchData()
    },[])


    const handleSubmitAllocation=async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(AllocationRef.current){
            const formData=new FormData(AllocationRef.current)
            try{
                const response=await fetch('/details/api/ALLOCATION',{
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify({
                        A_NAME:formData.get('A_NAME'),
                        A_AMOUNT:formData.get('A_AMOUNT'),
                        CID:formData.get('CID')
                    })
                })
                await fetchData()
            }catch(e){
                console.error('Error adding allocation'+e)
            }
        }
    }
    
  return (
    <div className='mx-4 my-4'>
        <table className='min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 text-center'>
            <thead className='bg-gray-900'>
                <tr>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">ALLOCATION NAME</th>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">AMOUNT</th>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">CID</th>
                </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
                {
                    data.map((a,index)=>(
                        <tr key={index} className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{a.A_AMOUNT}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{a.A_NAME}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{a.CID}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        {login&&<div className='text-white text-xl font-bold my-2'>ADD ALLOCATION</div>}
        {login && 
        <form className="flex flex-wrap space-x-4 space-y-2 mb-4" ref={AllocationRef} onSubmit={handleSubmitAllocation}>
            <input name='A_NAME' type="text" placeholder="Allocation Name" className="border rounded p-2 flex-1" required />
            <input name='A_AMOUNT' type="number" placeholder="Amount" className="border rounded p-2 flex-1" required />
            <input name='CID' value={login.CID} readOnly type="number" placeholder="Center ID" className="border rounded p-2 flex-1" required />
            <button type="submit" className="bg-blue-500 text-white rounded p-2 flex-none">ADD ALLOCATION</button>
        </form>}
    </div>
  )
}

export default AllocationTable