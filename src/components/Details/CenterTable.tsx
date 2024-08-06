'use client'
import { userType } from '@/app/details/page'
import React, {FormEvent, useEffect, useRef, useState } from 'react'

type CenterType={
  CID:number,
  LOCATION:string,
  CONTACT_INFO:string
}
function CenterTable({login}:{login:userType|false}) { 
  const [data,setData]=useState<Array<CenterType>>([])
  const centerRef=useRef<HTMLFormElement|null>(null)
  const fetchData=async()=>{
    const dat=await fetch('/details/api/CENTER')
    const js=await dat.json()
    setData(js)
  }
  useEffect(()=>{
    fetchData()
  },[])

  const handleSubmitCenter = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (centerRef.current) {
        const formData = new FormData(centerRef.current);
        try {
            const response = await fetch('/details/api/CENTER', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    CID: formData.get('CID'),
                    LOCATION: formData.get('LOCATION'),
                    CONTACT_INFO: formData.get('CONTACT_INFO'),
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to add entry');
            }

            await fetchData(); // Refresh data after submission
        } catch (error) {
            console.error('Error adding center:', error);
        }
    }
};
  
  return (
    <div className='mx-4 my-4'>
        <table className='min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 text-center'>
          <thead className='bg-gray-900'>
            <tr>
                <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">CENTER ID</th>
                <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">LOCATION</th>
                <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">CONTACT INFO</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
            {
              data.map((c,index)=>(
                <tr key={index} className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{c.CID}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{c.LOCATION}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{c.CONTACT_INFO}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

       {login&&<div className='text-white text-xl font-bold my-2'>ADD CENTER</div>}
       {login && 
        <form className="flex flex-wrap space-x-4 space-y-2 mb-4" ref={centerRef} onSubmit={handleSubmitCenter}>
            <input name="CID" type="number" placeholder="Center ID" className="border rounded p-2 flex-1" required />
            <input name="LOCATION" type="text" placeholder="Location" className="border rounded p-2 flex-1" required />
            <input name="CONTACT_INFO" type="text" placeholder="Contact Info" className="border rounded p-2 flex-1" required />
            <button type="submit" className="bg-blue-500 text-white rounded p-2 flex-none">ADD CENTER</button>
        </form>
        }
        

    </div>
  )
}

export default CenterTable