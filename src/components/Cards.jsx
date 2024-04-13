import React from 'react'
import highCoziness from "../assets/high-cozinness.jpeg";

export default function Cards() {
  return (
    <>
        <div className='w-[500px] text-white rounded-lg h-[45vh] shadow-lg bg-orange-300 overflow-hidden'>
                <img src={highCoziness} className='w-full rounded-[22px] ml-[25%] h-[210%] object-cover' alt="" srcset="" />
                <h6 className='absolute text-[18px] font-[800] top-[135%] leading-[30.07px] left-[34%]'>Low Price</h6>
                <h2 className='absolute text-[34px] font-[100] top-[143%] leading-[45.1px] left-[34%]'>High Coziness</h2>
                <h3 className='absolute text-[16px] font-[100] top-[150%] leading-[30.2px] left-[34%]'>UPTO 50% OFF</h3>
                <h6 className='absolute underline text-[20px] font-[100] top-[160%] leading-[30.2px] left-[34%]'>Explore Items</h6>
        </div>
    </>
  )
}
