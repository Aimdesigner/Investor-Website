import React, { useRef, useState } from "react";
import { Play } from "lucide-react";

const CmnVideoSec = ({ adc }) => {

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <section className="py-[70px]">
      <div className="container px-4">

        <div className="mx-auto grid grid-cols-1 sm:grid-cols-12 gap-15 items-start">

          {/* Left Content */}
          <div className="sm:col-span-5">

            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-[30px]">
              {adc.heading}
            </h2>

            <p className="text-gray-600 text-lg mb-[30px]">
              {adc.para}
            </p>

            <button className="bg-black text-white font-bold py-5 px-10 rounded-full border-2 border-black hover:bg-white hover:text-black transition">
              {adc.btnTxt}
            </button>

          </div>

          {/* Right Content */}
          <div className="sm:col-span-7">

            <div className="relative">

              {/* Video */}
              <video
                ref={videoRef}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                poster={adc.video_thumbnail}
                controls={isPlaying}
              >
                <source src={adc.video_link} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom Play Button */}
              {!isPlaying && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center w-full h-full"
                >
                  <span className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg hover:scale-110 transition">
                    <Play className="ml-1" />
                  </span>
                </button>
              )}

            </div>

            {/* Transcript Link */}
            <div className="mt-3 text-center">
              <a
                href="#"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
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