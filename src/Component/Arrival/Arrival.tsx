import React from "react";

import Banner1 from '../../assets/Offer Card 1.png'
import Banner2 from '../../assets/Offer Card 2.png'

const Arrival = () => {
  return (
    <div className="popular-products py-35">
      <div className="container max-w-330 mx-auto">
        <h2 className="text-[36px] mb-12 font-semibold text-[#179800]">
          Arrival & Offers
        </h2>

        <div className="grid grid-cols-2 gap-6">
        <div className="offer-card-1 bg-green-800 rounded-2xl p-8">
            <img src={Banner1} alt="" />
        </div>
        <div className="offer-card-2 bg-blue-900 rounded-2xl p-8">
            <img src={Banner2} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Arrival;
