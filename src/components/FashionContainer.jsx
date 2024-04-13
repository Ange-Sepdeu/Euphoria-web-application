import React from 'react'
import leftFashionImage from "../assets/fashion-bg.jpeg";
import youthsImage from "../assets/portrait-young-people.jpeg"

export default function FashionContainer() {
  return (
    <>
        <div className='w-10/12 mt-[10%] mb-[5%] h-[80vh]  m-auto flex flex-row justify-between items-center'>
                <div className='w-6/12 h-full overflow-hidden'>
                    <img src={leftFashionImage} alt="" className='rounded-l-[15px] w-full h-[100%] object-cover bg-opacity-20' />
                    <div className='w-5/12 h-[80vh] bg-opacity-60 top-[376.5%] rounded-l-[10px] bg-black absolute'></div>
                    <div className='text-[34px] font-[100] leading-[50px] absolute top-[400%] left-[15%] text-white'>
                     WE MADE YOUR EVERYDAY <br />FASHION BETTER!
                     <div className='text-[20px] font-[300] leading-[24.2px] w-5/12 mt-2'>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</div>
                      <button className='px-8 mt-7 text-center text-[16px] font-[600] text-[#3C4242] bg-white rounded-[10px]'>Shop Now</button>
                    </div>
                </div>
                <div className='w-6/12 h-full overflow-hidden rounded-r-[15px]'>
                    <img src={youthsImage} className='w-full object-contain rounded-r-[15px]' alt="" />
                </div>
        </div>
    </>
  )
}
