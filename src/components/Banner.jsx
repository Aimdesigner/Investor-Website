import React from 'react';
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/banner.css'
import banner1 from '../assets/home/banner1.jpeg';
import banner2 from '../assets/home/banner2.jpeg';
import banner3 from '../assets/home/banner3.png';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Play } from 'lucide-react';
import { Pause } from 'lucide-react';




const slides = [

    {
        image: banner1,
        Main_Heading: (

            <h1 className="min-[768px]:text-6xl max-[767px]:text-[39px] font-bold leading-tight mb-6 min-[768px]:text-white max-[767px]:text-black">
                Save your savings
            </h1>

        ),

        sub_text: (<p className='sub_text min-[768px]:text-2xl max-[767px]:text-[20px] md:w-[520px] min-[768px]:text-white max-[767px]:text-black mb-5'>Over a trillion dollars are earning low interest in traditional savings accounts. Make sense not cents with the Vanguard Cash Plus Account.</p>),
        small_tetx: '*Estimate for illustrative purposes only. Total dollars held by Americans in savings accounts is extrapolated based on results of Vanguard Savings Study, March 2025. For more information see vanguard.com/cashplus.',
        button: (
            <button className="bg-white text-black font-bold py-5 px-10 rounded-full shadow-lg border-2 border-white hover:border hover:bg-black hover:text-white hover:border-2 hover:border-white transition">
                See our competitive APY
            </button>
        ),
    },
    {
        image: banner2,
        Main_Heading: (

            <h1 className="min-[768px]:text-6xl max-[767px]:text-[39px] font-bold leading-tight mb-6 text-black">
                You deserve<br />investing advice<br />from a true partner
            </h1>

        ),

        sub_text: (<p className='sub_text min-[768px]:text-2xl max-[767px]:text-[20px] md:w-[520px] text-black mb-5'>Vanguard advisory services are here to help at every step—from your first investment through retirement.</p>),
        small_tetx: '',
        button: (
            <button className="bg-black text-white font-bold py-5 px-10 rounded-full shadow-lg shadow-lg border-2 border-black hover:bg-white hover:text-black hover:border-2 hover:border-black transition">
                Compare services
            </button>
        ),
    },
    {
        image: banner3,
        Main_Heading: (
            <h1 className="min-[768px]:text-6xl max-[767px]:text-[39px] font-bold leading-tight mb-6 min-[768px]:text-white max-[767px]:text-black">
                Our mid-year<br />
                economic and<br />
                market outlook is<br />
                now available
            </h1>
        ),
        sub_text: '',
        small_tetx: '',
        button: (
            <button className="bg-white text-black font-bold py-5 px-10 rounded-full shadow-lg border-2 border-white hover:border hover:bg-black hover:text-white hover:border-2 hover:border-white transition">
                Read article
            </button>
        ),
    }
];

const Banner = () => {

    const swiperRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        if (!swiperRef.current) return;
        if (isPlaying) {
            swiperRef.current.autoplay.stop();
        } else {
            swiperRef.current.autoplay.start();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <section className="relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                pagination={{
                    el: ".custom-pagination",
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} w-3 h-3 bg-white rounded-full inline-block mx-1"></span>`;
                    },
                }}
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="w-full min-[768px]:h-[600px] max-[767px]:h-auto"
            >
                {/* Slide 1 */}
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>

                        <div
                            className="w-full h-full min-[768px]:bg-cover max-[767px]:bg-contain bg-no-repeat bg-center flex items-center justify-start min-[768px]:px-12 max-[767px]:flex-col max-[767px]:px-0"
                            style={{
                                backgroundImage: window.innerWidth >= 768 ? `url(${slide.image})` : "none",
                                backgroundColor: window.innerWidth < 768 ? "#f7f7f7" : "transparent", // your mobile color
                            }}
                        >

                            <div className="container max-[767px]:px-5 max-[767px]:py-12">
                                {slide.Main_Heading}
                                {slide.sub_text ? <p className='sub_text text-2xl md:w-[520px] min-[768px]:text-white max-[767px]:text-black mb-5'>{slide.sub_text}</p> : ''}
                                <p className='small_text text-sm min-[768px]:text-white max-[767px]:text-black mb-5 md:w-[520px]'>{slide.small_tetx}</p>

                                {slide.button}



                            </div>
                            <div className="min-[768px]:hidden">
                                <img src={slide.image} alt="" className='h-[200px] object-cover' />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Add more <SwiperSlide> blocks as needed */}
            </Swiper>



            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                {/* Pause/Play Button */}
                <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center text-white"
                >
                    {isPlaying ? <Play/> : <Pause/>}
                </button>

                {/* Nav + Dots */}
                <div className="flex items-center bg-black bg-opacity-80 rounded-full px-4 py-2 gap-4">
                    {/* Prev */}
                    <button
                        onClick={() => swiperRef.current.slidePrev()}
                        className="text-white text-3xl"
                    >
                        <ChevronLeft/>
                    </button>

                    {/* Swiper Pagination will render here */}
                    {/* <div className="swiper-pagination !static flex gap-2"></div> */}
                    {/* <div className="custom-pagination flex items-center"></div> */}
                    <div className="custom-pagination flex gap-2"></div>

                    {/* Next */}
                    <button
                        onClick={() => swiperRef.current.slideNext()}
                        className="text-white text-3xl"
                    >
                        <ChevronRight/>
                    </button>
                </div>
            </div>
                
        </section>
    );
};

export default Banner;
