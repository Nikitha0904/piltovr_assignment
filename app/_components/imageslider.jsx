"use client"
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Home() {
    const slides = [
        {
            url: "https://svecw.edu.in/wp-content/uploads/2024/03/home-slider-1.webp",
        },
        {
            url: "https://svecw.edu.in/wp-content/uploads/2024/04/Paddling-to-Victory-Students-Showcase-Innovation-and-Skill-at-the-National-Concrete-Canoe-Competition.webp",
        },
        {
            url: "https://svecw.edu.in/wp-content/uploads/2024/04/Empowering-Minds-with-Technology-Students-Engage-in-Learning-Together-at-Workstations.webp",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-center font-semibold font-serif mt-16 lg:text-4xl md:text-3xl text-xl xl:hidden lg:block">Shri Vishnu Engineering College For Women</h1>

      

        <div className="max-w-[1400px] h-[700px] w-full mx-auto mt-8 px-4 xl:py-12">
            
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>

            <div className="absolute lg:top-[55%] top-[75%] transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>

            <div className="absolute lg:top-[55%] top-[75%] transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex top-4 justify-center py-2 ">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? "text-blue-500" : "text-gray-400"}`}>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}
