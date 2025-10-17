import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import gtcicon from '../../assets/dashboard/icon-gtc.png';
import gtclogo from '../../assets/dashboard/logo.png';
import '../../Styles/dashboard.css';
import TransactionTable from './Components/TransactionsTableUser';
import BuyNow from './Components/BuyNow';

import leftImageSrc from '../../assets/dashboard/img.png';
import Facebook from '../../assets/dashboard/social-media/facebook.png';
import Instagram from '../../assets/dashboard/social-media/instagram.png';
import Twitter from '../../assets/dashboard/social-media/twitter.png';
import Telegram from '../../assets/dashboard/social-media/telegram.png';

const monthlyData = [
  { name: "Jan", value: 200 },
  { name: "Feb", value: 250 },
  { name: "Mar", value: 340 },
  { name: "Apr", value: 400 },
  { name: "May", value: 200 },
  { name: "Jun", value: 120 },
  { name: "Jul", value: 310 },
  { name: "Aug", value: 320 },
  { name: "Sep", value: 240 },
  { name: "Oct", value: 180 },
  { name: "Nov", value: 390 },
  { name: "Dec", value: 500 },
];

const UserDashboard = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const navigate = useNavigate();

  const handleConnectWallet = () => {
    setWalletConnected(true);
  };

  // SHOW POPUP FIRST
  if (!walletConnected) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 font-[inter]">
        <div className="bg-black border border-[#FFA100] rounded-xl p-8 text-center w-[90%] max-w-md relative">
          <div className="flex flex-col items-center gap-3">
            <img src={gtclogo} alt="GTC Logo" className="w-40 h-14" />
            <p className="text-white text-lg my-6">
              Enter The GTC Presale Dashboard
            </p>

            {/* Connect Wallet Button */}
            <button
              onClick={handleConnectWallet}
              className="w-full max-w-[235px] bg-[linear-gradient(180deg,#FFA100_0%,#FFE488_44%,#F89D00_100%)] 
              text-black font-semibold py-2 rounded-md mb-4 hover:opacity-90 transition"
            >
              Connect Wallet
            </button>

            {/* Back Home Button */}
            <button
              onClick={() => navigate("/")}
              className="w-full max-w-[235px] bg-[linear-gradient(180deg,#FFA100_0%,#FFE488_44%,#F89D00_100%)] 
              text-black font-semibold py-2 rounded-md mb-4 hover:opacity-90 transition"
            >
              ← Back Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // MAIN DASHBOARD (after connect)
  return (
    <div className="min-h-screen bg-black text-white p-4 font-[Inter]">
      <div className="flex flex-wrap  lg:flex-nowrap gap-6 flex-col-reverse lg:flex-row">

        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">

          {/* Top Info Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-2 gap-4 mb-6">
            {[
              { label: "Total Net Profit", value: "60,741.61 GTC" },
              { label: "Launch Price", value: "$60" },
              { label: "Referrals", value: "54,345" },
              { label: "Referral Income", value: "60,741.61 GTC" },
              { label: "USD Bonus", value: "No bonus yet" },
              { label: "Total Net Profit", value: "$60,741.61" },
              { label: "Launch Price", value: "$60" },
              { label: "Referrals", value: "54,345" },
            ].map((item, i) => (
              <div key={i} className="gradient-border">
                <div className="inner flex flex-col gap-3">
                  <span className="text-sm font-semibold text-[#FFF]">{item.label}</span>
                  <span className="text-lg gradient-text font-semibold">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tier Status */}
          <div className="gradient-border">
            <div className="inner">
              <h2 className="gradient-text font-semibold mb-4 text-lg">Your Tier Status</h2>

              <div className="gradient-border mb-4">
                <div className="inner gap-4">
                  <p className="text-sm gradient-text mb-4 font-bold">
                    You need <span className="text-[#FFA100]">500,000 GTC</span> to reach the first tier and earn USDT Bonuses.
                  </p>

                  <div className="flex justify-between font-semibold text-lg mb-2">
                    <span className="text-center">Total USDT Raised</span>
                    <span className="text-center">Remaining Token Sold</span>
                  </div>

                  <div className="flex gradient-text justify-between font-semibold text-sm mb-2">
                    <span className="text-white text-center">$4,565 USDT</span>
                    <span className="text-[#d6b04e] text-center">2,253 GTC</span>
                  </div>

                  <div className="w-full h-3 gradient-bg gradient-border rounded-full mt-4">
                    <div className="h-2.5 bg-[#000] rounded-full w-3/5"></div>
                  </div>
                </div>
              </div>

              {/* Set Price */}
              {/* <div className="bg-black flex justify-center items-center">
                <div className="gradient-border p-5 w-full">
                  <div className="inner">
                    <p className="gradient-text text-[16px] font-semibold mb-3">Set Price</p>
                    <div className="border border-[#FFA100] rounded-md flex items-center overflow-hidden mb-4">
                      <div className="flex items-center justify-center px-3">
                        <img src={gtcicon} alt="icon" className="w-5 h-5" />
                      </div>
                      <div className="h-10 w-[1px] bg-gradient-to-b from-[#FFA100] via-[#FFE488] to-[#F89D00]" />
                      <input
                        type="text"
                        placeholder="Enter Price Set"
                        className="w-full bg-transparent text-white px-3 py-2 placeholder:text-gray-400 focus:outline-none"
                      />
                    </div>
                    <button className="w-36 mx-auto block bg-[linear-gradient(180deg,#FFA100_0%,#FFE488_44%,#F89D00_100%)] text-black font-semibold py-2 rounded-md hover:opacity-90 transition">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 gap-6">
          <BuyNow />
        </div>
      </div>

      {/* Social Media Section */}
      <div className="w-full py-8 mt-2">
        <div className="mx-auto">
          <div className="gradient-border">
            <div className="inner flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="w-full md:w-2/5 flex justify-center py-4">
                <img src={leftImageSrc} alt="illustration" className="max-w-[252px] w-full h-auto object-contain rounded-md" />
              </div>
              <div className="w-full md:w-3/5 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-semibold gradient-text">Social Media Links</h2>
                <p className="mt-4 max-w-lg mx-auto text-sm md:text-base text-gray-300">
                  Get your friends to join and earn rewards! Receive <strong>10% commission</strong> when your friends buy.
                </p>
                <div className="mt-8 flex items-center justify-center gap-6">
                  {[Facebook, Instagram, Twitter, Telegram].map((icon, i) => (
                    <a key={i} href="#" className="group inline-flex items-center justify-center w-16 h-16 hover:scale-105">
                      <img src={icon} alt="social" className="w-14 h-14" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <TransactionTable />
    </div>
  );
};

export default UserDashboard;

