import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { getCartProducts, removeCartItem } from '../redux/slices/cart.slice';
import Block from "@mui/icons-material/BlockOutlined"
import DeleteOutlined from "@mui/icons-material/DeleteOutline";
import { IconButton, Snackbar, Tooltip } from '@mui/material';
import ChevronRight from "@mui/icons-material/ChevronRight"
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const cartItems = useSelector(getCartProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setLoading(false);
  };
  const removeItem = (item) => {
        setLoading(true);
        dispatch(removeCartItem(item));
  }
  const handleCheckout = () => {
      navigate("/login");
  }
  const price = Math.floor(Math.random()*10000)
  const [quantity, setQuantity] = useState(Math.floor(Math.random()*15))
  const handleAdd = () => {
      setQuantity(() => quantity+1);
  }
  const handleDecrement = () => {
    if (quantity > 1)
     {
      setQuantity(() => quantity-1);
     }
  }
  return (
    <>
    <Snackbar
     open={loading}
     autoHideDuration={2000}
     onClose={handleClose}
     message="Product removed successfully"
    />
    <div className='w-10/12 m-auto mt-[5%]'>
        <div className='flex flex-row w-4/12 justify-between items-center font-[100] leading-[33.5px] text-[34px]'>
        <div className='rounded-[10px]  h-[30px] w-[6px] bg-[#8A33FD] '></div>
        <div className='letter-2 text-[#3C4242] w-11/12'> Your Cart </div>
        </div>
        <div className='p-8'>
        {
          [...cartItems].length > 0 ?
          [...cartItems].map((cart, index) => (
              <div key={index} className='border-b border-gray-200 flex h-[35vh] flex-row justify-center items-center mb-[3%]'>
                  <div className='h-full w-[35%] overflow-hidden'>
                      <img src={cart.source} className='w-25 h-25 object-contain' />
                  </div>
                  <div className='w-[40%] ml-7'>
                  <div className='w-full h-full flex flex-row justify-between items-center'>
                     <div className='w-full'>
                      <div className='text-[28px] font-bold'>{cart?.name}</div>
                      <div className='text-[16px] font-semibold'>{cart.price ?? `PKR ${price}`}</div>
                      <div className='text-[16px] font-semibold'>Quantity: {quantity}</div>
                      <div className='text-[16px] font-semibold'>Total Price: PKR {price * quantity}</div>
                      <div className='mt-2 flex flex-row justify-between items-center w-[25%]'>
                         <button onClick={() => handleAdd()} type="button" className='bg-blue-700 text-white px-4 font-bold rounded-[10px]'>+</button>
                         <button onClick={() => handleDecrement()} type="button" className='bg-red-700 text-white px-4 font-bold rounded-[10px]'>-</button>
                      </div>
                      </div>
                      <div>
                        <Tooltip title="Remove item from cart">
                        <IconButton onClick={() => removeItem(cart)}>
                        <DeleteOutlined sx={{fontSize: "36px", color:"red"}} />
                        </IconButton>
                        </Tooltip>
                      </div>      
                  </div>
                  <button onClick={() => handleCheckout()} className='bg-black mt-[5%] w-6/12 text-[18px] text-white rounded-[10px] text-center font-semibold m-auto p-2' type="button">
                    CheckOut
                  <ChevronRight sx={{fontSize: "24px", marginLeft:"3%"}} />
                </button>
                  </div>
              </div>
          )) :
           <div className='text-center mt-[5%] mb-[5%]'>
           <Block sx={{fontSize: "128px"}} />
           <div className='text-[22px] text-center'>Your cart is empty</div>
           </div>
        }
        </div>
    </div>
    </>
  )
}
