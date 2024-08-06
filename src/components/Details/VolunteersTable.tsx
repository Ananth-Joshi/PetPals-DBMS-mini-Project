'use client'
import { userType } from '@/app/details/page';
import React, { FormEvent, SetStateAction, useEffect, useRef, useState } from 'react'

type Volunteer ={
    V_ID: number;           
    NAME: string;         
    AGE: number;               
    PHONE: string;              
    ADDRESS: string;            
    EXPERTISE: string;          
    EMPLOYMENT: string;         
    AVAILABLE_STATUS: string;   
    AVAILABLE_DATE: string;     
    AVAILABLE_TIME: string;     
    CID: number;               
}


function VolunteersTable({login}:{login:userType|false}) {

    const [data,setData]=useState<Array<Volunteer>>([])
    const volunteerRef=useRef<HTMLFormElement|null>(null)

    const fetchData=async()=>{
      const dat=await fetch('/details/api/VOLUNTEERS')
      const js=await dat.json()
      setData(js)
    }
    useEffect(()=>{
      fetchData()
    },[])

    const handleSubmitVolunteer = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (volunteerRef.current) {
            const formData = new FormData(volunteerRef.current);
            try {
                const response = await fetch('/details/api/VOLUNTEERS', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        V_ID: formData.get('V_ID'),
                        NAME: formData.get('NAME'),
                        AGE: formData.get('AGE'),
                        PHONE: formData.get('PHONE'),
                        ADDRESS: formData.get('ADDRESS'),
                        EXPERTISE: formData.get('EXPERTISE'),
                        EMPLOYMENT: formData.get('EMPLOYMENT'),
                        AVAILABLE_STATUS: formData.get('AVAILABLE_STATUS'),
                        AVAILABLE_DATE: formData.get('AVAILABLE_DATE'),
                        AVAILABLE_TIME: formData.get('AVAILABLE_TIME'),
                        CID: formData.get('CID'),
                    }),
                });
    
                if (!response.ok) {
                    throw new Error('Failed to add entry');
                }
    
                await fetchData(); // Refresh data after submission
            } catch (error) {
                console.error('Error adding volunteer:', error);
            }
        }
    };

  return (
    <div className='mx-4 my-4'>
        <table className='min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 text-center'>
            <thead className='bg-gray-900'>
                <tr>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">VOLUNTEER ID</th>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">NAME</th>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">AGE</th>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">PHONE</th>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">ADDRESS</th>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">EXPERTISE</th>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">EMPLOYMENT</th>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">AVAILABLE STATUS</th>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">AVAILABLE DATE</th>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">AVAILABLE TIME</th>
                    <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">CENTER ID</th>
                </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
                {
                    data.map((volunteer, index) => (
                        <tr key={index} className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{volunteer.V_ID}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{volunteer.NAME}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{volunteer.AGE}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{volunteer.PHONE}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{volunteer.ADDRESS}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{volunteer.EXPERTISE}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{volunteer.EMPLOYMENT}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{volunteer.AVAILABLE_STATUS}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{volunteer.AVAILABLE_DATE}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{volunteer.AVAILABLE_TIME}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{volunteer.CID}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

        {login&&<div className='text-white text-xl font-bold my-2'>ADD VOLUNTEER</div>}
        {login &&
            <form className="flex flex-wrap space-x-4 space-y-2 mb-4" ref={volunteerRef} onSubmit={handleSubmitVolunteer}>
                <input name='V_ID' type="number" placeholder="Volunteer ID" className="border rounded p-2 flex-1" required />
                <input name='NAME' type="text" placeholder="Name" className="border rounded p-2 flex-1" required />
                <input name='AGE' type="number" placeholder="Age" className="border rounded p-2 flex-1" required />
                <input name='PHONE' type="text" placeholder="Phone" className="border rounded p-2 flex-1" required />
                <input name='ADDRESS' type="text" placeholder="Address" className="border rounded p-2 flex-1" required />
                <input name='EXPERTISE' type="text" placeholder="Expertise" className="border rounded p-2 flex-1" required />
                <input name='EMPLOYMENT' type="text" placeholder="Employment" className="border rounded p-2 flex-1" required />
                <input name='AVAILABLE_STATUS' type="text" placeholder="Available Status" className="border rounded p-2 flex-1" required />
                <input name='AVAILABLE_DATE' type="date" placeholder="Available Date" className="border rounded p-2 flex-1" required />
                <input name='AVAILABLE_TIME' type="time" placeholder="Available Time" className="border rounded p-2 flex-1" required />
                <input value={login.CID} readOnly name='CID' type="number" placeholder="Center ID" className="border rounded p-2 flex-1" required />
                <button type="submit" className="bg-blue-500 text-white rounded p-2 flex-none">ADD VOLUNTEER</button>
            </form>
        }
    </div>
  )
}

export default VolunteersTable