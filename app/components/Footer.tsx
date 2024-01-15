import React from "react";
import Logo from "../assets/common/logo.webp";
import Instagram from "../assets/icons/instagram.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import Whatsapp from "../assets/icons/whatsapp.svg";
import Facebook from "../assets/icons/facebook.svg";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  const social = [
    { id: 1, icon: Facebook, link: "" },
    { id: 2, icon: Instagram, link: "" },
    { id: 3, icon: Whatsapp, link: "" },
    { id: 4, icon: Linkedin, link: "" },
  ];
  const quickLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/" },
    { id: 3, title: "Cars", link: "/" },
    { id: 4, title: "Features", link: "/" },
  ];
  const reachUs = [
    { id: 1, title: "Support", link: "/" },
    { id: 2, title: "Privacy Policy", link: "/" },
    { id: 3, title: "Subscription", link: "/" },
    { id: 4, title: "Terms & Conditions", link: "/" },
  ];
  return (
    <div className="">
      <div className="bg-white grid grid-cols-12 mt-[60px] max-sm:mt-[40px] p-[80px_80px_40px_80px] max-sm:p-[40px_20px_30px_20px]">
        <div className="col-span-4 max-2xl:col-span-3 max-sm:col-span-12">
          <Image
            src={Logo}
            alt="Logo"
            className="h-[120px] max-sm:h-[100px] w-auto"
          />
          <div className="mt-[20px] flex max-sm:mt-[10px]">
            {social?.map((item) => (
              <a
                href={item?.link}
                key={item?.id}
                target="_blank"
                className="bg-[#737373] hover:bg-[#1A1A1A] w-[35px] h-[35px] flex justify-center items-center rounded-[10px] me-[10px]"
              >
                <Image src={item?.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-2 max-2xl:col-span-3 max-sm:col-span-12 max-sm:mt-[30px] sm:hidden">
          <h6 className="text-[#1A1A1A] text-[20px] max-sm:text-[18px] font-[700] font-Mont mb-[16px] max-sm:mb-[10px]">
            About Us
          </h6>
          <p className="text-[18px] max-sm:text-[16px] font-[500] font-Popp text-[#1A1A1A]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            commodi labore totam nesciunt dolor cumque, iure consequatur autem
            minima iusto, at expedita ipsum facere dolore nam. Quas unde
            voluptates ipsam.
          </p>
        </div>
        <div className="col-span-3 max-2xl:col-span-3 max-sm:col-span-12 max-sm:mt-[20px]">
          <h6 className="text-[#1A1A1A] text-[20px] max-sm:text-[18px] font-[700] font-Mont mb-[16px] max-sm:mb-[10px]">
            Quick Links
          </h6>
          {quickLinks.map((item) => (
            <div className="mb-[8px] max-sm:mb-[5px]" key={item.id}>
              <a
                href={item?.link}
                key={item?.id}
                className="text-[18px] max-sm:text-[16px] font-[500] font-Popp text-[#1A1A1A]"
              >
                {item?.title}
              </a>
            </div>
          ))}
        </div>
        <div className="col-span-3 max-2xl:col-span-3 max-sm:col-span-12 max-sm:mt-[20px]">
          <h6 className="text-[#1A1A1A] text-[20px] max-sm:text-[18px] font-[700] font-Mont mb-[16px] max-sm:mb-[10px]">
            Reach Us
          </h6>
          {reachUs.map((item) => (
            <div className="mb-[8px] max-sm:mb-[5px]" key={item.id}>
              <a
                href={item?.link}
                key={item?.id}
                className="text-[18px] max-sm:text-[16px] font-[500] font-Popp text-[#1A1A1A]"
              >
                {item?.title}
              </a>
            </div>
          ))}
        </div>
        <div className="col-span-2 max-2xl:col-span-3 max-sm:col-span-12 max-sm:mt-[20px] max-sm:hidden">
          <h6 className="text-[#1A1A1A] text-[20px] font-[700] font-Mont mb-[16px] max-sm:mb-[10px]">
            About Us
          </h6>
          <p className="text-[18px] max-sm:text-[16px] font-[400] font-Popp text-[#1A1A1A]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            commodi labore totam nesciunt dolor cumque, iure consequatur autem
            minima iusto, at expedita ipsum facere dolore nam. Quas unde
            voluptates ipsam.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-[16px] max-sm:text-[14px] text-white p-[20px_10px_20px] max-sm:p-[16px_10px_10px] text-center font-Mont font-[500]">
          © 2024 Silverline. All Rights Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
