import React, { useState } from "react";
import Card from "./Card";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectShoes, setSelectShoes] = useState(null);

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
      productName: "Puma Ultraboost",
      price: 7200,
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
    },
    {
      id: 3,
      productName: "Puma Run Shoes",
      price: 3400,
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80",
    },
    {
      id: 4,
      productName: "Air classic",
      price: 4100,
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
    },
    {
      id: 5,
      productName: "Reebok Shoes",
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

  const filterdItems = shoesData.filter((shoe) =>
    shoe.productName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearch = () => {
    if (searchTerm.trim() === "") return;

    const matchShoes = shoesData.find((shoe) =>
      shoe.productName.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    if (matchShoes) {
      setSelectShoes(matchShoes);
      setSearchTerm("");
    } else {
      alert("No Shoe Found For This Text");
    }
  };

  return (
    // FIX: 'h-screen' ki jagah 'min-h-screen' use kiya hai, taaki agar content lamba ho toh background color na kate.
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-900 text-white p-5">
      <div className="my-10 w-full flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
          👟 Shoe Finder
        </h1>

        {selectShoes != null ? (
          <Card shoesData={selectShoes} GoBack={() => setSelectShoes(null)} />
        ) : (
          /* Search Container: Isko ek max-width de di hai taaki input aur list dono perfectly align rahein */
          <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl relative flex flex-col items-center">
            {/* Input Wrapper */}
            <div className="flex items-center w-full mb-2 relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search your favorite shoe..."
                className="w-full border border-gray-600 p-4 pr-12 rounded-2xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 shadow-md text-lg transition-colors"
              />
              <button
                onClick={handleSearch}
                className="absolute right-4 text-2xl text-gray-400 hover:text-white transition-colors"
                title="Search"
              >
                🔍
              </button>
            </div>

            {/* Dropdown List */}
            {searchTerm.length > 0 && (
              // FIX: List ki width parent input ke barabar w-full rakhi hai
              <div className="border border-gray-600 rounded-xl bg-gray-800 w-full shadow-lg overflow-hidden z-10">
                <p className="text-gray-400 mb-2 text-xs px-4 pt-3 uppercase tracking-wider font-semibold">
                  Search Results for "{searchTerm}"
                </p>
                <ul className="max-h-60 overflow-y-auto">
                  {filterdItems.length > 0 ? (
                    filterdItems.map((item) => (
                      <li
                        onClick={() => {
                          setSelectShoes(item);
                          setSearchTerm(""); // Search clear karna
                        }}
                        key={item.id}
                        className="px-4 py-3 cursor-pointer truncate text-left hover:bg-gray-700 hover:text-blue-400 border-b border-gray-700 last:border-none transition-colors"
                      >
                        {item.productName}
                      </li>
                    ))
                  ) : (
                    <li className="p-4 text-red-400 font-semibold text-center">
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
