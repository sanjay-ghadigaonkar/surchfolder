import React, { useState } from "react";
import Card from "./Card";

const SearchFilter = () => {
  //stats
  const [searchTerm, setSearchTerm] = useState("");
  const [showList, setShowList] = useState(false);
  const [selectShoes, setSelectShoes] = useState(null);

  //shoes details
  const shoesData = [
    {
      id: 1,
      productName: "Nike Air Maxx Pro",
      price: 5500,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    },
    {
      id: 2,
      productName: "Adidas Ultraboost",
      price: 7200,
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
    },
    {
      id: 3,
      productName: "Puma Run.. Shoes",
      price: 3400,
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80",
    },
    {
      id: 4,
      productName: "Reebok classic..",
      price: 4100,
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
    },
    {
      id: 5,
      productName: "Reebook Shoes",
      price: 6000,
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
    },
    {
      id: 6,
      productName: "Vans Old Skool",
      price: 4500,
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80",
    },
  ];
  //filter shoes to input search
  const filterdItems = shoesData.filter((shoe) =>
    shoe.productName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearch = () => {
    if (searchTerm === "") return; // input is emty so kuch nahi karna hai

    const matchShoes = shoesData.find(
      (shoe) =>
        shoe.productName.toLowerCase().includes(searchTerm.toLowerCase()), //search shoes for match text
    );

    if (matchShoes) {
      setSelectShoes(matchShoes);
      setSearchTerm("");
    } else {
      alert(" No Shoe Found For This Text ");
    }
  };

  return (
    <div className="flex flex-col   items-center w-auto h-screen bg-gray-900 text-white p-5">
      {/* Search Input Bar */}
      <div className=" my-10 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5 text-center">
          👟 Shoe Finder
        </h1>

        {selectShoes != null ? (
          <Card shoesData={selectShoes} GoBack={() => setSelectShoes(null)} />
        ) : (
          <div>
            {/* Search Input Bar with Icon */}
            <div className="flex items-center w-full max-w-md mx-auto mb-6 relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleSearch()
                } /* Enter dabane par search hoga */
                placeholder="Search your favorite shoe..."
                className="min-w-full border  w-80 md:w-160 lg:w-180 xl:190 border-gray-600 p-3 pr-12 rounded-2xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 shadow-md"
              />

              {/* Search Icon Button */}
              <button
                onClick={handleSearch}
                className="absolute right-4 text-xl text-gray-400 hover:text-white transition-colors"
                title="Search"
              >
                🔍
              </button>
            </div>
            {searchTerm.length > 0 && (
              <div className="border p-4 rounded-xl  bg-gray-800 w-80 md:w-160 lg:w-180 xl:190">
                <p className="text-white-400 mb-2 text-sm px-2 break-all">
                  {searchTerm}
                </p>
                <ul>
                  {filterdItems.length > 0 ? (
                    filterdItems.map((item) => (
                      <li
                        onClick={() => setSelectShoes(item)}
                        key={item.id}
                        className="p-2 cursor-pointer truncate text-col text-left hover:text-blue-400  border-gray-600 last:border-none transition-colors "
                      >
                        {item.productName}
                        {/* list box yaha sare box dikhenge */}
                      </li>
                    ))
                  ) : (
                    <li className=" w-80 md:w-160 lg:w-180 xl:190 p-2 text-red-400 font-semibold text-center    text-cente">
                      No Shoes Found
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
