import Logo from "../assets/Common/logo.webp";
import Image from "next/image";
import Navigation from "./Navigation";

type Props = {};

const Navbar = ({}) => {
  return (
    <div className="bg-white fixed flex flex-col justify-center w-full right-0 top-0 z-20 transition-transform">
      <div className="bg-[#1a1a1a] flex p-[10px] items-center max-sm:hidden">
        <div>
          <a
            href="mailto:test@gmail.com"
            className="text-[18px] font-[500] me-[20px]"
          >
            test@gmail.com
          </a>
          <a href="tel:+971566797822" className="text-[18px] font-[500]">
            +971 566 797822
          </a>
        </div>
        <div className="ms-auto">
          <a href="tel:+971566797822" className="text-[18px] font-[500]">
            Support
          </a>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Navbar;
