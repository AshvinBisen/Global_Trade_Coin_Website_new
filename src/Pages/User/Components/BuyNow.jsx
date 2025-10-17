import React, { useState } from "react";
import usdtIcon from "../../../assets/dashboard/buynow/usdt.png";  
import ethIcon from "../../../assets/dashboard/buynow/currency.png"; 
import tokenIcon from "../../../assets/dashboard/buynow/gtc curreny.png"; 

export default function BuyNowGTC() {
  const [usdtValue, setUsdtValue] = useState("");
  const [gtcValue, setGtcValue] = useState("");

  const tokenPrice = 0.001;
  const nextPrice = 0.012;
  const progress = 70;

  const handleUsdtChange = (e) => {
    const value = e.target.value;
    setUsdtValue(value);
    setGtcValue(value / tokenPrice);
  };

  const handleGtcChange = (e) => {
    const value = e.target.value;
    setGtcValue(value);
    setUsdtValue(value * tokenPrice);
  };

  return (
    <div className="bg-black text-white mx-auto flex items-center justify-center">
      {/* Gradient Border Wrapper */}
      <div className="gradient-border w-full max-w-full rounded-2xl">
        <div className="inner rounded-2xl">
          <h2 className="text-3xl font-bold text-center gradient-text my-2">
            Buy Now GTC
          </h2>
          <p className="text-center text-white text-lg mb-2">
            Presale Round 01
          </p>

          {/* Progress Bar */}
          <div className="mb-5">
            <div className="flex flex-row justify-between mb-4">
              <p className="text-lg text-[#ffffff]">GTCBot Target Reached</p>
              <p className="text-right text-lg text-[#FFA100]">{progress}%</p>
            </div>

            <div className="w-full bg-black border border-[#FFA100] rounded-full h-4 overflow-hidden">
              <div
                className="gradient-bg h-4"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Raised Info */}
          <div className="text-center mb-6">
            <p className="gradient-text font-bold text-2xl mb-3">
              RAISED USDT : $15,163,203.4026
            </p>
            <p className="text-white font-semibold text-lg tracking-wide">
              Tokens Sold : 2,072,559,436.4272 GTC
            </p>
          </div>

          {/* Token Price Info */}
          <div className="flex justify-between border border-[#FFA100] text-lg bg-[#EFF4FA00] py-2 px-3 rounded-md mb-4">
            <p className="text-white font-semibold">
              1 GTC = ${tokenPrice}
            </p>
            <p className="text-white font-semibold">
              Next Price: ${nextPrice}
            </p>
          </div>

          {/* Main Buy Section */}
          <div className="mx-auto ">
            {/* USDT Button */}
            <div className="flex justify-center mb-4">
              <button className="flex items-center gap-2 border border-[#FFA100] rounded-md px-6 py-2 gradient-text font-semibold hover:opacity-90 transition">
                <img src={usdtIcon} alt="USDT" className="w-5 h-5" />
                <span>USDT</span>
              </button>
            </div>

            {/* Amount You Pay */}
            <div className="mb-4">
              <label className="block text-base mb-2">Amount You Pay</label>
              <div className="border border-[#FFA100] rounded-md flex items-center overflow-hidden mb-4">
                {/* Icon Section */}
                <div className="flex items-center justify-center px-3">
                  <img src={ethIcon} alt="ETH" className="w-5 h-5" />
                </div>

                {/* Gradient Divider */}
                <div className="h-10 w-[1px] bg-gradient-to-b from-[#FFA100] via-[#FFE488] to-[#F89D00]" />

                {/* Input Field */}
                <input
                  type="number"
                  placeholder="Enter Amount In USDT"
                  className="w-full bg-transparent text-white px-3 py-2 placeholder:text-gray-400 focus:outline-none
                            [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none
                            [-moz-appearance:textfield]"
                  value={usdtValue}
                  onChange={handleUsdtChange}
                />
              </div>
            </div>

            {/* Amount You Get */}
            <div>
              <label className="block text-base mb-2">Amount You Get</label>
              <div className="border border-[#FFA100] rounded-md flex items-center overflow-hidden mb-4">
                {/* Icon Section */}
                <div className="flex items-center justify-center px-3">
                  <img src={tokenIcon} alt="Token" className="w-5 h-5" />
                </div>

                {/* Gradient Divider */}
                <div className="h-10 w-[1px] bg-gradient-to-b from-[#FFA100] via-[#FFE488] to-[#F89D00]" />

                {/* Input Field */}
                <input
                  type="number"
                  placeholder="Enter Amount In GTC"
                  className="w-full bg-transparent text-white px-3 py-2 placeholder:text-gray-400 focus:outline-none
                            [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none
                            [-moz-appearance:textfield]"
                  value={gtcValue}
                  onChange={handleGtcChange}
                />
              </div>
            </div>
          </div>

          {/* Invest Checkbox */}
          <div className="flex items-center space-x-2 mb-5 mt-6">
            <input type="checkbox" id="invest" className="custom-checkbox" />
            <label
              htmlFor="invest"
              className="text-lg gradient-text font-semibold cursor-pointer"
            >
              Invest
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-center py-2">
            <button className="w-32 gradient-bg text-[#000] py-2 rounded-md font-semibold hover:opacity-70 transition">
              Approve
            </button>
            <button className="w-32 gradient-bg hover:opacity-70 text-black font-semibold py-2 rounded-md transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
