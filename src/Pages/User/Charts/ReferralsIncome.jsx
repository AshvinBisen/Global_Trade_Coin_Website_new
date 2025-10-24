import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../../../Styles/dashboard.css";

// Data for different years with multiple series
const dataByYear = {
  2023: [
    { name: "jan", referrals: 100, bonuses: 200 },
    { name: "feb", referrals: 80, bonuses: 100 },
    { name: "mar", referrals: 120, bonuses: 300 },
    { name: "apr", referrals: 60, bonuses: 200 },
    { name: "may", referrals: 90, bonuses: 220 },
    { name: "jun", referrals: 110, bonuses: 290 },
    { name: "jul", referrals: 130, bonuses: 220 },
    { name: "aug", referrals: 95, bonuses: 195 },
    { name: "sept", referrals: 150, bonuses: 300 },
    { name: "oct", referrals: 120, bonuses: 190 },
    { name: "nov", referrals: 80, bonuses: 140 },
    { name: "dec", referrals: 110, bonuses: 280 },
  ],
  2024: [
    { name: "jan", referrals: 90, bonuses: 160 },
    { name: "feb", referrals: 120, bonuses: 200 },
    { name: "mar", referrals: 100, bonuses: 180 },
    { name: "apr", referrals: 140, bonuses: 260 },
    { name: "may", referrals: 80, bonuses: 120 },
    { name: "jun", referrals: 130, bonuses: 210 },
    { name: "jul", referrals: 110, bonuses: 190 },
    { name: "aug", referrals: 120, bonuses: 260 },
    { name: "sept", referrals: 100, bonuses: 260 },
    { name: "oct", referrals: 130, bonuses: 280 },
    { name: "nov", referrals: 70, bonuses: 80 },
    { name: "dec", referrals: 90, bonuses: 180 },
  ],
  2025: [
    { name: "jan", referrals: 150, bonuses: 250 },
    { name: "feb", referrals: 80, bonuses: 120 },
    { name: "mar", referrals: 180, bonuses: 320 },
    { name: "apr", referrals: 50, bonuses: 50 },
    { name: "may", referrals: 80, bonuses: 120 },
    { name: "jun", referrals: 140, bonuses: 210 },
    { name: "jul", referrals: 120, bonuses: 170 },
    { name: "aug", referrals: 130, bonuses: 210 },
    { name: "sept", referrals: 110, bonuses: 290 },
    { name: "oct", referrals: 100, bonuses: 270 },
    { name: "nov", referrals: 50, bonuses: 50 },
    { name: "dec", referrals: 90, bonuses: 210 },
  ],
};

export default function GtcTokenBoughtChart() {
  const [activeFilter, setActiveFilter] = useState("1Y"); // 1M, 6M, 1Y
  const [selectedYear, setSelectedYear] = useState("2025"); // Default year

  const yearlyData = dataByYear[selectedYear];
  const sixMonthsData = yearlyData.slice(6, 12);
  const oneMonthData = yearlyData.slice(-1);

  let chartData;
  if (activeFilter === "1M") chartData = oneMonthData;
  else if (activeFilter === "6M") chartData = sixMonthsData;
  else chartData = yearlyData;

  return (
    <div className="bg-black w-full flex items-center justify-center">
      <div className="gradient-border p-4 w-full max-w-full rounded-2xl">
        <div className="inner">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[#FFA100] font-semibold text-lg">
              Referrals Income 0.00 GTC
            </h3>
          </div>

          {/* Chart Section */}
          <div className="gradient-border p-4 rounded-xl">
            <div className="inner">
              {/* Filter Buttons */}
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                {["1M", "6M", "1Y"].map((btn) => (
                  <button
                    key={btn}
                    className={`${
                      activeFilter === btn
                        ? "opacity-100 scale-105"
                        : "opacity-80"
                    } bg-[linear-gradient(180deg,#FFA100_0%,#FFE488_44%,#F89D00_100%)]
                    text-black text-xs font-semibold px-3 py-[3px] rounded-md transition`}
                    onClick={() => setActiveFilter(btn)}
                  >
                    {btn}
                  </button>
                ))}

                {/* Year Selector */}
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-[linear-gradient(180deg,#FFA100_0%,#FFE488_44%,#F89D00_100%)]
                  text-black text-xs font-semibold px-3 py-[3px] rounded-md outline-none hover:opacity-90 transition"
                >
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
              </div>

              {/* Stacked Area Chart */}
              <div className="h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="4 4"
                      stroke="#555"
                      horizontal
                      vertical={false}
                    />
                    <XAxis
                      dataKey="name"
                      stroke="#aaa"
                      tick={{ fontSize: 12, fill: "#aaa" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#aaa"
                      tick={{ fontSize: 12, fill: "#aaa" }}
                      axisLine={false}
                      tickLine={false}
                      ticks={[0, 100, 200, 300, 400, 500, 600]}
                      domain={[0, "dataMax + 50"]}
                    />
                    <Tooltip
                      cursor={{ fill: "rgba(255,255,255,0.05)" }}
                      contentStyle={{
                        backgroundColor: "#111",
                        border: "1px solid #FFA100",
                        borderRadius: "6px",
                      }}
                      labelStyle={{ color: "#FFA100" }}
                      itemStyle={{ color: "#FFE488" }}
                    />
                    <defs>
                      <linearGradient id="referralsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FFA100" />
                        <stop offset="50%" stopColor="#FFE488" />
                        <stop offset="100%" stopColor="#F89D00" />
                      </linearGradient>
                      <linearGradient id="bonusesGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FFA100" />
                        <stop offset="50%" stopColor="#FFE488" />
                        <stop offset="100%" stopColor="#F89D00" />
                      </linearGradient>
                    </defs>
                    {/* Stacked Areas */}
                    <Area
                      type="monotone"
                      dataKey="referrals"
                      stackId="1"
                      stroke="#000000"
                      fill="url(#referralsGradient)"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Area
                      type="monotone"
                      dataKey="bonuses"
                      stackId="1"
                      stroke="#000000"
                      fill="url(#bonusesGradient)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
