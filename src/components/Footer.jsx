import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from '@mui/material';
import ArrowDownward from '@mui/icons-material/KeyboardArrowDown';
import playStoreIcon from "../assets/playstore-icon.png";
import appStoreIcon from "../assets/appstore-icon.png";

export default function Footer() {
  return (
    <div className='w-full p-16 bg-[#3C4242] text-white'>
        <div className='w-11/12 m-auto'>
            <div className='flex flex-wrap flex-row justify-between items-start'>
                <div>
                  <div className='text-[28.58px] mb-2 font-[700]'>Need Help</div>
                  <div className='font-[500] text-[18px] leading-[39.04px]'>Contact Us</div>
                  <div className='font-[500] text-[18px] leading-[39.04px]'>Track Order</div>
                  <div className='font-[500] text-[18px] leading-[39.04px]'>Returns & Refunds</div>
                  <div className='font-[500] text-[18px] leading-[39.04px]'>FAQ's</div>
                  <div className='font-[500] text-[18px] leading-[39.04px]'>Career</div>
                </div>
                <div>
                <div className='text-[28.58px] mb-2 font-[700]'>Company</div>
                  <div className='font-[500] text-[18px] leading-[39.04px]'>About Us</div>
                  <div className='font-[500] text-[18px] leading-[39.04px]'>euphorian Blog</div>
                  <div className='font-[500] text-[18px] leading-[39.04px]'>euphoriastan</div>
                  <div className='font-[500] text-[18px] leading-[39.04px]'>Collaboration</div>
                  <div className='font-[500] text-[18px] leading-[39.04px]'>Media</div>
                </div>
                <div>
                <div className='text-[28.58px] mb-2 font-[700]'>More Info</div>
                  <div className='font-[500] text-[18px] leading-[39.04px]'>Term and Conditions</div>
                  <div className='font-[500] text-[18px] leading-[39.04px]'>Privacy Policy</div>
                  <div className='font-[500] text-[18px] leading-[39.04px]'>Shipping Policy</div>
                  <div className='font-[500] text-[18px] leading-[39.04px]'>Sitemap</div>
                </div>
                <div>
                <div className='text-[28.58px] mb-2 font-[700]'>Location</div>
                  <div className='font-[500] text-[18px] leading-[39.04px]'>support@euphoria.in</div>
                  <div className='font-[500] text-[18px] leading-[39.04px]'>Eklingpura Chouraha, Ahmedabad Main Road</div>
                  <div className='font-[500] text-[18px] leading-[39.04px]'>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</div>
                </div>
            </div>
            <div className='flex flex-row mt-[3%] justify-between items-end'>
                <div className='flex flex-row justify-between items-center'>
                  <IconButton>
                  <FacebookIcon sx={{fontSize: "36px"}} className='bg-white rounded-[10px] text-[#2A2F2F] p-2' />
                  </IconButton>
                  <IconButton>
                    <InstagramIcon sx={{fontSize: "36px"}} className='bg-white rounded-[10px] text-[#2A2F2F] p-2' />
                    </IconButton>
                    <IconButton>
                    <TwitterIcon sx={{fontSize: "36px"}} 
                    className='bg-white rounded-[10px] text-[#2A2F2F] p-2' />
                    </IconButton>
                    <IconButton>
                    <LinkedInIcon sx={{fontSize: "36px"}}  className='bg-white rounded-[10px] text-[#2A2F2F] p-2'/>
                    </IconButton>
                </div>
                <div className='w-[38%]'>
                  <div className='text-[28.58px] mb-4 font-[700]'>Download The App</div>
                  <div className='flex flex-row justify-between items-center'>
                  <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row justify-between items-center'>
                    <img src={playStoreIcon} className='w-6 h-8 mr-2' alt="" />
                    <div>
                      <div className='text-[10px]'>android app on</div>
                      <div className='text-[18px]'>Google Play</div>
                    </div>
                    </div>
                  </div>
                  <div className='flex w-[65%] flex-row justify-between items-center'>
                    <div className='flex flex-row justify-between items-center'>
                    <img src={appStoreIcon} className='w-6 h-8 mr-2' alt="" />
                    <div>
                      <div className='text-[10px]'>android app on</div>
                      <div className='text-[18px]'>App Store</div>
                    </div>
                    </div>
                  </div>
                  </div>
                </div>
            </div>
        </div>
        <div className='border-t mt-[3%] border-b border-white px-12 flex flex-row justify-between items-center'>
          <div>
            <div className='text-[28.58px] font-[700]'>Popular</div>
            <div className='text-[28.58px] font-[700]'>Categories</div>
          </div>
          <ArrowDownward sx={{fontSize:"48px"}} />
        </div>
        <div className='text-center font-[700] text-[18px] mt-[3%]'>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</div>
    </div>
  )
}
