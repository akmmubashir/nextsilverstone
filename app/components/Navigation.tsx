"use client";
import Image from "next/image";
import React from "react";
import Logo from "../assets/common/logo.webp";
import { useRouter } from "next/navigation";

type Props = {};

const Navigation = (props: Props) => {
  const router = useRouter();
  const data = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    { id: 2, title: "Cars", link: "/" },
    { id: 3, title: "Booking", link: "/" },
    { id: 4, title: "Features", link: "/" },
    { id: 5, title: "Contact", link: "/" },
  ];
  return (
    <div className="bg-white flex px-[20px] items-center">
      <button onClick={() => router.push("/")}>
        <Image src={Logo} alt="" className="h-[100px] max-sm:h-[60px] w-auto" />
      </button>
      <div className="ms-auto flex max-sm:hidden">
        {data.map((item) => (
          <button
            onClick={() => router.push(item?.link)}
            key={item?.id}
            className="text-[20px] text-[#000] font-[500] me-[20px]"
          >
            {item?.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
