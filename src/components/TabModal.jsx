
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const TabModal = ({ closeTabModal, stepByStep }) => {
  return (
    <div className="w-[240px] left-195 absolute top-[190px] bg-[#2C2F35] rounded-2xl text-white shadow-sky-500 border p-5 border-[#8575756E]">
      <div className="flex justify-end">
        <IoMdCloseCircle
          onClick={closeTabModal}
          size={30}
          className="cursor-pointer"
        />
      </div>

      <img
        onClick={() => stepByStep(1000)}
        style={{ marginTop: 20 }}
        width={300}
        src="/Group 27.svg"
        alt=""
      />

      <img
        onClick={() => stepByStep(2000)}
        style={{ marginTop: 20 }}
        width={300}
        src="/Group 28 (1).svg"
        alt=""
      />

      <img
        onClick={() => stepByStep(6000)}
        style={{ marginTop: 20 }}
        width={300}
        src="/Group 30.svg"
        alt=""
      />
    </div>
  );
};

export default TabModal;
