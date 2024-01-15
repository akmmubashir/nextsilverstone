import React from "react";
import Image1 from "../../assets/common/image1.webp";
import Image from "next/image";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="bg-black grid grid-cols-12 items-center max-sm:flex max-sm:flex-col-reverse">
      <div className="col-span-7 max-2xl:col-span-6 max-sm:col-span-12 p-[80px] max-sm:p-[20px_20px_40px_20px]">
        <h2 className="text-[#E8E8E8] text-[46px] max-sm:text-[22px] font-[400] leading-[58px] max-sm:leading-[30px]">
          Ride To Destinations <br /> With Maximum Comfort
        </h2>
        <h3 className="text-[#CB8E37] text-[24px] max-sm:text-[20px] font-[400]">
          Finest Transport
        </h3>
        <p className="text-[18px] font-[400] mt-[20px] max-sm:text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incidf. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          dolore quo perferendis totam maiores pariatur voluptates atque ipsum,
          impedit ex harum eligendi ipsa aspernatur, reprehenderit cupiditate ad
          nulla corrupti? Ducimus.
        </p>
      </div>
      <div className="col-span-5 max-2xl:col-span-6 max-sm:col-span-12 p-[10px]">
        <Image src={Image1} alt="" className="w-full" />
      </div>
    </div>
  );
};
export default Services;
