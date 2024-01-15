import React from "react";

type Props = {};

const LocationFilter = ({}) => {
  const data = [
    { id: 1, name: "Dubai", action: "" },
    { id: 2, name: "Abu Dhabi", action: "" },
    { id: 3, name: "Ajman", action: "" },
    { id: 4, name: "Sharjah", action: "" },
  ];
  return (
    <div className="grid grid-cols-12 gap-4">
      {data.map((item) => (
        <div key={item.id} className="col-span-6">
          <button className="border text-[18px] font-[500] w-full h-[46px] rounded-[6px]">
            {item.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LocationFilter;
