import React from "react";

const Everlane = () => {
  return (
    <div className="my-24 px-4 lg:px-0">
      <div className="text-center mt-4 mb-20">
        <p className="text-3xl mb-5">Everlane On You</p>
        <p>
          Share your latest lock with ©️EverlaneOnYou for a chance to be
          featured.
        </p>
        <a href="#" className="underline -mt-32 inline-block">
          Add your Photo
        </a>
      </div>
      <div className="-mt-28">
        <div className="mb-6">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-2xl font-bold text-gray-800">
            &lt;
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 justify-center">
          <div id="evalaneBG1" className="bg-cover mx-auto w-full max-w-[300px] h-[300px] relative">
            <span className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full">🛒</span>
          </div>
          <div id="evalaneBG2" className="bg-cover mx-auto hidden md:block w-full max-w-[300px] h-[300px] relative">
            <span className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full">🛒</span>
          </div>
          <div id="evalaneBG3" className="bg-cover mx-auto w-full max-w-[300px] h-[300px] relative">
            <span className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full">🛒</span>
          </div>
          <div id="evalaneBG4" className="bg-cover mx-auto w-full max-w-[300px] h-[300px] relative">
            <span className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full">🛒</span>
          </div>
          <div id="evalaneBG5" className="bg-cover mx-auto w-full max-w-[300px] h-[300px] relative">
            <span className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full">🛒</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-start text-center gap-8 my-20">
        <div className="w-full md:w-1/3">
          <img className="w-24 mx-auto" src="/3d-cube.png" alt="cube" />
          <p className="font-bold mt-4">Complimentary Shipping</p>
          <p>Enjoy free shipping on U.S. orders over <br />$100</p>
        </div>
        <div className="w-full md:w-1/3">
          <img className="w-24 mx-auto" src="/hanger.png" alt="hanger" />
          <p className="font-bold mt-4">Consciously Crafted</p>
          <p>Designed with you and the planet in <br />mind</p>
        </div>
        <div className="w-full md:w-1/3">
          <img className="w-24 mx-auto" src="/location.png" alt="location" />
          <p className="font-bold mt-4">Come Say Hi</p>
          <p>We have 11 stores across the U.S.</p>
        </div>
      </div>
    </div>
  );
};

export default Everlane;
