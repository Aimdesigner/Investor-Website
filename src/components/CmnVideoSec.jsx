import React from "react";
import { Play } from 'lucide-react';

const CmnVideoSec = ({ adc }) => {

    return (
        <section className="py-[70px]">
            <div className="container">

                <div className="mx-auto grid  grid-cols-1 sm:grid-cols-12 gap-15 items-start">
                    {/* Left Content */}
                    <div className="sm:col-span-5">
                        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-[30px]">
                            {adc.heading}
                        </h2>

                        <p className="text-gray-600 text-lg mb-[30px]">
                            {adc.para}
                        </p>

                        <button className="bg-black text-white font-bold py-5 px-10 rounded-full shadow-lg shadow-lg border-2 border-black hover:bg-white hover:text-black hover:border-2 hover:border-black transition">
                            {adc.btnTxt}
                        </button>
                    </div>

                    {/* Right Content */}
                    <div className="sm:col-span-7">


                        {/* Play Button */}
                        <div className="relative">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Happy family"
                                className="w-full h-[400px] rounded-lg shadow-lg"
                            />
                            <button className="absolute inset-0 flex items-center justify-center w-full h-full">
                                <span className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-105 hover:text-blue-600 transition">
                                    <Play />
                                </span>
                            </button>
                        </div>


                        {/* Transcript Link */}
                        <div className="mt-3 text-center">
                            <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                                {adc.btmBtnLink}
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CmnVideoSec;
