import React from "react";
import type { ServiceType } from "../Type/Services";
import Support from "../../assets/24-hours.png";
import FastDelivery from "../../assets/express-delivery.png";
import RealProduct from "../../assets/100-percent.png";

const Services = () => {
  const Services: ServiceType[] = [
    {
      img: Support,
      title: "24/7 Services ",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      img: FastDelivery,
      title: "Fast Delivery",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      img: RealProduct,
      title: "Healthy Products ",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
  ];
  return (
    <div className="service-section container max-w-330 mx-auto py-35">
      <h2 className="text-[36px] mb-12 font-semibold text-[#179800]">Services</h2>
      <div className="services flex gap-6 justify-between">
        {Services.map((service) => {
          const { img, title, paragraph } = service;
          return (
            <div
              className="service text-center bg-[#EFEBE3] p-6 rounded-lg"
              key={title}
            >
              <img
                className="w-35 h-35 p-3 bg-white rounded-[100%] m-auto mb-6"
                src={img}
                alt="img"
              />
              <h4 className="text-lg font-bold">{title}</h4>
              <p className="text-gray-600">{paragraph}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
