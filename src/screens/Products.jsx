import React, {useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
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
import ProductCard from '../components/ProductCard';

export default function Products() {
  const location  = useLocation();
  const navigate = useNavigate();
  const card = location.state;
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
    <div className='w-10/12 mt-[3%] m-auto mb-[7%]'>
        <div className='flex flex-row w-4/12 justify-between items-center font-[100] leading-[33.5px] text-[34px]'>
        <div className='rounded-[10px]  h-[30px] w-[6px] bg-[#8A33FD] '></div>
        <div className='letter-2 text-[#3C4242] w-11/12'> {card.name} </div>
        </div> 
           <div className='flex flex-wrap flex-row w-full py-8 justify-between items-center mb-[2%]'>
                {
                  womenCategory?.map((card, index) => (
                    <ProductCard price={`PKR ${Math.ceil(Math.random()*2000)}`} key={index} onClick={() => navigate("/product-details", {state: card})} source={card.source} name={card.name} />
                  ))
                }
            </div>
    </div>
  )
}
