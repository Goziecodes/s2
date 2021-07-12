import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
        {/* <div className="px-4 md:px-10 mx-auto w-full"> */}
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-auto px-4">
              {/* <div className="w-full lg:w-6/12 xl:w-3/12 px-4"> */}
                <CardStats
                  statSubtitle="Available Balance"
                  statTitle="&#8358;350"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-hand-holding-usd"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-auto  px-4">
                <CardStats
                  statSubtitle="Account"
                  statTitle="Investment Account"
                  accountNumber="1234567890"
                  statArrow="down"
                  statPercentColor="text-red-500"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="ATM"
                  statTitle="Inactive"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
