import React from "react";
import SliderImg from "./SliderImg";

type Props = {};

const SliderComponent = (props: Props) => {
  return (
    <div className="overflow-hidden h-screen max-sm:h-auto max-sm:mt-[60px]">
      <div className="">
        <div className="relative">
          <SliderImg />
          <h1 className="absolute z-10 bottom-[35%] left-[60px] text-[70px] max-2xl:text-[60px] max-sm:text-[20px] font-[700] max-sm:bottom-[20px] max-sm:left-[20px]">
            Drive in Style:
            <br /> Luxury Car Rentals
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
