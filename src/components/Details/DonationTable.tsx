'use client'
import { userType } from '@/app/details/page'
import React, {FormEvent, useEffect, useRef, useState } from 'react'

type DonationType={
    DONATION_ID:number,
    NAME:string,
    PH_NO:string,
    PAYMENT_INFO:string,
    AMOUNT:string,
    CID:number
}


function DonationTable({login}:{login:userType|false}) {
    const [data,setData]=useState<Array<DonationType>>([])
  const donationRef=useRef<HTMLFormElement|null>(null)

    const fetchData=async()=>{
      const dat=await fetch('/details/api/DONATION')
      const js=await dat.json()
      setData(js)
    }
    useEffect(()=>{
      fetchData()
    },[])

    const handleSubmitDonation = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (donationRef.current) {
          const formData = new FormData(donationRef.current);
          try {
              const response = await fetch('/details/api/DONATION', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      DONATION_ID: formData.get('DONATION_ID'),
                      NAME: formData.get('NAME'),
                      PH_NO: formData.get('PH_NO'),
                      PAYMENT_INFO: formData.get('PAYMENT_INFO'),
                      AMOUNT: formData.get('AMOUNT'),
                      CID: formData.get('CID'),
                  }),
              });
  
              if (!response.ok) {
                  throw new Error('Failed to add entry');
              }
  
              await fetchData(); // Refresh data after submission
          } catch (error) {
              console.error('Error adding donation:', error);
          }
      }
  };
    
  return (
    <div className='mx-4 my-4'>
        <table className='min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 text-center'>
          <thead className='bg-gray-900'>
            <tr>
                <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">DONATION ID</th>
                <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">NAME</th>
                <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">PH_NO</th>
                <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">PAYMENT_INFO</th>
                <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">AMOUNT</th>
                <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">CID</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
            {
              data.map((d,index)=>(
                <tr key={index} className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{d.DONATION_ID}</td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{d.NAME}</td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{d.PH_NO}</td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{d.PAYMENT_INFO}</td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{d.AMOUNT}</td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{d.CID}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

        {login&&<div className='text-white text-xl font-bold my-2'>ADD DONATION</div>}
        {login &&
          <form className="flex flex-wrap space-x-4 space-y-2 mb-4" ref={donationRef} onSubmit={handleSubmitDonation}>
            <input name='DONATION_ID' type="number" placeholder="Donation ID" className="border rounded p-2 flex-1" required />
            <input name='NAME' type="text" placeholder="Name" className="border rounded p-2 flex-1" required />
            <input name='PH_NO' type="text" placeholder="Phone Number" className="border rounded p-2 flex-1" required />
            <input name='PAYMENT_INFO' type="text" placeholder="Payment Info" className="border rounded p-2 flex-1" required />
            <input name='AMOUNT' type="number" placeholder="Amount" className="border rounded p-2 flex-1" required />
            <input name='CID' value={login.CID} readOnly type="number" placeholder="Center ID" className="border rounded p-2 flex-1" required />{/* Center ID fixed to logged in users center */}
            <button type="submit" className="bg-blue-500 text-white rounded p-2 flex-none">ADD DONATION</button>
        </form>
}
      
    </div>
  )
}

export default DonationTable