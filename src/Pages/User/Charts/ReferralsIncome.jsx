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

// Data for different years
const dataByYear = {
  2023: [
    { name: "jan", value: 300 },
    { name: "feb", value: 180 },
    { name: "mar", value: 420 },
    { name: "apr", value: 260 },
    { name: "may", value: 310 },
    { name: "jun", value: 400 },
    { name: "jul", value: 350 },
    { name: "aug", value: 290 },
    { name: "sept", value: 450 },
    { name: "oct", value: 310 },
    { name: "nov", value: 220 },
    { name: "dec", value: 390 },
  ],
  2024: [
    { name: "jan", value: 250 },
    { name: "feb", value: 320 },
    { name: "mar", value: 280 },
    { name: "apr", value: 400 },
    { name: "may", value: 200 },
    { name: "jun", value: 340 },
    { name: "jul", value: 300 },
    { name: "aug", value: 380 },
    { name: "sept", value: 360 },
    { name: "oct", value: 410 },
    { name: "nov", value: 150 },
    { name: "dec", value: 270 },
  ],
  2025: [
    { name: "jan", value: 400 },
    { name: "feb", value: 200 },
    { name: "mar", value: 500 },
    { name: "apr", value: 100 },
    { name: "may", value: 200 },
    { name: "jun", value: 350 },
    { name: "jul", value: 230 },
    { name: "aug", value: 340 },
    { name: "sept", value: 400 },
    { name: "oct", value: 370 },
    { name: "nov", value: 100 },
    { name: "dec", value: 300 },
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

              {/* Chart */}
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
                      ticks={[0, 100, 200, 300, 400, 500]}
                      domain={[0, 500]}
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
                      <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FFA100" />
                        <stop offset="50%" stopColor="#FFE488" />
                        <stop offset="100%" stopColor="#F89D00" />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#FFA100"
                      fill="url(#goldGradient)"
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
