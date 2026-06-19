import React from "react";

const Card = ({ GoBack, shoesData }) => {
  return (
    // 1. SIZE CONTROLS: max-w-2xl (badi screen par bhi card chota rahega), p-4 (padding kam ki)
    <div className="w-[90%] max-w-2xl mx-auto bg-gray-800 border border-gray-700 p-4 sm:p-5 rounded-3xl shadow-2xl flex flex-col sm:flex-row gap-4 sm:gap-6 max-h-[85vh] overflow-y-auto">
      {/* 2. IMAGE: Iski height aur width choti kar di hai */}
      <div className="w-full sm:w-2/5 h-48 sm:h-auto sm:min-h-[220px] bg-white rounded-2xl overflow-hidden shrink-0 flex items-center justify-center">
        <img
          src={shoesData.image}
          alt={shoesData.productName}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 3. CONTENT: Text sizes chote kiye (text-xl, text-sm) */}
      <div className="flex flex-col w-full sm:w-3/5 flex-1">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 line-clamp-2">
            {shoesData.productName}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">
            Great Choice! Do you want to proceed to checkout?
          </p>

          <div className="bg-gray-700 p-3 rounded-xl border border-gray-600 shadow-sm mt-1">
            <p className="text-white font-semibold truncate text-sm">
              {shoesData.productName}
            </p>
            <p className="text-green-400 font-bold mt-1 text-lg sm:text-xl">
              ₹{shoesData.price}
            </p>
          </div>
        </div>

        {/* 4. BUTTONS: Buttons ki height aur text chota kiya */}
        <div className="flex flex-row w-full gap-3 mt-5 sm:mt-auto pt-2">
          <button
            className="w-full flex-1 bg-green-600 hover:bg-green-700 py-2.5 rounded-xl text-white font-bold text-sm sm:text-base transition-all shadow-md active:scale-95 disabled:bg-gray-600 disabled:text-gray-400"
            disabled={true}
          >
            Buy Now
          </button>
          <button
            onClick={GoBack}
            className="w-full flex-1 bg-gray-600 hover:bg-gray-500 py-2.5 rounded-xl text-white font-bold text-sm sm:text-base transition-all shadow-md active:scale-95"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
