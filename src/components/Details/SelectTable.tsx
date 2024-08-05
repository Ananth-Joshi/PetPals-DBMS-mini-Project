import React from 'react'

function SelectTable({setTable}:{setTable:React.Dispatch<React.SetStateAction<string>>}) {
  return (
    <select className=' w-full max-w-xs mx-2 p-2 rounded' onChange={(e)=>{setTable(e.target.value)}}>
        <option value='PET'>PET</option>
        <option value='CENTER'>CENTER</option>
        <option value='ALLOCATION'>ALLOCATION</option>
        <option value='DONATION'>DONATION</option>
        <option value='VOLUNTEERS'>VOLUNTEERS</option>
    </select>
  )
}

export default SelectTable