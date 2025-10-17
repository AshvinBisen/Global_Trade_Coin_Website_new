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

// Data for multiple years
const dataByYear = {
  2024: [
    { name: "jan", value: 250 },
    { name: "feb", value: 200 },
    { name: "mar", value: 350 },
    { name: "apr", value: 400 },
    { name: "may", value: 300 },
    { name: "jun", value: 250 },
    { name: "jul", value: 420 },
    { name: "aug", value: 380 },
    { name: "sept", value: 450 },
    { name: "oct", value: 320 },
    { name: "nov", value: 280 },
    { name: "dec", value: 300 },
  ],
  2025: [
    { name: "jan", value: 400 },
    { name: "feb", value: 300 },
    { name: "mar", value: 150 },
    { name: "apr", value: 400 },
    { name: "may", value: 400 },
    { name: "jun", value: 400 },
    { name: "jul", value: 250 },
    { name: "aug", value: 300 },
    { name: "sept", value: 200 },
    { name: "oct", value: 300 },
    { name: "nov", value: 250 },
    { name: "dec", value: 500 },
  ],
};

export default function LaunchPriceChart() {
  const currentYear = new Date().getFullYear();
  const [activeFilter, setActiveFilter] = useState("1Y");
  const [selectedYear, setSelectedYear] = useState(currentYear);

  // Get data for selected year
  const yearlyData = dataByYear[selectedYear] || [];

  // Apply filter (1M, 6M, 1Y)
  let chartData = yearlyData;
  if (activeFilter === "1M") chartData = yearlyData.slice(-1);
  else if (activeFilter === "6M") chartData = yearlyData.slice(-6);

  return (
    <div className="bg-black w-full flex items-center justify-center">
      {/* Outer Gold Border */}
      <div className="border border-[#FFA100] rounded-xl p-2 w-full max-w-full">
        <div className="bg-black rounded-xl p-2">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[#FFA100] font-semibold text-lg">
              Launch Price $0.002
            </h3>
          </div>

          {/* Chart Container */}
          <div className="border border-[#FFA100] rounded-xl p-4">
            {/* Filters */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              {["1M", "6M", "1Y"].map((btn) => (
                <button
                  key={btn}
                  onClick={() => setActiveFilter(btn)}
                  className={`${
                    activeFilter === btn
                      ? "opacity-100 border border-[#FFA100]"
                      : "opacity-80"
                  } bg-[linear-gradient(180deg,#FFA100_0%,#FFE488_44%,#F89D00_100%)]
                  text-black text-xs font-semibold px-3 py-[3px] rounded-md hover:opacity-100 transition`}
                >
                  {btn}
                </button>
              ))}

              {/* Year Dropdown */}
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                className="bg-[linear-gradient(180deg,#FFA100_0%,#FFE488_44%,#F89D00_100%)]
                text-black text-xs font-semibold px-3 py-[3px] rounded-md outline-none hover:opacity-90 transition"
              >
                {Object.keys(dataByYear)
                  .sort((a, b) => b - a)
                  .map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
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
                    <linearGradient
                      id="goldGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
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
                    animationDuration={800}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
