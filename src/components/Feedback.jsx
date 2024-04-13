import React from 'react'
import femaleFeebackIcon from "../assets/female-feeback-icon.png";
import maleFeebackIcon1 from "../assets/male-feedback-icon-1.png";
import maleFeebackIcon2 from "../assets/male-feedback-icon-2.png";
import { Rating } from '@mui/material';
import { yellow } from '@mui/material/colors';

export default function Feedback() {
  const feedbackInformation = [
    {
      icon: femaleFeebackIcon,
      name: "Floyd Miles",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      icon: maleFeebackIcon1,
      name: "Ronald Richards",
      text: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      icon: maleFeebackIcon2,
      name: "Savannah Nguyen",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
  ]
  return (
    <>
      <div className='m-auto w-10/12 mt-[6%] mb-[10%]'>
          <div className='flex flex-row w-3/12 justify-between items-center font-[100] leading-[33.5px] text-[34px]'>
             <div className='rounded-[10px]  h-[30px] w-[6px] bg-[#8A33FD] '></div>
             <div className='letter-2 text-[#3C4242] w-11/12'> Feedback </div> 
          </div>
          <div className='mt-[5%] flex flex-row justify-between items-center'>
            {
              feedbackInformation.map((feedback, index) => (
                <div key={index} className='p-8 border rounded-[10px] w-[32%] h-[60vh]'>
                  <div className=' flex flex-row justify-between items-start'>
                  <img src={feedback.icon} alt={`Image feedback ${index}`} />
                    <Rating value={Math.floor(Math.random()*5)} readOnly  />
                  </div>
                  <div className='text-[22px] font-[100] text-[#3C4242] mt-5'>{feedback.name}</div>
                  <div className='text-[14px] font-[400] text-[#807D7E] mt-5'>{feedback.text}</div>
                </div>
              ))
            }
          </div> 
      </div>
    </>
  )
}
