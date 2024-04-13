import React, {useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import ShoppingCart from "@mui/icons-material/ShoppingCart"
import {useDispatch} from "react-redux";
import { addCartItem } from '../redux/slices/cart.slice';
import { Alert, Snackbar, SnackbarContent } from '@mui/material';

export default function ProductDetails() {
  const location  = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const card = location.state;
  const [loading, setLoading] = useState(false)
  
  const handleAddToCart = () => {
    setLoading(true);
    dispatch(addCartItem(card))
}
const [open, setOpen] = useState(false);

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setLoading(false);
};
  return (
    <>
    <Snackbar
     open={loading}
     autoHideDuration={2000}
     onClose={handleClose}
     message="Product added to cart successfully"
    />
    <div className='w-10/12 mt-[3%] m-auto mb-[7%]'>
    <div className='flex flex-row w-4/12 justify-between items-center font-[100] leading-[33.5px] text-[34px]'>
    <div className='rounded-[10px]  h-[30px] w-[6px] bg-[#8A33FD] '></div>
    <div className='letter-2 text-[#3C4242] w-11/12'> {card.name} </div>
    </div> 
       <div className='flex flex-wrap m-auto h-[50vh] p-8 flex-row w-full py-8 justify-between items-center mb-[2%]'>
            <div className='w-[35%] h-full overflow-hidden'>
              <img src={card.source} className='h-[200%] object-cover w-full' alt="" />
            </div>
            <div className='w-[65%] h-[40vh] px-8'>
              <div className='text-[22px] text-[#3C4242]'> Category </div>
              <div className='mt-[2%]'>Price: PKR {card.price}</div>
              <div className='text-[#3C4242] w-7/12 mt-[3%] text-[14px]'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe explicabo in asperiores ad ea corporis natus. Odit cum fugit numquam facere maiores eaque rerum, nostrum facilis dolor, cupiditate minima modi? </div>
              <button onClick={() => handleAddToCart()} className='bg-black mt-[5%] w-6/12 text-[18px] text-white rounded-[10px] text-center font-semibold m-auto p-2' type="button">
                Add to Cart
                <ShoppingCart sx={{fontSize: "24px", marginLeft:"3%"}} />
              </button>
            </div>
        </div>
    </div>
    </>
  )
}
