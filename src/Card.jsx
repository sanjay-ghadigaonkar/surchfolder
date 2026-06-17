import React from "react";

const Card = ({ shoeName, GoBack }) => {
  return (
    <div className=" items-center h-100 md:h-160 lg:h-180 xl:h-190  w-80 md:w-160 lg:w-180 xl:w-190 border  flexborder-green-500 p-8 rounded-xl bg-gray-800 text-center shadow-lg ">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4 "> {shoeName}</h2>
      <p className="text-gray-300 mb-6 ">
        Great Choice Do You want To Procces to chake out
      </p>
      <div className="flex justify-center items-center gap-4">
        <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl text-white font-bold">
          Buy Now
        </button>

        {/* back btn */}

        <button
          onClick={GoBack}
          className=" bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-xl text-white font-bold"
        >
          back
        </button>
      </div>
    </div>
  );
};

export default Card;
