import React from 'react'
import { RiArrowDownSLine } from "react-icons/ri";


const TopBanner = () => {
  return (
    <div className='w-full h-[40px] bg-zinc-900 flex items-center  justify-center   gap-[10px]'>
        <h3 className='text-white text-[11px] font-bold tracking-[1px]  '>FREE DELIVERY, RETURN & EXCHANGE</h3>
        <RiArrowDownSLine className='text-white text-[18px]' />
    </div>
  )
}

export default TopBanner