'use client'
import React, { SetStateAction, useEffect, useState } from 'react'

type petType={
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
  P_CARE:string,
  V_ID:number
}
function PetTable() { 
  const [data,setData]=useState<Array<petType>>([])
  const fetchData=async()=>{
    const dat=await fetch('/details/api/PET')
    const js=await dat.json()
    setData(js)
  }
  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <div>
        <table className='min-w-full divide-y text-center divide-gray-200 dark:divide-neutral-700'>
          <thead>
            <tr>
              <th>PET ID</th>
              <th>NAME</th>
              <th>TYPE</th>
              <th>AGE</th>
              <th>VACCINATION</th>
              <th>GENDER</th>
              <th>LOCATION</th>
              <th>SEVERITY</th>
              <th>DESCRIPTION</th>
              <th>CID</th>
              <th>PCARE</th>
              <th>VOL. ID</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((p,index)=>(
                <tr key={index}>
                  <td>{p.PET_ID}</td>
                  <td>{p.NAME}</td>
                  <td>{p.TYPE}</td>
                  <td>{p.AGE}</td>
                  <td>{p.VACCINATION}</td>
                  <td>{p.GENDER}</td>
                  <td>{p.LOCATION}</td>
                  <td>{p.SEVERITY}</td>
                  <td>{p.DESCRIPTION}</td>
                  <td>{p.CID}</td>
                  <td>{p.P_CARE}</td>
                  <td>{p.V_ID}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      
    </div>
  )
}

export default PetTable