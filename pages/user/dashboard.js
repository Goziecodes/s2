import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import Quicklinks from "components/Cards/Quicklinks.jsx";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import UserHeaderStats from "components/Headers/UserHeaderStats.js";


// layout for page

import User from "layouts/User";

export default function Dashboard() {
  return (
    <>
      <UserHeaderStats />
     <div className="px-4 md:px-10 -mt-10 pb-32">
    
      <div className="flex flex-wrap mt-4">
        <div className="w-full  mb-12 xl:mb-0 px-4">
          <Quicklinks />
        </div>
        
      </div>
     </div>
    </>
  );
}

Dashboard.layout = User;
