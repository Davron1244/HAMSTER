import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const HourModal = ({ closeHourModal }) => {
  return (
    <div className="container">
      <div className="border-hour w-[375px] ml-[30px] absolute top-[200px] bg-[#2C2F35] rounded-2xl text-white shadow-sky-500 p-5">
        <div className="flex justify-end">
          <IoMdCloseCircle
            onClick={closeHourModal}
            size={30}
            className="cursor-pointer"
          />
        </div>
        <img width={400} style={{ marginTop: 40 }} src="/Group 19.svg" alt="" />
        <img width={400} style={{ marginTop: 10 }} src="/Group 19.svg" alt="" />
        <img width={400} style={{ marginTop: 10 }} src="/Group 19.svg" alt="" />
      </div>
    </div>
  );
};

export default HourModal;
