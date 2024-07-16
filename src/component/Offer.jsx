import React from 'react'
import { BsArrowRight } from "react-icons/bs";

const Offer = () => {
  return (
    <div>
      <div className='w-full h-[130px] p-10 bg-[#ede734] mt-[90px] mb-5 flex items-center text-center justify-center gap-8 '>
        <h1 className='text-[30px] font-adihapro font-[1000] tracking-[1.5px] text-center m-0' >JOIN SHOE4U AND GET 15% OFF</h1>

        <button className='w-[220px] h-[50px] bg-zinc-900 px-[15px] text-white flex items-center text-center justify-center gap-3'>
          <span className='text-[14px] font-adiha font-semibold tracking-[1.5px]  text-center '>SIGN UP FOR FREE</span>
          <BsArrowRight className='text-[25px] ' />
        </button>
      </div>
    </div>
  )
}

export default Offer