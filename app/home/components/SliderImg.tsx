"use client";
import React, { useEffect, useState } from "react";
import Slide1 from "../../assets/Slider/slide1.webp";
import Slide2 from "../../assets/Slider/slide2.webp";
import Slide3 from "../../assets/Slider/slide3.webp";
import Image from "next/image";

type Props = {};

const SliderImg = (props: Props) => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const imagesWeb = [Slide1, Slide2, Slide3];

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % imagesWeb.length);
        setFade(false);
      }, 1200);
    }, 5000);

    return () => clearInterval(timer);
  }, [imagesWeb.length]);
  return (
    <div
      style={{
        transition: "opacity 1.2s ease-in-out",
        opacity: fade ? 0 : 1,
      }}
    >
      <Image
        src={imagesWeb[current]}
        alt={`slide-${current}`}
        className="w-full"
      />
    </div>
  );
};

export default SliderImg;
