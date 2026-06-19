import React from "react";

const Card = ({ GoBack, shoesData }) => {
  return (
    // 1. Main Container: Mobile par column, lg par row (side-by-side). Width screen ke hisaab se badhegi.
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch bg-gray-800 border border-gray-700 p-5 sm:p-6 md:p-8 rounded-3xl shadow-2xl w-[90%] max-w-sm md:max-w-md lg:max-w-4xl xl:max-w-5xl mx-auto transition-all duration-300">
      {/* 2. Image Section: lg screen par ye left side ka 50% hissa lega */}
      <div className="w-full lg:w-1/2 h-56 md:h-72 lg:h-auto min-h-14rem lg:min-h-24rem bg-white rounded-2xl overflow-hidden mb-6 lg:mb-0 border border-gray-600 shadow-inner flex-shrink-0">
        <img
          src={shoesData.image}
          alt={shoesData.productName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 3. Content Section: lg screen par ye right side ka 50% hissa lega */}
      <div className="flex flex-col justify-between w-full lg:w-1/2 lg:pl-10">
        {/* Title & Description */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 truncate w-full text-center lg:text-left mb-2">
            {shoesData.productName}
          </h2>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg mb-6 text-center lg:text-left">
            Great Choice! Do you want to proceed to checkout?
          </p>

          {/* Details Box: Badi screen par text bhi bada hoga */}
          <div className="flex flex-col w-full bg-gray-700 p-5 md:p-6 rounded-2xl mb-8 border border-gray-600 shadow-sm">
            <p className="text-white font-semibold truncate w-full text-base md:text-lg lg:text-xl">
              Title: {shoesData.productName}
            </p>
            <p className="text-green-400 font-bold w-full mt-2 text-xl md:text-2xl lg:text-3xl">
              Price: ₹{shoesData.price}
            </p>
          </div>
        </div>

        {/* 4. Buttons: Badi screen par buttons thode bade aur click karne me aasan honge */}
        <div className="flex w-full gap-4 md:gap-5">
          <button
            className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:text-gray-400 py-3 md:py-4 lg:py-5 rounded-xl text-white font-bold text-lg md:text-xl transition-colors shadow-lg"
            disabled={true}
          >
            Buy Now
          </button>

          <button
            onClick={GoBack}
            className="flex-1 bg-gray-600 hover:bg-gray-500 py-3 md:py-4 lg:py-5 rounded-xl text-white font-bold text-lg md:text-xl transition-colors shadow-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
