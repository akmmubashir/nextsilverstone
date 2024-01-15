import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nextsilverstone.vercel.app"),
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
