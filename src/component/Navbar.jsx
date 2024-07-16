import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import logo from './public/image/logo.png'; // Adjust the path to logo image

function Navbar() {
  return (
    <section>
      <div className="w-full h-16 bg-white flex justify-between items-center px-10 mt-[4px] gap-5">
        <div className="flex justify-center items-center">
          <div className='bg-[url("./public/image/logo.png")'></div>
          <img src="./logo.png" width="59px" height="59px" alt="Logo" />
        </div>
        <div className="flex justify-center items-center flex-1">
          <ul className="flex justify-center items-center gap-7 pl-64">
            <li>
              <a href="#" className="font-bold tracking-[2px] uppercase text-[17px]">Man</a>
            </li>
            <li>
              <a href="#" className="font-bold tracking-[2px] uppercase text-[17px]">Women</a>
            </li>
            <li>
              <a href="#" className="font-bold tracking-[2px] uppercase text-[17px]">Kids</a>
            </li>
            <li>
              <a href="#" className="tracking-[2px] uppercase text-[17px]">Sports</a>
            </li>
            <li>
              <a href="#" className="tracking-[2px] uppercase text-[17px]">Sale</a>
            </li>
            <li>
              <a href="#" className="tracking-[2px] uppercase text-[17px]">Outlet</a>
            </li>
          </ul>
        </div>


        <div className="nav_option flex justify-center items-center">

          <div className='search leading-0 '>
            <div className="search-product relative flex items-center">
              <input type="text" placeholder="Search" className="border-none bg-gray-200 text-black outline-none text-[13px] leading-[1.5] px-[16px] py-[6px] rounded-[5px]" />
              <i className="fa-solid fa-magnifying-glass absolute right-[11px] text-black"></i>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <i className="fa-regular fa-user w-11 h-12 flex justify-center items-center text-lg font-semibold"></i>
            <i className="fa-regular fa-heart w-11 h-12 flex justify-center items-center text-lg font-semibold"></i>
            <i className="fa-regular fa-bag-shopping w-11 h-12 flex justify-center items-center text-lg font-semibold"></i>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Navbar
