import React, { useState } from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import breezySummer from "../assets/breezy-summer.jpeg";
import highCoziness from "../assets/high-cozinness.jpeg";
import Cards from '../components/Cards';
import ArrowLeft from "@mui/icons-material/ArrowBack";
import ArrowRight from "@mui/icons-material/ArrowForward";
import ArrowDownward from "@mui/icons-material/ArrowDownward"
import knittedJoggers from "../assets/knitted-joggers.jpeg";
import fullSleeves from "../assets/full-sleeve.jpeg";
import activeTShirt from "../assets/active-t-shirt.jpeg";
import urbanShirts from "../assets/urban-shirt.jpeg";
import { IconButton } from '@mui/material';
import hawaiianShirts from "../assets/hawaiian-shirt.jpeg";
import printedTShirt from "../assets/printed-t-shirt.jpeg";
import cargoJoggers from "../assets/cargo-joggers.jpeg";
import maleUrbanShirts from "../assets/male-urban-shirt.jpeg";
import overSizedTShirts from "../assets/oversized-t-shirt.jpeg";
import catShirts from "../assets/cat-shirts.jpeg";
import catPrintedTShirts from "../assets/cat-printed-t-shirt.jpeg";
import catPlainTshirt from "../assets/cat-plain-t-shirt.jpeg";
import catPoloTShirt from "../assets/cat-polo-t-shirt.jpeg";
import catJeans from "../assets/cat-jeans.jpeg";
import catHoodies from "../assets/cat-hoodies.jpeg";
import catBoxers from "../assets/cat-boxers.jpeg";
import catActiveWear from "../assets/cat-activewear.jpeg";
import femaleHoodies from "../assets/female-hoodies.png";
import femaleTees from "../assets/female-tees.jpeg";
import femaleCoats from "../assets/female-coats.png";
import femaleBoxers from "../assets/female-boxers.png";
import GenderCard from '../components/GenderCard';
import Brands from '../components/Brands';
import LimeLight from '../components/LimeLight';
import Feedback from '../components/Feedback';
import Footer from "../components/Footer";
import FashionContainer from '../components/FashionContainer';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate()
  const [cardData, setCardData] = useState([
    {
      img: knittedJoggers,
      text: "Knitted Joggers"
    },
    {
      img: fullSleeves,
      text: "Full Sleeve"
    },
    {
      img: activeTShirt,
      text: "Active T-Shirts"
    },
    {
      img: urbanShirts,
      text: "Urban Shirts"
    }
  ])
  const [menCategory, setWomenCategory] = useState([
    {
      name: "Shirts",
      source: catShirts
    },
    {
      name: "Printed T-Shirts",
      source: catPrintedTShirts
    },
    {
      name: "Plain T-Shirts",
      source: catPlainTshirt
    },
    {
      name: "Polo T-Shirts",
      source: catPoloTShirt
    },
    {
      name: "Hoodies & Sweatshirt",
      source: catHoodies
    },
    {
      name: "Jeans",
      source: catJeans
    },
    {
      name: "Activewear",
      source: catActiveWear
    },
    {
      name: "Boxers",
      source: catBoxers
    }
  ]);
  const [womenCategory, setMenCategory] = useState([
    {
      name: "Hoodies & Sweatshirt",
      source: femaleHoodies
    },
    {
      name: "Coats & Parkas",
      source: femaleCoats
    },
    {
      name: "Tees & T-Shirt",
      source: femaleTees
    },
    {
      name: "Boxers",
      source: femaleBoxers
    }
  ]);
  return (
    <>
    <Hero />
    <div className='mt-[22%] mb-10 flex flex-row justify-around items-center m-auto w-[90%]'>
        <div className='w-[520px] text-white rounded-lg h-[45vh] shadow-lg bg-[#ffbb46] overflow-hidden'>
                <img src={highCoziness} className='w-full rounded-[22px] ml-[25%] h-[210%] object-cover' alt="" />
                <h6 className='absolute text-[18px] font-[800] top-[135%] leading-[30.07px] left-[11%]'>Low Price</h6>
                <h2 className='absolute text-[34px] font-[100] top-[143%] leading-[45.1px] left-[11%]'>High Coziness</h2>
                <h3 className='absolute text-[16px] font-[100] top-[150%] leading-[30.2px] left-[11%]'>UPTO 50% OFF</h3>
                <h6 className='absolute underline text-[20px] font-[100] top-[160%] leading-[30.2px] left-[11%]'>Explore Items</h6>
        </div>
        <div className='w-[520px] text-white rounded-lg h-[45vh] shadow-lg bg-[#725188] overflow-hidden'>
                <img src={breezySummer} className='w-full rounded-[22px] ml-[25%] h-[150%] border-l-none scale-x-[-1] object-cover' alt="" />
                <h6 className='absolute text-[18px] font-[800] top-[135%] leading-[30.07px] left-[55%]'>Beyoung Presents</h6>
                <h2 className='absolute text-[34px] font-[100] top-[143%] leading-[45.1px] left-[55%]'>Breezy Summer <br />Style</h2>
                <h3 className='absolute text-[16px] font-[100] top-[157%] leading-[30.2px] left-[55%]'>UPTO 50% OFF</h3>
                <h6 className='absolute underline text-[20px] font-[100] top-[165%] leading-[30.2px] left-[55%]'>Explore Items</h6>
        </div>
    </div>
      <div className='mt-7 w-10/12 m-auto'>
          <div className='flex flex-row w-2/12 justify-between items-center font-[100] leading-[33.5px] text-[34px]'>
             <div className='rounded-[10px]  h-[30px] w-[6px] bg-[#8A33FD] '></div>
             <div className='letter-2 text-[#3C4242]'> New Arrival </div> 
          </div>
          <div className='w-full flex flex-row justify-between items-center mt-5 m-auto'>
            <div className='w-1/12'>
            <IconButton>
            <ArrowLeft fontSize='28px'/>
            </IconButton>
            </div>
              <div className='flex flex-row w-[96%] py-8 justify-between items-center'>
                {
                  cardData?.map((card, index) => (
                    <div key={index} className='w-[28%]'>
                        <img className='rounded-[10px] w-[15vw] h-[30vh]' src={card.img} alt={card.text}/>
                        <div className='text-[20px] text-[#3C4242] leading-[24.2px] font-[700] mt-5'>{card.text}</div>
                    </div>
                  ))
                }
              </div>
            <div className='w-1/12'>
            <IconButton>
            <ArrowRight fontSize='28px'/>
            </IconButton>
            </div>              
          </div>
      </div>
      <div className='mt-7 w-10/12 m-auto'>
          <div className='flex flex-row w-3/12 justify-between items-center font-[100] leading-[33.5px] text-[34px]'>
             <div className='rounded-[10px]  h-[30px] w-[6px] bg-[#8A33FD] '></div>
             <div className='letter-2 text-[#3C4242] w-11/12'> Big Saving Zone </div> 
          </div>
          <div className='w-full flex flex-wrap flex-row justify-between mb-10 items-center mt-10 m-auto'>
              <div className='w-[32%] h-[50vh] bg-orange-600 overflow-hidden rounded-lg'>
                <img src={hawaiianShirts} className='scale-x-[-1] object-fit rounded-lg w-full h-full' />
                  <div className='absolute top-[260vh] text-[28px] font-[100] text-white left-[10%]'>Hawaiian <br />Shirts</div>
                  <div className='absolute top-[273vh] text-[14px] font-[600] text-white left-[10%] leading-[16.94px]'>Dress up in summer vibe</div>
                  <div className='absolute top-[277vh] text-[18px] font-[700] text-white left-[10%] leading-[17.3px]'>UP TO 50% OFF</div>
                  <IconButton style={{position: "absolute", color:"white"}} className='left-[12%] top-[280vh]'>
                    <ArrowDownward fontSize='48px' />
                    </IconButton>
                  <button className='absolute top-[287vh] left-[10%] text-white border border-white px-2 py-1 rounded-[5px]'>
                    SHOP NOW
                  </button>
              </div>
              <div className='w-[32%] bg-pink-400 h-[50vh] overflow-hidden rounded-lg'>
                <img src={printedTShirt} className=' object-cover rounded-lg w-full h-full' />
                <div className='absolute top-[260vh] text-[28px] text-right font-[100] text-white left-[55.5%]'>Printed <br />T-Shirt</div>
                  <div className='absolute top-[273vh] text-[14px] font-[600] text-white left-[50%] leading-[16.94 px]'>New Designs every week</div>
                  <div className='absolute top-[277vh] text-[18px] text-right font-[700] text-white text-right left-[52.5%] leading-[17.3px]'>UP TO 40% OFF</div>
                  <IconButton style={{position: "absolute", color:"white"}} className='left-[56%] top-[282vh]'>
                    <ArrowDownward fontSize='48px' />
                    </IconButton>
                  <button className='absolute top-[290vh] left-[53.5%] text-white border border-white px-2 py-1 rounded-[5px]'>
                    SHOP NOW
                  </button>
              </div>
              <div className='w-[32%] h-[50vh] overflow-hidden rounded-lg'>
                <img src={cargoJoggers} className='-ml-[10%] object-cover rounded-lg w-full h-full' />
                <div className='absolute top-[260vh] text-[28px] text-[#3C4242] text-right font-[100] left-[80%]'>Cargo <br />Joggers</div>
                  <div className='absolute top-[273vh] text-[14px] text-[#3C4242] font-[600] left-[75%] leading-[16.94 px]'>Move with style and comfort</div>
                  <div className='absolute top-[277vh] text-[18px] text-right text-[#3C4242] font-[700] left-[77.5%] leading-[17.3px]'>UP TO 50% OFF</div>
                  <IconButton style={{position: "absolute", color:"#3C4242"}} className='text-[#3C4242] left-[81%] top-[282vh]'>
                    <ArrowDownward fontSize='48px' />
                    </IconButton>
                  <button className='absolute top-[290vh] left-[78.5%] text-[#3C4242] border border-[#3C4242] px-2 py-1 rounded-[5px]'>
                    SHOP NOW
                  </button>
              </div>
              <div className='w-[50%] mt-5 h-[50vh] overflow-hidden rounded-lg'>
                <img src={maleUrbanShirts} className='-ml-[10%] object-contain rounded-lg w-full' />
                <div className='absolute top-[310vh] text-[28px] text-[#3C4242] font-[100] left-[30%]'>Urban <br />Shirts</div>
                  <div className='absolute top-[325vh] text-[14px] text-[#3C4242] font-[600] left-[30%] leading-[16.94 px]'>Live In Confort</div>
                  <div className='absolute top-[330vh] text-[18px] text-right text-[#3C4242] font-[700] left-[30%] leading-[17.3px]'>FLAT TO 60% OFF</div>
                  <IconButton style={{position: "absolute", color:"#3C4242"}} className='text-[#3C4242] left-[34%] top-[335vh]'>
                    <ArrowDownward fontSize='48px' />
                    </IconButton>
                  <button className='absolute top-[342vh] left-[31.5%] text-[#3C4242] border border-[#3C4242] px-2 py-1 rounded-[5px]'>
                    SHOP NOW
                  </button>
              </div>
              <div className='w-[50%] mt-5 h-[50vh] overflow-hidden rounded-lg'>
                <img src={overSizedTShirts} className='-ml-[10%] object-cover rounded-lg w-full h-full' />
                <div className='absolute top-[310vh] text-[28px] text-[#3C4242] text-left font-[100] left-[73%]'>Oversized <br />T-Shirts</div>
                  <div className='absolute top-[325vh] text-[14px] text-[#3C4242] font-[600] left-[73%] leading-[16.94 px]'>Street Style Icon</div>
                  <div className='absolute top-[330vh] text-[18px] text-right text-[#3C4242] font-[700] left-[73%] leading-[17.3px]'>FLAT 60% OFF</div>
                  <IconButton style={{position: "absolute", color:"#3C4242"}} className='text-[#3C4242] left-[76%] top-[335vh]'>
                    <ArrowDownward fontSize='48px' />
                    </IconButton>
                  <button className='absolute top-[342vh] left-[73.5%] text-[#3C4242] border border-[#3C4242] px-2 py-1 rounded-[5px]'>
                    SHOP NOW
                  </button>
              </div>        
          </div>          
      </div>
      <FashionContainer />
      <div className='mt-[5%] w-10/12 m-auto'>
          <div className='flex flex-row w-4/12 justify-between items-center font-[100] leading-[33.5px] text-[34px] cursor-pointer hover:ml-[2%]' onClick={() => navigate("/category", {state: {type:"Categories for Men", data:[]}})}>
             <div className='rounded-[10px]  h-[30px] w-[6px] bg-[#8A33FD] '></div>
             <div className='letter-2 text-[#3C4242] w-11/12'> Categories For Men </div> 
          </div>
            <div className='flex flex-row w-[96%] py-8 justify-between items-center flex-wrap'>
                {
                  menCategory?.map((card, index) => (
                    <GenderCard onClick={() => navigate("/category-products", {state: card})} key={index} source={card.source} name={card.name} />
                  ))
                }
            </div>
      </div>
      <div className='mt-[5%] w-10/12 m-auto'>
          <div className='flex flex-row w-4/12 justify-between items-center font-[100] leading-[33.5px] text-[34px] cursor-pointer hover:ml-[2%]' onClick={() => navigate("/category", {state: {type:"Categories for Women", data:[]}})}>
             <div className='rounded-[10px]  h-[30px] w-[6px] bg-[#8A33FD] '></div>
             <div className='letter-2 text-[#3C4242] w-11/12'> Categories For Women </div> 
          </div>
            <div className='flex flex-row w-[96%] py-8 justify-between items-center flex-wrap'>
                {
                  womenCategory?.map((card, index) => (
                    <GenderCard onClick={() => navigate("/category-products", {state: card})} key={index} source={card.source} name={card.name} />
                  ))
                }
              </div>
      </div>
      <Brands />
      <LimeLight />
      <Feedback />
    </>
  )
}
