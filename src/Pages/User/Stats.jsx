import React from "react";
import Chart1 from "./Charts/GTCTokenBought";
import Chart2 from "./Charts/LaunchPrice";
import Chart3 from "./Charts/Referrals";
import Chart4 from "./Charts/ReferralsIncome";

const Stats = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-2 sm:p-4 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl">
        <Chart1 />
        <Chart2 />
        <Chart3 />
        <Chart4 />
      </div>
    </div>
  );
};

export default Stats;



