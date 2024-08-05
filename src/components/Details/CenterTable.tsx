'use client'
import React, {useEffect, useState } from 'react'

type centerType={
  CID:number,
  LOCATION:string,
  CONTACT_INFO:string
}
function CenterTable() { 
  const [data,setData]=useState<Array<centerType>>([])
  const fetchData=async()=>{
    const dat=await fetch('/details/api/CENTER')
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
                <th>CENTER ID</th>
                <th>LOCATION</th>
                <th>CONTACT INFO</th>
            </tr>
          </thead>
            {
              data.map((c)=>(
                <tr>
                  <td>{c.CID}</td>
                  <td>{c.LOCATION}</td>
                  <td>{c.CONTACT_INFO}</td>
                </tr>
              ))
            }
        </table>
    </div>
  )
}

export default CenterTable