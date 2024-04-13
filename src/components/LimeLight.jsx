import React, { useState } from 'react'
import blackShorts from "../assets/black-shorts.jpeg";
import blackSweatShirt from "../assets/black-sweatshirt.jpeg";
import linePatternWoodies from "../assets/line-pattern-black-woodies.jpeg";
import levenderHoodie from "../assets/levender-hoodie.jpeg";
import FavoriteBorderTwoTone from '@mui/icons-material/FavoriteBorderTwoTone';
import { IconButton } from '@mui/material';

export default function LimeLight() {
  const [limeLightCards, setLimeLightCards] = useState([
    {
      source: blackSweatShirt,
      main: "Black sweatshirt with ...",
      sub: "Jhanvi’s  Brand",
      price: "$123.00"
    },
    {
      source: linePatternWoodies,
      main: "line Pattern Black H...",
      sub: "AS’s  Brand",
      price: "$37.00"
    },
    {
      source: blackShorts,
      main: "Black Shorts",
      sub: "MM’s  Brand",
      price: "$37.00"
    },
    {
      source: levenderHoodie,
      main: "Levender Hoodie with ...",
      sub: "Nike’s  Brand",
      price: "$119.00"
    }
  ])
  return (
    <>
      <div className='mt-[6%] w-10/12 m-auto'>
          <div className='flex flex-row w-3/12 justify-between items-center font-[100] leading-[33.5px] text-[34px]'>
             <div className='rounded-[10px]  h-[30px] w-[6px] bg-[#8A33FD] '></div>
             <div className='letter-2 text-[#3C4242] w-11/12'> In The LimeLight </div> 
          </div>
          <div className='mt-[3%] flex flex-row justify-between items-center'>
            {
              limeLightCards.map((card, index) => (
                <div key={index} className='w-[22%]'>
                    <div className='w-full h-[30vh] overflow-hidden'>
                       <img src={card.source} alt="Alt" className='h-[100%] object-cover rounded-[10px]' />
                       <IconButton sx={{ fontSize:"32px" , color:"black", position: "absolute", top: "750%", marginLeft:"15%"}}>
                          <FavoriteBorderTwoTone className='p-2 bg-white rounded-full text-[#3C4242]' fontSize='48px' />
                       </IconButton>
                    </div>
                    <div className="flex flex-row mt-[5%] justify-between items-center">
                      <div>
                        <div className='text-[#3C4242] font-[600] leading-[16.63px] text-[16px]'>{card.main}</div>
                        <div className='text-[13px] font-[500] leading-[16.63px] text-[#807D7E]'>{card.sub}</div>
                      </div>
                      <div className='text-[#3C4242] text-[13px] leading-[14.63px]'>{card.price}</div>
                    </div>
                </div>
              ))
            }
          </div>
      </div>
    </>
  )
}
