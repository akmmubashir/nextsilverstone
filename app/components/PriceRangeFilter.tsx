"use client";
import React, { useState } from "react";
type Props = {};
const PriceRangeFilter = ({}) => {
  const [sliderValue, setSliderValue] = useState(5000);

  const handleSliderChange = (event: any) => {
    setSliderValue(event.target.value);
  };

  const sliderTrackPercentage = ((sliderValue - 5000) / (800000 - 5000)) * 100;

  const sliderStyles = {
    background: `linear-gradient(to right, #000000 0%, #000000 ${
      ((sliderValue - 5000) / (800000 - 5000)) * 100
    }%, #d5d5d5 ${
      ((sliderValue - 5000) / (800000 - 5000)) * 100
    }%, #d5d5d5 100%)`,
  };

  return (
    <div>
      <style>
        {`
                #labels-range-input::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    background: #fff; /* Red color */
                    border: 4px solid black;
                    cursor: pointer;
                }
                #labels-range-input::-moz-range-thumb {
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    background: #fff; /* Red color */
                    border: 4px solid black;
                    cursor: pointer;
                }
                `}
      </style>

      <p className="text-[16px] font-[500]">
        <span className="text-[#6b6b6b]">AED</span> {sliderValue}
      </p>
      <input
        id="labels-range-input"
        type="range"
        value={sliderValue}
        min="5000"
        max="800000"
        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
        style={sliderStyles}
        onChange={handleSliderChange}
      />
      <p className="text-end text-[18px] font-[500]">
        <span className="text-[#6b6b6b]">AED</span> 800000
      </p>
    </div>
  );
};

export default PriceRangeFilter;
