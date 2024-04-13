import React from 'react';
import headerLogo from "../assets/header-logo.png";
import SearchIcon from "@mui/icons-material/Search"
import HeartIconOutlined from "@mui/icons-material/FavoriteBorderTwoTone"
import AccountProfile from "@mui/icons-material/PersonOutline"
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import {useNavigate} from "react-router-dom";
import { Badge, IconButton, Tooltip } from '@mui/material';
import {useSelector} from "react-redux"
import { getCartProducts } from '../redux/slices/cart.slice';

export default function Header() {
    const navigate = useNavigate();
    let cartItems = useSelector(getCartProducts)
    // cartItems.shift();
    console.log(cartItems)
  return (
    <>
        <div className='shadow-lg py-6 px-20 flex flex-row justify-between items-center'>
            <div className='cursor-pointer' onClick={() => navigate("/")}>
                <div className='text-[34.06px] font-[400] text-[#3C4242]'>Euphoria</div>
                <img src={headerLogo} alt="Logo" className='w-14 m-auto' />
            </div>
            <div className='font-semibold text-[22px] text-[#3C4242]'>Shop</div>
            <div className='text-[22px] text-[#807D7E] cursor-pointer' onClick={() => navigate("/category", {state: {type: "Categories for Men", data:[]}})}>Men</div>
            <div className='text-[22px] text-[#807D7E] cursor-pointer' onClick={() => navigate("/category", {state: {type: "Categories for Women", data:[]}})}>Women</div>
            <div className='text-[22px] text-[#807D7E]'>Combos</div>
            <div className='text-[22px] text-[#807D7E]'>Joggers</div>
            <div className='px-4 bg-[#F6F6F6] rounded-lg text-[#807D7E]'>
                <SearchIcon className='w-10 mr-2 text-black opacity-40' />
                <input placeholder='Search' type="search" name="" className='bg-transparent p-2 outline-none w-10/12' />
            </div>         
            <div className='flex flex-row justify-between text-[#807D7E] items-center'>
                <Tooltip title="All categories">
                    <IconButton onClick={() => navigate("/category", {state: {type:"All Categories"}})}>
                    <HeartIconOutlined className='bg-[#F6F6F6] rounded-md p-2' fontSize="large" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Login">
                    <IconButton onClick={() => navigate("/login")}>
                    <AccountProfile className='bg-[#F6F6F6] rounded-md p-2' fontSize="large" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Cart">
                    <IconButton onClick={() => navigate("/cart")}>
                    <Badge badgeContent={[...cartItems].length} color="primary">
                    <ShoppingCart className='bg-[#F6F6F6] rounded-md p-2' fontSize="large" />
                    </Badge>
                    </IconButton>
                </Tooltip>
            </div>   
        </div>
    </>
  )
}
