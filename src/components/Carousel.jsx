import React from 'react'
import ChevronLeft from "@mui/icons-material/ChevronLeftRounded";
import ChevronRight from "@mui/icons-material/ChevronRightRounded";
import heroImage from "../assets/super-hero-1-product-slide-1.jpeg";
import { IconButton } from '@mui/material';

export default function Carousel() {

  return (
    <>
        <div className='w-full h-[100vh]'>
            <img src={heroImage} alt="Hero Image Slide 1" className='w-full h-full bg-blue-400 object-cover' />
            <IconButton sx={{position: "absolute", color: "white", fontSize:"48px"}} className='top-1/2 left-5'>
            <ChevronLeft fontSize='48px'/>
            </IconButton>
            <div className='font-narrow absolute top-[30%] leading-[37.7px] left-[10%] text-[32px] font-[100] text-white'>T-shirt / Tops</div>
            <div className='w-2/6 text-white absolute top-[40%] left-[10%] leading-[92.3px] font-[100] text-[78px]'>Summer Value Pack</div>
            <div className='text-[32px] absolute top-[73%] font-[100] text-white font-narrow left-[10%] leading-[42.7px] '>cool / colorful / comfy</div>
            <button type="button" className='bg-white absolute w-[200px] left-[10%] top-[85%] text-center rounded-[8px] px-4 py-2 text-[#3C4242] font-bold'>Shop Now</button>
            <IconButton sx={{position: "absolute", color: "white", fontSize:"48px"}} className='top-1/2 right-5'>
            <ChevronRight fontSize='48px'/>
            </IconButton>
            <div className='flex flex-row justify-between items-center absolute bottom-0 left-[45%] w-[130px]'>
                <div className='border-4 border-white h-2 w-[62px] rounded-l-2xl'></div>
                <div className='border-4 border-gray-100 opacity-40 h-2 w-[62px] rounded-r-2xl'></div>
            </div>
        </div>
    </>
  )
}
