import React, { useState } from "react";
import Card from "./Card";

const SearchFilter = () => {
  // 1. Yahan search text ke liye state banao
  const [searchTerm, setSearchTerm] = useState("");
  const [showList, setShowList] = useState(false);
  const [selectShoes, setSelectShoes] = useState(null);

  // Hamara Main Data (Original Array)
  const itemsList = [
    "Nike Air Max",
    "nike",
    "puma",
    "Adidas UltraBoost",
    "Puma Running Shoes",
    "Reebok Classic",
    "Jordan Retro",
    "Vans Old Skool",
  ];
  const filterdItems = itemsList.filter((shoe) =>
    shoe.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="flex flex-col   items-center w-auto h-screen bg-gray-900 text-white p-5">
      {/* Search Input Bar */}
      <div className=" my-10 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5 text-center">
          👟 Shoe Finder
        </h1>

        {selectShoes != null ? (
          <Card shoeName={selectShoes} GoBack={() => setSelectShoes(null)} />
        ) : (
          <div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search your favorite shoe..."
              className="border-2 border-gray-600 w-80 md:w-160 lg:w-180 xl:190 p-2 rounded-2xl bg-gray-800 text-white placeholder-gray-400 mb-6 focus:outline-none focus:border-blue-500 overflow-hidden"
              // 2. Yahan value aur onChange set karo
            />
            {searchTerm.length > 0 && (
              <div className="border p-4 rounded-xl  bg-gray-800 w-80 md:w-160 lg:w-180 xl:190">
                <p className="text-white-400 mb-2 text-sm px-2 break-all">
                  {searchTerm}
                </p>
                <ul>
                  {/* abhi ke liye sirf demo ke liye first shoe ka dekhenge
        <li>{itemsList[0]}</li> */}

                  {filterdItems.length > 0 ? (
                    filterdItems.map((item, index) => (
                      <li
                        onClick={() => setSelectShoes(item)}
                        key={index}
                        className="p-2 cursor-pointer truncate text-col text-left hover:text-blue-400  border-gray-600 last:border-none transition-colors "
                      >
                        {item} {/* list box yaha sare box dikhenge */}
                      </li>
                    ))
                  ) : (
                    <li className=" w-80 md:w-160 lg:w-180 xl:190 p-2 text-red-400 font-semibold text-center    text-cente">
                      no shoe found
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
