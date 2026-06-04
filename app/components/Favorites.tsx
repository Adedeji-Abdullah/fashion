import React from "react";
import Favorites2 from "./Sub/Favorites2";

const Favorites = () => {
  return (
    <>
      <div className="text-center mt-32 mb-12">
        <p className="text-3xl">Everlane Favorites</p>
        <p className="text-xs py-3">
          Beautifully Functional, Purposefully Designed. Consciously Crafted
        </p>
      </div>
      <div id="courosel">
      <div id="group" aria-hidden className="mx-56 flex align-middle justify-center gap-4">
         <div><img id="card" src='/person1.jpg' style={{ maxWidth: '270px', height: '350px' }} alt='' /> <p className="underline pl-4">top</p></div>
          <div><img id="card" src='/person2.jpg' style={{ maxWidth: '270px', height: '350px' }} alt='' /> <p className="underline pl-4">fashioned top</p></div>
          <div><img id="card" src='/person3.jpg' style={{ maxWidth: '270px', height: '350px' }} alt='' /> <p className="underline pl-4">sweater</p></div>
          <div><img id="card" src='/person4.jpg' style={{ maxWidth: '270px', height: '350px' }} alt='' /> <p className="underline pl-4">Coat</p></div>
          <div><img id="card" src='/person5.jpg' style={{ maxWidth: '270px', height: '350px' }} alt='' /> <p className="underline pl-4">top</p></div>
          <div><img id="card" src='/person7.jpg' style={{ maxWidth: '270px', height: '350px' }} alt='' /> <p className="underline pl-4">sweater</p></div>
      </div>
      </div>
      <div className="mx-auto text-center mb-8">
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
