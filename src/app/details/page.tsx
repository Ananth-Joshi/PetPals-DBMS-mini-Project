'use client'
import CenterTable from '@/components/Details/CenterTable'
import PetTable from '@/components/Details/PetTable'
import SelectTable from '@/components/Details/SelectTable'
import { connectDB } from '@/functions/functions'
import React, { useState } from 'react'

function page() {
  const [table,setTable]=useState('PET')
  console.log(table)
  return (
    <div>
      <SelectTable setTable={setTable}/>
        {(table==='PET')?(<PetTable/>):(<></>)}
        {(table==='CENTER')?(<CenterTable/>):(<></>)}
    </div>
   
  )
}

export default page