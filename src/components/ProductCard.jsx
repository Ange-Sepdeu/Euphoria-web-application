import ArrowForward from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";
import React from "react";

export default function ProductCard({source,name, onClick, price}) {
  return (
    <div className="w-[24%] mt-5">
      <img
        className="rounded-[10px] w-[18vw] h-[45vh]"
        src={source}
        alt={name}
      />
      <div className="w-[18vw] flex flex-row justify-between items-center">
        <div className="text-[20px] text-[#3C4242] leading-[24.2px] font-[700] mt-1">
          <div className="text-[#2A2F2F] text-[17.88px] font-[700] leading-[27.93px]">
            {" "}
            {name}{" "}
          </div>
          <div className="text-[#7F7F7F] font-[500] text-[13.47px]">
            {price}
          </div>
        </div>
        <IconButton onClick={onClick}>
          <ArrowForward
            fontSize="24px"
            color="#2A2F2F"
            className="text-[#2A2F2F]"
          />
        </IconButton>
      </div>
    </div>
  );
}
