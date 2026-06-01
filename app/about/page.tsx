import React from "react";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-white text-black">
      <section className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-gray-500">About Everlane</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-black">Radical transparency with every stitch</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-700">
                Everlane makes premium essentials with honest pricing, sustainable materials, and a mission to do business better.
                Learn how our products are made, the teams behind them, and why simple everyday pieces can be the best investments.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-black px-6 py-3 text-sm font-semibold text-white">Our Story</button>
                <button className="border border-black px-6 py-3 text-sm font-semibold">Read the Impact Report</button>
              </div>
            </div>
            <div className="overflow-hidden bg-gray-100">
              <img src="/person1.jpg" alt="About Everlane" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold">Transparent Pricing</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                See the true cost of each product and the factories behind them, with pricing details for every step.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold">Sustainable Materials</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                We use certified organic cotton, recycled cashmere, and eco-friendly packaging across our collections.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold">Better Basics</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Designed to last, made for everyday wear, and built around comfort, quality, and long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
