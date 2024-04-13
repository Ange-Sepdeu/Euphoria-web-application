import React from 'react';
import nikeLogo from "../assets/nike-logo.png";
import hmLogo from "../assets/hm-logo.png";
import pumaLogo from "../assets/puma-logo.png";
import levisLogo from "../assets/levi-logo.png";
import poloLogo from "../assets/polo-logo.png";

export default function Brands() {
  const images = [
    nikeLogo, hmLogo,levisLogo, poloLogo, pumaLogo
  ]
  return (
    <>
      <div className='mt-[5%] text-center w-10/12 m-auto bg-[#3C4242] p-8 rounded-[12px]'>
            <div className='text-[50px] text-white font-[100] leading-[60.51px]'>Top Brands Deal</div>
            <div className='font-[100] mt-5 text-[22px] text-white leading-[26.63px]'>Up To <span className='text-[#FBD103] font-[400]'> 60% </span>  off on brands</div>
            <div className='mt-7 flex flex-row justify-between items-center m-auto w-8/12'>
                  {
                    images.map((source, index) => (
                      <img key={index} src={source} alt={source} className='bg-white p-4 rounded-md w-[18%] h-[10vh]' />
                    ))
                  }
            </div>
      </div>
    </>
  )
}
