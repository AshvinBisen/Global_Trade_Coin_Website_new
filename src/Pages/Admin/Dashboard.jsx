import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import gtcicon from "../../assets/dashboard/icon-gtc.png";
import gtclogo from "../../assets/dashboard/logo.png";
import "../../Styles/dashboard.css";
import TransactionTable from "./Components/TransactionsTable";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import leftImageSrc from "../../assets/dashboard/img.png";
import Facebook from "../../assets/dashboard/social-media/facebook.png";
import instagram from "../../assets/dashboard/social-media/instagram.png";
import Twitter from "../../assets/dashboard/social-media/twitter.png";
import Telegram from "../../assets/dashboard/social-media/telegram.png";

// ------------------- Chart Data -------------------
const chartData = {
  netIncome: {
    "2025": {
      "1M": [{ name: "Oct", value: 180 }],
      "6M": [
        { name: "May", value: 200 },
        { name: "Jun", value: 120 },
        { name: "Jul", value: 310 },
        { name: "Aug", value: 320 },
        { name: "Sept", value: 240 },
        { name: "Oct", value: 180 },
      ],
      "1Y": [
        { name: "Jan", value: 200 },
        { name: "Feb", value: 250 },
        { name: "Mar", value: 340 },
        { name: "Apr", value: 400 },
        { name: "May", value: 200 },
        { name: "Jun", value: 120 },
        { name: "Jul", value: 310 },
        { name: "Aug", value: 320 },
        { name: "Sept", value: 240 },
        { name: "Oct", value: 180 },
        { name: "Nov", value: 390 },
        { name: "Dec", value: 500 },
      ],
    },
    "2024": {
      "1M": [{ name: "Oct", value: 150 }],
      "6M": [
        { name: "May", value: 180 },
        { name: "Jun", value: 200 },
        { name: "Jul", value: 250 },
        { name: "Aug", value: 300 },
        { name: "Sept", value: 280 },
        { name: "Oct", value: 150 },
      ],
      "1Y": [
        { name: "Jan", value: 100 },
        { name: "Feb", value: 150 },
        { name: "Mar", value: 200 },
        { name: "Apr", value: 250 },
        { name: "May", value: 180 },
        { name: "Jun", value: 200 },
        { name: "Jul", value: 250 },
        { name: "Aug", value: 300 },
        { name: "Sept", value: 280 },
        { name: "Oct", value: 150 },
        { name: "Nov", value: 220 },
        { name: "Dec", value: 300 },
      ],
    },
  },
  holderInvestment: {
    "2025": {
      "1M": [{ name: "Oct", value: 460 }],
      "6M": [
        { name: "May", value: 300 },
        { name: "Jun", value: 180 },
        { name: "Jul", value: 420 },
        { name: "Aug", value: 370 },
        { name: "Sep", value: 410 },
        { name: "Oct", value: 460 },
      ],
      "1Y": [
        { name: "Jan", value: 200 },
        { name: "Feb", value: 320 },
        { name: "Mar", value: 400 },
        { name: "Apr", value: 250 },
        { name: "May", value: 300 },
        { name: "Jun", value: 180 },
        { name: "Jul", value: 420 },
        { name: "Aug", value: 370 },
        { name: "Sep", value: 410 },
        { name: "Oct", value: 460 },
        { name: "Nov", value: 500 },
        { name: "Dec", value: 550 },
      ],
    },
    "2024": {
      "1M": [{ name: "Oct", value: 400 }],
      "6M": [
        { name: "May", value: 250 },
        { name: "Jun", value: 200 },
        { name: "Jul", value: 350 },
        { name: "Aug", value: 300 },
        { name: "Sep", value: 360 },
        { name: "Oct", value: 400 },
      ],
      "1Y": [
        { name: "Jan", value: 150 },
        { name: "Feb", value: 220 },
        { name: "Mar", value: 300 },
        { name: "Apr", value: 200 },
        { name: "May", value: 250 },
        { name: "Jun", value: 200 },
        { name: "Jul", value: 350 },
        { name: "Aug", value: 300 },
        { name: "Sep", value: 360 },
        { name: "Oct", value: 400 },
        { name: "Nov", value: 450 },
        { name: "Dec", value: 500 },
      ],
    },
  },
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [walletConnected, setWalletConnected] = useState(false);

  const [netIncomeView, setNetIncomeView] = useState("1Y");
  const [netIncomeYear, setNetIncomeYear] = useState("2025");

  const [holderInvestmentView, setHolderInvestmentView] = useState("1Y");
  const [holderInvestmentYear, setHolderInvestmentYear] = useState("2025");

  const handleConnectWallet = () => setWalletConnected(true);

  if (!walletConnected) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 font-[inter]">
        <div className="bg-black border border-[#FFA100] rounded-xl p-2 text-center w-[90%] max-w-md relative">
          <div className="flex flex-col items-center gap-3">
            <img src={gtclogo} alt="GTC Logo" className="w-40 h-14" />
            <p className="text-white text-lg my-6">Enter The GTC Presale Dashboard</p>
            <button
              onClick={handleConnectWallet}
              className="w-full max-w-[235px] bg-[linear-gradient(180deg,#FFA100_0%,#FFE488_44%,#F89D00_100%)] text-black font-semibold py-2 rounded-md mb-4 hover:opacity-90 transition"
            >
              Connect Wallet
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full max-w-[235px] bg-[linear-gradient(180deg,#FFA100_0%,#FFE488_44%,#F89D00_100%)] text-black font-semibold py-2 rounded-md mb-4 hover:opacity-90 transition"
            >
              ← Back Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-1 md:p-4 font-[Inter]">
      <div className="flex flex-wrap lg:flex-nowrap gap-6">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {/* Top Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-2 gap-4 mb-6">
            {[
              { label: "Total Net Profit", value: "60,741.61 GTC" },
              { label: "Launch Price", value: "$60" },
              { label: "Referrals", value: "54345" },
              { label: "Referral Income", value: "60,741.61 GTC" },
              { label: "USD Bonus", value: "No bonus yet" },
              { label: "Total Net Profit", value: "$60,741.61" },
            ].map((item, i) => (
              <div key={i} className="gradient-border">
                <div className="inner flex flex-col gap-2">
                  <span className="text-sm font-semibold text-[#FFF]">{item.label}</span>
                  <span className="text-lg gradient-text font-semibold">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Tier Status */}
          <div className="gradient-border">
            <div className="inner">
              <h2 className="gradient-text font-semibold mb-4 text-lg">
                Your Tier Status
              </h2>

              <div className="gradient-border mb-4">
                <div className="inner gap-4">
                  <p className="text-sm gradient-text mb-4 font-bold">
                    You need{" "}
                    <span className="text-[#FFA100]">500,000 GTC</span> to reach
                    the first tier and earn USDT Bonuses.
                  </p>

                  <div className="flex justify-between font-semibold text-lg mb-2">
                    <span>Total USDT Raised </span>
                    <span>Remaining Token Sold</span>
                  </div>

                  <div className="flex justify-between font-semibold text-sm mb-2">
                    <span className="text-white">$4565 USDT</span>
                    <span className="text-[#d6b04e]">2253 GTC</span>
                  </div>

                  <div className="w-full h-3 gradient-bg gradient-border rounded-full mt-4">
                    <div className="h-2.5 bg-[#000] rounded-full w-3/5"></div>
                  </div>
                </div>
              </div>

              {/* Set Price Section */}
              <div className="bg-black flex justify-center items-center">
                <div className="gradient-border p-5 w-full">
                  <div className="inner">
                    <p className="gradient-text text-[16px] font-semibold mb-3">
                      Set Price
                    </p>

                    {/* Input Field with Icon */}
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
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Charts */}
        <div className="w-full lg:w-1/2 grid grid-rows-2 gap-6">
          {/* Net Income Chart */}
          <div className="gradient-border p-2 sm:p-4 w-full">
            <div className="inner">
              <div className="flex justify-between items-center mb-3">
                <h3 className="gradient-text font-semibold text-lg">Net Income</h3>
              </div>
              <div className="flex items-center gap-2 mb-4">
                {["1M", "6M", "1Y"].map((btn) => (
                  <button
                    key={btn}
                    className="bg-[linear-gradient(180deg,#FFA100_0%,#FFE488_44%,#F89D00_100%)] text-black text-xs font-semibold px-3 py-[3px] rounded-md hover:opacity-90 transition"
                    onClick={() => setNetIncomeView(btn)}
                  >
                    {btn}
                  </button>
                ))}
                <select
                  value={netIncomeYear}
                  onChange={(e) => setNetIncomeYear(e.target.value)}
                  className="bg-[linear-gradient(180deg,#FFA100_0%,#FFE488_44%,#F89D00_100%)] text-black text-xs font-semibold px-3 py-[3px] rounded-md outline-none hover:opacity-90 transition"
                >
                  <option>2025</option>
                  <option>2024</option>
                </select>
              </div>
              <div className="h-[170px] sm:h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData.netIncome[netIncomeYear][netIncomeView]}>
                    <CartesianGrid strokeDasharray="4 4" stroke="#555" horizontal vertical={false} />
                    <XAxis dataKey="name" stroke="#aaa" tick={{ fontSize: 12, fill: "#aaa" }} axisLine={false} tickLine={false} />
                    <YAxis stroke="#aaa" tick={{ fontSize: 12, fill: "#aaa" }} axisLine={false} tickLine={false} />
                    <Tooltip
                      cursor={{ fill: "rgba(255,255,255,0.05)" }}
                      contentStyle={{ backgroundColor: "#111", border: "1px solid #FFA100", borderRadius: "6px" }}
                      labelStyle={{ color: "#FFA100" }}
                      itemStyle={{ color: "#FFE488" }}
                    />
                    <defs>
                      <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FFA100" />
                        <stop offset="50%" stopColor="#FFE488" />
                        <stop offset="100%" stopColor="#F89D00" />
                      </linearGradient>
                    </defs>
                    <Bar dataKey="value" fill="url(#goldGradient)" radius={[6, 6, 0, 0]} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Holder Investment Chart */}
          <div className="gradient-border p-2 sm:p-4 w-full">
            <div className="inner">
              <div className="flex justify-between items-center mb-3">
                <h3 className="gradient-text font-semibold text-lg">Holder Investments</h3>
              </div>
              <div className="flex items-center gap-2 mb-4">
                {["1M", "6M", "1Y"].map((btn) => (
                  <button
                    key={btn}
                    className="bg-[linear-gradient(180deg,#FFA100_0%,#FFE488_44%,#F89D00_100%)] text-black text-xs font-semibold px-3 py-[3px] rounded-md hover:opacity-90 transition"
                    onClick={() => setHolderInvestmentView(btn)}
                  >
                    {btn}
                  </button>
                ))}
                <select
                  value={holderInvestmentYear}
                  onChange={(e) => setHolderInvestmentYear(e.target.value)}
                  className="bg-[linear-gradient(180deg,#FFA100_0%,#FFE488_44%,#F89D00_100%)] text-black text-xs font-semibold px-3 py-[3px] rounded-md outline-none hover:opacity-90 transition"
                >
                  <option>2025</option>
                  <option>2024</option>
                </select>
              </div>
              <div className="h-[170px] sm:h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData.holderInvestment[holderInvestmentYear][holderInvestmentView]}>
                    <CartesianGrid strokeDasharray="4 4" stroke="#555" horizontal vertical={false} />
                    <XAxis dataKey="name" stroke="#aaa" tick={{ fontSize: 12, fill: "#aaa" }} axisLine={false} tickLine={false} />
                    <YAxis stroke="#aaa" tick={{ fontSize: 12, fill: "#aaa" }} axisLine={false} tickLine={false} />
                    <Tooltip
                      cursor={{ fill: "rgba(255,255,255,0.05)" }}
                      contentStyle={{ backgroundColor: "#111", border: "1px solid #FFA100", borderRadius: "6px" }}
                      labelStyle={{ color: "#FFA100" }}
                      itemStyle={{ color: "#FFE488" }}
                    />
                    <defs>
                      <linearGradient id="holderGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FFA100" />
                        <stop offset="50%" stopColor="#FFE488" />
                        <stop offset="100%" stopColor="#F89D00" />
                      </linearGradient>
                    </defs>
                    <Bar dataKey="value" fill="url(#holderGradient)" radius={[6, 6, 0, 0]} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section (keep your existing code here) */}
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
                  {[Facebook, instagram, Twitter, Telegram].map((icon, i) => (
                    <a key={i} href="#" className="w-14 h-14 hover:scale-105">
                      <img src={icon} alt="Social" className="w-14 h-14" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TransactionTable />
    </div>
  );
};

export default Dashboard;


