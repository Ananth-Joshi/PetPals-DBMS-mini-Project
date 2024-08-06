'use client'
import { userType } from '@/app/details/page'
import { useRouter } from 'next/navigation'
import React, { FormEvent, SetStateAction, useEffect, useRef, useState } from 'react'

type PetType={
  PET_ID:number,
  NAME:string,
  TYPE:string,
  AGE:number,
  VACCINATION:string,
  GENDER:string,
  LOCATION:string,
  SEVERITY:string,
  DESCRIPTION:string,
  CID:number,
  PCARE:string,
  V_ID:number
}
function PetTable({login}:{login:userType|false}) { 
  const [data,setData]=useState<Array<PetType>>([])
  const petRef=useRef<HTMLFormElement|null>(null)

  const fetchData=async()=>{
    const dat=await fetch('/details/api/PET')
    const js=await dat.json()
    setData(js)
  }
  useEffect(()=>{
    fetchData()
  },[])

  const handleSubmitPet = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (petRef.current) {
        const formData = new FormData(petRef.current);
        try {
            const response = await fetch('/details/api/PET', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    PET_ID: formData.get('PET_ID'),
                    NAME: formData.get('NAME'),
                    TYPE: formData.get('TYPE'),
                    AGE: formData.get('AGE'),
                    VACCINATION: formData.get('VACCINATION'),
                    GENDER: formData.get('GENDER'),
                    LOCATION: formData.get('LOCATION'),
                    SEVERITY: formData.get('SEVERITY'),
                    DESCRIPTION: formData.get('DESCRIPTION'),
                    CID: formData.get('CID'),
                    PCARE: formData.get('PCARE'),
                    V_ID: formData.get('V_ID'),
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to add entry');
            }

            await fetchData(); // Refresh data after submission
        } catch (error) {
            console.error('Error adding pet:', error);
        }
    }
  };

  const deletePet=async(value:number)=>{
    try{
      await fetch('/details/api/PET',{
        method:'DELETE',
        body:JSON.stringify({
          id:'PET_ID',
          value:value
        })
      });
      fetchData();
    }catch(e){
      console.error('Error deleting Pet:'+e)
    }
  }
  
  return (
    <div className='mx-4 my-4'>
        <table className='min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 text-center'>
          <thead className='bg-gray-900'>
            <tr>
              <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">PET ID</th>
              <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">NAME</th>
              <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">TYPE</th>
              <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">AGE</th>
              <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">VACCINATION</th>
              <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">GENDER</th>
              <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">LOCATION</th>
              <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">SEVERITY</th>
              <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">DESCRIPTION</th>
              <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">CID</th>
              <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">PCARE</th>
              <th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">VOL. ID</th>
              {login&&<th className="py-3 px-6 text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-400">DELETE</th>}{/* Delete feature only for logged in center admins */}
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
            {
              data.map((p,index)=>(
                <tr key={index} className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{p.PET_ID}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{p.NAME}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{p.TYPE}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{p.AGE}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{p.VACCINATION}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{p.GENDER}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{p.LOCATION}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{p.SEVERITY}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{p.DESCRIPTION}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{p.CID}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{p.PCARE}</td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{p.V_ID}</td>
                  {login &&
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <button className="bg-red-500 text-white rounded p-2 flex-none disabled:bg-red-300" onDoubleClick={async()=>{await deletePet(p.PET_ID)}} disabled={login.CID!==p.CID}>DELETE</button> {/*DELETE ONLY IF PET belongs to logged in users center*/}
                    </td>
                  }
                </tr>
              ))
            }
          </tbody>
        </table>

        {login&&<div className='text-white text-xl font-bold my-2'>ADD PET</div>}
        {login &&
          <form className="flex flex-wrap space-x-4 space-y-2 mb-4" ref={petRef} onSubmit={handleSubmitPet}>
            <input name='PET_ID' type="number" placeholder="Pet ID" className="border rounded p-2 flex-1" required />
            <input name='NAME' type="text" placeholder="Name" className="border rounded p-2 flex-1" required />
            <input name='TYPE' type="text" placeholder="Type" className="border rounded p-2 flex-1" required />
            <input name='AGE' type="number" placeholder="Age" className="border rounded p-2 flex-1" required />
            <input name='VACCINATION' type="text" placeholder="Vaccination" className="border rounded p-2 flex-1" required />
            <input name='GENDER' type="text" placeholder="Gender" className="border rounded p-2 flex-1" required />
            <input name='LOCATION' type="text" placeholder="Location" className="border rounded p-2 flex-1" required />
            <input name='SEVERITY' type="text" placeholder="Severity" className="border rounded p-2 flex-1" required />
            <input name='DESCRIPTION' type="text" placeholder="Description" className="border rounded p-2 flex-1" required />
            <input value={login.CID} readOnly name='CID' type="number" placeholder="Center ID" className="border rounded p-2 flex-1" required />{/* Center ID fixed to logged in users center */}
            <input name='PCARE' type="text" placeholder="PCARE" className="border rounded p-2 flex-1" required />
            <input name='V_ID' type="number" placeholder="Volunteer ID" className="border rounded p-2 flex-1" />
            <button type="submit" className="bg-blue-500 text-white rounded p-2 flex-none">ADD PET</button>
        </form>
}
    </div>
  )
}

export default PetTable