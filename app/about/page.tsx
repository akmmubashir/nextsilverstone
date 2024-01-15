import type { Metadata } from "next";
import React from "react";
import About from "../home/components/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Props = {};
export const metadata: Metadata = {
  metadataBase: new URL("https://testsilverstone.netlify.app"),
  title: "About TestSilverStone | Simplifying Lorem Ipsum",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus possimus neque aut, ipsam quod vero rem rerum, aliquam obcaecati sed est alias magni blanditiis excepturi voluptas corporis laudantium sequi.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About TestSilverStone | Simplifying Lorem Ipsum",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus possimus neque aut, ipsam quod vero rem rerum, aliquam obcaecati sed est alias magni blanditiis excepturi voluptas corporis laudantium sequi.",
    images: [
      "https://img.freepik.com/free-photo/white-coupe-sport-car-standing-road-front-view_114579-4005.jpg?w=1380&t=st=1705261462~exp=1705262062~hmac=53f1fe0a0e98edcca37e792a7912dee733bd5cc4f61f9438feefc75257a80985",
    ],
  },
};

const AboutPage = ({}) => {
  return (
    <div className="bg-[#1a1a1a]">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
