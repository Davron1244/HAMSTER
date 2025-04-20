import React, { useState } from 'react';
import HourModal from './components/HourModal';
import TabModal from './components/TabModal';

const App = () => {
  const getSavedCount = () => {
    const saved = localStorage.getItem('count');
    const parsed = parseInt(saved, 10);
    return isNaN(parsed) ? 0 : parsed;
  };

  const getSavedEarnCount = () => {
    const saved = localStorage.getItem('EarnCount');
    const parsed = parseInt(saved, 10);
    return isNaN(parsed) ? 12 : parsed;
  };

  const [counter, setCounter] = useState(getSavedCount);
  const [EarnCount, setEarnCount] = useState(getSavedEarnCount);
  const [speedValue, setSpeedValue] = useState(6500);
  const [tabModal, setTabModal] = useState(false);
  const [hourModal, setHourModal] = useState(false);

  const hamsterCount = () => {
    const newCount = counter + EarnCount;
    setCounter(newCount);
    localStorage.setItem('count', newCount);

    setSpeedValue(prev => (prev > 0 ? prev - 1 : 0));
  };

  const stepByStep = () => {
    const newEarnCount = EarnCount + 2;
    const newCount = counter - 1000;
    setCounter(newCount);
    setEarnCount(newEarnCount);

    localStorage.setItem('count', newCount);
    localStorage.setItem('EarnCount', newEarnCount);
  };

  const showTabModal = () => {
    setTabModal(true);
    setHourModal(false);
  };

  const closeTabModal = () => setTabModal(false);
  const showHourModal = () => {
    setHourModal(true);
    setTabModal(false);
  };
  const closeHourModal = () => setHourModal(false);

  return (
    <div className="homepage bg-[#2C2F35] w-[428px] mx-auto rounded-[50px]">
      <h1 className="homepage__title text-center pt-[40px] text-white">Hamster Kombat</h1>

      <div className="flex align-center justify-center gap-[9px]">
        <div onClick={showTabModal} className="earnpertap__page bg-[#32363C] w-[117px] h-[50px] rounded-[10px] text-center mt-[50px]">
          <p className="text-[#F79841] text-[11px] mt-[5px]">Earn per tap</p>
          <div className="coin flex gap-[3px] ml-[33px]">
            <img src="./public/Group 8.svg" alt="" />
            <p className="text-white">+{EarnCount}</p>
          </div>
        </div>

        <div className="earnpertap__page bg-[#32363C] w-[117px] h-[50px] rounded-[10px] text-center mt-[50px]">
          <p className="text-[#6F72E2] text-[11px] mt-[5px]">Coins to level up</p>
          <div className="coin flex gap-[3px] ml-[33px]">
            <p className="text-white">10 M</p>
          </div>
        </div>

        <div onClick={showHourModal} className="earnpertap__page bg-[#32363C] w-[117px] h-[50px] rounded-[10px] text-center mt-[50px]">
          <p className="text-[#6F72E2] text-[11px] mt-[5px]">Profit per hour</p>
          <div className="coin flex gap-[3px] ml-[33px]">
            <img src="./public/Group 8.svg" alt="" />
            <p className="text-white">+636</p>
          </div>
        </div>
      </div>

      <div className="coin__up flex justify-center mt-[38px]">
        <img width={42} height={42} src="./public/Group 8.svg" alt="" />
        <h1 className="text-[40px] text-white font-[600]">{counter.toLocaleString()}</h1>
      </div>

      <div className="hamster">
        <button id="hamsterCounter" onClick={hamsterCount} className="hamster-btn cursor-[pointer] mt-[110px] ml-[53px]">
          <img className="mx-auto" src="./public/Group 24.svg" alt="" />
        </button>
      </div>

      <div className="Boost flex justify-between p-[28px]">
        <div className="speed flex gap-[5px]">
          <img src="./public/Vector.svg" alt="" />
          <p className="text-white">
            <span className="rock">6500</span> / <span className="variable">{speedValue}</span>
          </p>
        </div>
        <p className="text-white font-[600]">Boost</p>
      </div>

      <div className="bg-[#32363CB2] w-[368px] h-[60px] ml-[30px] rounded-[12px]">
        <div className="exchange bg-[#21242980] pt-[5px] pb-[5px] pl-[12px] pr-[12px] w-[65px] rounded-[8px]">
          <img className="ml-[9px]" src="./public/Union.svg" alt="" />
          <p className="text-[10px] text-white mt-[3px]">Exchange</p>
        </div>
      </div>

      {tabModal && <TabModal closeTabModal={closeTabModal} stepByStep={stepByStep} />}
      {hourModal && <HourModal closeHourModal={closeHourModal} />}
    </div>
  );
};

export default App;
