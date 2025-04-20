import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const HourModal = ({ closeHourModal }) => {
  return (
    <div className="border-hour w-[375px] left-194 absolute top-[200px] bg-[#2C2F35] rounded-2xl text-white shadow-sky-500 p-5">
      <div className="flex justify-end">
        <IoMdCloseCircle
          onClick={closeHourModal}
          size={30}
          className="cursor-pointer"
        />
      </div>
      <img width={400} style={{marginTop:40}} src="./public/Group 19.svg" alt="" />
      <img width={400} style={{marginTop:10}} src="./public/Group 19.svg" alt="" />
      <img width={400} style={{marginTop:10}} src="./public/Group 19.svg" alt="" />
    </div>
  );
};

export default HourModal;
