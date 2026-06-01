import React from "react";
import Favorites2 from "./Sub/Favorites2";

const Favorites = () => {
  return (
    <>
      <div className="text-center mt-32 mb-96">
        <p className="text-3xl">Everlane Favorites</p>
        <p className="text-xs py-3">
          Beautifully Functional, Purposefully Designed. Consciously Crafted
        </p>
      </div>
      <div className="mx-auto text-center mb-20">
        <button className="w-2 h-2 rounded-full mx-1 text-black bg-black"></button>
        <button className="w-2 h-2 rounded-full mx-1 text-black bg-black"></button>
        <button className="w-2 h-2 rounded-full mx-1 text-black bg-black"></button>
        <button className="w-2 h-2 rounded-full mx-1 text-black bg-black"></button>
      </div>
      <Favorites2 />
      
      
    </>
  );
};

export default Favorites;
