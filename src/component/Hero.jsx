import React from 'react'
import vdo from '../assets/originals_ss24_duo_global_launch_hp_masthead_d_207a98312e.mp4'

const Hero = () => {
  return (
    <section className="hero ">

      <div className="hero_main relative w-full h-[619px] overflow-hidden">

        <div className="responsive-video object-cover w-full ">
          <video src={vdo} autoPlay loop muted />
        </div>
        
        <div className="overlay absolute top-[60%] left-[24%] text-black transform -translate-x-1/2 -translate-y-1/2 ">
          <h2 className="text-[2.5em] font-bold mb-[5px]">YEEZY</h2>
          <p className="paragraph mb-[15px] tracking-[0.7px] text-[18px] leading-[20px] ">Keep checking back to see if the one you`ve been waiting <br /> for is coming to your country.Availability varies by region.</p>
          <button className="mt-[10px] px-[20px] py-[9px] text-[1.2rem] border-none text-white cursor-pointer bg-black bg-opacity-90 ">SHOP NOW</button>
        </div>

      </div>

    </section>
  )
}

export default Hero