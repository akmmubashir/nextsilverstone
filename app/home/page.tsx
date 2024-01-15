import { Metadata } from "next";
import React from "react";
import Navbar from "../components/Navbar";
import SliderComponent from "./components/SliderComponent";
import About from "./components/About";
import Services from "./components/Services";
import Image from "next/image";
import Image3 from "../assets/common/image3.webp";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

type Props = {};

export const metadata: Metadata = {
  metadataBase: new URL("https://testsilverstone.netlify.app"),
  title: "Home TestSilverStone | Simplifying Lorem Ipsum",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus possimus neque aut, ipsam quod vero rem rerum, aliquam obcaecati sed est alias magni blanditiis excepturi voluptas corporis laudantium sequi.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Home TestSilverStone | Simplifying Lorem Ipsum",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus possimus neque aut, ipsam quod vero rem rerum, aliquam obcaecati sed est alias magni blanditiis excepturi voluptas corporis laudantium sequi.",
    images: [
      "https://img.freepik.com/free-photo/white-coupe-sport-car-standing-road-front-view_114579-4005.jpg?w=1380&t=st=1705261462~exp=1705262062~hmac=53f1fe0a0e98edcca37e792a7912dee733bd5cc4f61f9438feefc75257a80985",
    ],
  },
};
const HomePage = ({}) => {
  return (
    <div className="bg-[#1a1a1a]">
      <Navbar />
      <SliderComponent />
      <ProductList />
      <Services />
      <div>
        <Image src={Image3} alt="" className="w-full" />
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
