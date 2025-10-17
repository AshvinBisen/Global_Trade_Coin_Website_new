import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Yearly data sets
const dataByYear = {
  2024: [
    { name: "jan", value: 150 },
    { name: "feb", value: 220 },
    { name: "mar", value: 300 },
    { name: "apr", value: 280 },
    { name: "may", value: 320 },
    { name: "jun", value: 180 },
    { name: "jul", value: 260 },
    { name: "aug", value: 310 },
    { name: "sept", value: 240 },
    { name: "oct", value: 270 },
    { name: "nov", value: 400 },
    { name: "dec", value: 350 },
  ],
  2025: [
    { name: "jan", value: 200 },
    { name: "feb", value: 250 },
    { name: "mar", value: 340 },
    { name: "apr", value: 400 },
    { name: "may", value: 200 },
    { name: "jun", value: 120 },
    { name: "jul", value: 310 },
    { name: "aug", value: 320 },
    { name: "sept", value: 240 },
    { name: "oct", value: 180 },
    { name: "nov", value: 390 },
    { name: "dec", value: 500 },
  ],
};

export default function NetIncomeChart() {
  const currentYear = new Date().getFullYear();
  const [activeFilter, setActiveFilter] = useState("1Y");
  const [selectedYear, setSelectedYear] = useState(currentYear);

  // Get data of the selected year
  const yearlyData = dataByYear[selectedYear] || [];

  // Filter by time range
  let chartData = yearlyData;
  if (activeFilter === "1M") chartData = yearlyData.slice(-1);
  else if (activeFilter === "6M") chartData = yearlyData.slice(-6);

  return (
    <div className="bg-black text-white w-full">
      <div className="gradient-border p-4 w-full">
        <div className="inner w-full">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[#FFA100] font-semibold text-lg">
              Referrals : 0
            </h3>
          </div>

          {/* Filter Buttons */}
          <div className="border border-[#FFA100] p-4 rounded-md">
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
            <div className="w-full h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
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
                    ticks={[100, 200, 300, 400, 500]}
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
                  <Bar
                    dataKey="value"
                    fill="url(#goldGradient)"
                    radius={[6, 6, 0, 0]}
                    barSize={30}
                    animationDuration={800}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
