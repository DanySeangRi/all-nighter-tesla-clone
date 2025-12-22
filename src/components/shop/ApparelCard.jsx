import React from "react";

const ApparelCard = ({ name, image }) => {
  return (
    <div className="relative h-[90vh] overflow-hidden ">
      <img src={image} alt={name} className="w-full h-full object-cover" />

      <div className="absolute bottom-14 md:bottom-20 w-full text-center">
        <h2 className="text-2xl  font-semibold text-black">{name}</h2>

        <button
          className="
          w-11/12 mx-6 
          mt-6
          md:w-auto
          md:px-6 py-2
          border-3 border-black
          rounded-sm
          font-semibold
          text-sm
          hover:text-white
          hover:bg-black
          transition-colors
          duration-300
          
        "
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ApparelCard;
