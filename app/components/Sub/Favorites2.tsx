import React from "react";
import Link from "next/link";

const Favorites2 = () => {
  return (
    <section className="px-6 py-16 lg:px-16">
      <div className="mx-auto flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:justify-between max-w-7xl">
        <div className="flex-1">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">People Are Taking</p>
            <p className="mt-6 mb-4 text-xl">⭐⭐⭐⭐⭐</p>
            <p className="text-2xl font-semibold leading-relaxed text-gray-900">
              <span className="text-4xl align-top">“</span>
              Love this shirt! Fits perfectly and the fabric is thick without being stiff.
              <span className="text-4xl align-bottom">”</span>
            </p>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-2xl font-bold text-gray-800">
              &lt;
            </span>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-2xl font-bold text-gray-800">
              &gt;
            </span>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="w-full max-w-[540px] overflow-hidden rounded-3xl shadow-xl">
            <img src="/person7.jpg" className="w-full h-auto object-cover" alt="Customer wearing shirt" />
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="w-2 h-2 rounded-full mx-1 text-black bg-black"></button>
        <button className="w-2 h-2 rounded-full mx-1 text-black bg-black"></button>
        <button className="w-2 h-2 rounded-full mx-1 text-black bg-black"></button>
        <button className="w-2 h-2 rounded-full mx-1 text-black bg-black"></button>
      </div>
      

      <hr className="border-t border-gray-300 mt-16" />
    </section>
  );
};

export default Favorites2;
