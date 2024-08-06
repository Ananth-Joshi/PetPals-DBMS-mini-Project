'use client'
import AllocationTable from '@/components/Details/AllocationTable'
import CenterTable from '@/components/Details/CenterTable'
import DonationTable from '@/components/Details/DonationTable'
import PetTable from '@/components/Details/PetTable'
import SelectTable from '@/components/Details/SelectTable'
import VolunteersTable from '@/components/Details/VolunteersTable'
import React, { useEffect, useState } from 'react'

export type userType={
  email:string,
  CID:number
}
function page() {
  const [table,setTable]=useState('PET')
  const [status,setStatus]=useState<false|userType>(false)
  const isLoggedIn=async()=>{
    const res=await fetch('/api/authverify')
    const js=await res.json()
    if(js.loggedIn)
      setStatus({email:js.user.email,CID:js.user.CID})
    else
      setStatus(false)
  }
  useEffect(()=>{
    isLoggedIn()
  },[])
  console.log(table)
  return (
    <div>
      <SelectTable setTable={setTable}/>
        {(table==='PET')?(<PetTable login={status}/>):(<></>)}
        {(table==='CENTER')?(<CenterTable login={status}/>):(<></>)}
        {(table==='ALLOCATION')?(<AllocationTable login={status}/>):(<></>)}
        {(table==='DONATION')?(<DonationTable login={status}/>):(<></>)}
        {(table==='VOLUNTEERS')?(<VolunteersTable login={status}/>):(<></>)}
    </div>
   
  )
}

export default page