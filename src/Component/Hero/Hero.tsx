import React from "react";

import BannerHero from "../../assets/BannerHero.png";

const Hero = () => {
  return (
    <div className="hero-section bg-[#EFEBE3]">
      <div className="content max-w-[703px] mx-auto text-center mb-14">
        <h2 className="text-6xl font-bold mb-8">
          Freshness <span className="text-[#179800]">You Can Count</span> On,
          Prices You’ll Love!
        </h2>
        <p className="">
          Shop your daily essentials at unbeatable prices. From fresh produce to
          pantry staples, we’ve got you covered every day!
        </p>
      </div>
      <img className="max-w-[1031px] mx-auto" src={BannerHero} alt="img" />
    </div>
  );
};

export default Hero;
