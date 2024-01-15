import React from "react";

type Props = {};

const CheckBoxFilter = (props: Props) => {
  const types = [
    { id: 1, title: "Convertible" },
    { id: 2, title: "Sedan" },
    { id: 3, title: "CrossOver" },
    { id: 4, title: "SUV" },
  ];

  return (
    <div>
      <style>
        {`
                .custom-checkbox:checked {
                    background-color: #4ade80; /* Tailwind green-400 */
                    border-color: #000000 !important; /* Tailwind green-500 */
                }
                .custom-checkbox:checked {
                    color: #000000 !important; /* Optional: Change text color when checked */
                }
                `}
      </style>
      {types.map((item) => (
        <div className="flex items-center mb-1" key={item.id}>
          <input
            id={`checkbox-${item.id}`}
            type="checkbox"
            value=""
            className="custom-checkbox w-5 h-5 text-black bg-gray-100 border-gray-500 rounded dark:bg-gray-700 dark:border-gray-600"
          />
          <p className="ps-[10px]">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CheckBoxFilter;
