import Image from "next/image";
import React from "react";
import FilterIcon from "../assets/icons/filter.svg";
import PriceRangeFilter from "./PriceRangeFilter";
import LocationFilter from "./LocationFilter";
import CheckBoxFilter from "./CheckBoxFilter";
import AccordionSection from "./Accordian";
import { productData } from "../utils/data";
import Arrow from "../assets/icons/arrowDown.svg";
import Seat from "../assets/icons/user.svg";
import Auto from "../assets/icons/candle.svg";
import Power from "../assets/icons/flash.svg";

type Props = {};

const ProductList = (props: Props) => {
  return (
    <div className="bg-white text-black grid grid-cols-12  p-[100px] max-sm:p-[40px_20px] gap-x-3">
      <div className="col-span-3 max-2xl:col-span-4 max-sm:col-span-12">
        <div className="border bg-white rounded-[20px] drop-shadow-md p-[20px]">
          <div className="flex">
            <div className="flex items-center me-auto">
              <p className="text-[18px] max-sm:text-[16px] font-[500] text-black me-[10px]">
                Filter
              </p>
              <Image
                src={FilterIcon}
                alt="Filter"
                className="w-auto h-[20px]"
              />
            </div>
            <div className="">
              <button className="text-[18px] max-sm:text-[16px] font-[500]">
                Reset Filters
              </button>
            </div>
          </div>
          <AccordionSection title="Price">
            <PriceRangeFilter />
          </AccordionSection>
          <AccordionSection title="Location">
            <LocationFilter />
          </AccordionSection>
          <AccordionSection title="Category">
            <CheckBoxFilter />
          </AccordionSection>
        </div>
      </div>
      <div className="col-span-9 max-2xl:col-span-8 max-sm:col-span-12">
        <div className="max-sm:mt-[20px]">
          <form>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-black dark:text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-white  placeholder-slate-600"
                placeholder="Search Mockups, Logos..."
                required
              />
            </div>
          </form>
        </div>
        <div className="flex items-center max-sm:flex-col max-sm:items-start my-[10px]">
          <p className="text-[18px] max-sm:text-[16px] font-[600]">
            Available cars (3 results found)
          </p>
          <div className="ms-auto max-sm:ms-0 flex items-center max-sm:mt-[10px]">
            <p className="text-[18px] max-sm:text-[16px] font-[600] me-[10px] max-sm:me-[5px]">
              Sort by
            </p>
            <select
              id="countries"
              className="bg-none border-gray-300 text-gray-900 text-[16px] focus:border-none w-fit"
            >
              <option selected value="Price lowest to highest">
                Price lowest to highest
              </option>
              <option value="Price highest to lowest">
                Price highest to lowest
              </option>
              <option value="Relevence">Relevence</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 mt-[30px]">
          {productData.map((item) => (
            <div
              key={item?.id}
              className="col-span-4 max-sm:col-span-12 bg-white border rounded-[20px] overflow-hidden"
            >
              <div className="relative">
                <img src={item?.img} alt={item?.alt} className="w-auto" />
                <p className="p-[8px_14px] text-[14px] bg-blue-500 rounded-full text-white absolute top-[12px] right-[12px]">
                  Brand New
                </p>
                <div className="absolute bottom-[12px] left-[12px] flex">
                  <button className="bg-white rounded h-[30px] w-[30px] flex items-center justify-center rotate-[90deg] me-[10px]">
                    <Image src={Arrow} alt="Arrow" className="h-[5px]" />
                  </button>
                  <button className="bg-white rounded h-[30px] w-[30px] flex items-center justify-center rotate-[-90deg]">
                    <Image src={Arrow} alt="Arrow" className="h-[5px]" />
                  </button>
                </div>
              </div>
              <div className="p-[20px]">
                <p className="text-[#636363]">{item?.brand}</p>
                <h6 className="text-[22px] font-[600]">{item?.title}</h6>
                <div className="border flex items-center p-[12px] rounded-[10px] my-[20px]">
                  <div className="flex items-center">
                    <Image src={Seat} alt="Seat" className="h-[18px]" />
                    <p>Seats</p>
                  </div>
                  <div className="mx-auto flex items-center">
                    <Image src={Auto} alt="Auto" className="h-[18px]" />
                    <p>Auto</p>
                  </div>
                  <div className="flex items-center">
                    <Image src={Power} alt="Power" className="h-[18px]" />
                    <p>Petrol</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="me-auto">
                    <p className="text-[#ffc32b] text-[20px] font-[600]">
                      <span className="text-[17px] font-[500]">AED</span>
                      {item.priceRange}
                    </p>
                    <p>per month</p>
                  </div>
                  <div>
                    <button className="bg-black text-white rounded-[10px] p-[10px_20px]">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
