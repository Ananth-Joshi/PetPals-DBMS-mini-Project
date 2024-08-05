'use client'
import AllocationTable from '@/components/Details/AllocationTable'
import CenterTable from '@/components/Details/CenterTable'
import DonationTable from '@/components/Details/DonationTable'
import PetTable from '@/components/Details/PetTable'
import SelectTable from '@/components/Details/SelectTable'
import VolunteersTable from '@/components/Details/VolunteersTable'
import React, { useState } from 'react'

function page() {
  const [table,setTable]=useState('PET')
  console.log(table)
  return (
    <div>
      <SelectTable setTable={setTable}/>
        {(table==='PET')?(<PetTable/>):(<></>)}
        {(table==='CENTER')?(<CenterTable/>):(<></>)}
        {(table==='ALLOCATION')?(<AllocationTable/>):(<></>)}
        {(table==='DONATION')?(<DonationTable/>):(<></>)}
        {(table==='VOLUNTEERS')?(<VolunteersTable/>):(<></>)}


    </div>
   
  )
}

export default page