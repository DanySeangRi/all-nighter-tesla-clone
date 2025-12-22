import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

// Asset Imports
import slide1Desktop from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-1-Desktop.png";
import slide1Mobile from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-1-Mobile.png";
import slide2Desktop from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-2-Desktop.png";
import slide2Mobile from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-2-Mobile.png";
import slide3Desktop from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-Warranty-Desktop.avif";
import slide3Mobile from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-Warranty-Mobile.avif";
import slide4Desktop from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-4-Desktop.png";
import slide4Mobile from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-4-Mobile.avif";
import slide5Desktop from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-3-Desktop.avif";
import slide5Mobile from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-3-Mobile.avif";

const cards = [
    { title: "Safety", img: { desktop: slide1Desktop, mobile: slide1Mobile } },
    { title: "Convenience", img: { desktop: slide2Desktop, mobile: slide2Mobile } },
    {
        title: "Full Self-Driving (Supervised)",
        img: {
            desktop: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Meet-Landing-Carousel-FSD-All.jpg',
            mobile: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Meet-Landing-Carousel-FSD-All.jpg'
        }
    },
    { title: "Warranties", img: { desktop: slide4Desktop, mobile: slide4Mobile } },
    { title: "Utility", img: { desktop: slide3Desktop, mobile: slide3Mobile } },
    { title: "Entertainment", img: { desktop: slide5Desktop, mobile: slide5Mobile } },
];
export default function SlideCardModelY() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef(null);

    // 1. IMPROVED: Update index based on scroll position more accurately
    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const cardElement = scrollRef.current.querySelector('[data-card]');
            if (cardElement) {
                const itemWidth = cardElement.offsetWidth + 16; // 16 is the gap-4
                const newIndex = Math.round(scrollLeft / itemWidth);
                if (newIndex !== currentIndex) {
                    setCurrentIndex(newIndex);
                }
            }
        }
    };

    // 2. FIXED: Better scroll calculation
    const scrollToIndex = (index) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const cardElement = container.querySelector('[data-card]');

            if (cardElement) {
                const gap = 16;
                const itemWidth = cardElement.offsetWidth + gap;

                // Clamp the index to prevent out-of-bounds
                const targetIndex = Math.max(0, Math.min(index, cards.length - 1));

                container.scrollTo({
                    left: targetIndex * itemWidth,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <section className="w-full px-6 py-20 md:px-20 bg-white overflow-hidden">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-semibold mb-3 tracking-tight">Meet Model Y</h2>
                <p className="text-lg text-gray-700 font-light">Electric Midsize SUV</p>
            </div>

            <div className="relative group/carousel">
                {/* Scroll Container */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

                    {cards.map((card, index) => (
                        <div
                            key={index}
                            data-card
                            className="min-w-[85%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[24%] snap-center md:snap-start"
                        >
                            <div className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[3/4] md:aspect-[4/5] bg-gray-100">
                                <picture className="w-full h-full">
                                    <source media="(max-width: 768px)" srcSet={card.img.mobile} />
                                    <img
                                        src={card.img.desktop}
                                        alt={card.title}
                                        className="max-w-full h-auto object-cover transition-transform duration-500 md:group-hover:scale-105"
                                    />
                                </picture>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
                                    <h3 className="text-white text-xl font-medium">{card.title}</h3>
                                </div>
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 hover:bg-white/50 transition-all">
                                    <Plus className="text-white" size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Buttons - Hidden if at edges */}
                <button
                    onClick={() => scrollToIndex(currentIndex - 1)}
                    className={`hidden sm:block absolute -left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-md shadow-lg z-10 transition-all hover:scale-110 ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={() => scrollToIndex(currentIndex + 1)}
                    className={`hidden sm:block absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-md shadow-lg z-10 transition-all hover:scale-110 ${currentIndex >= cards.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center items-center gap-3 mt-6">
                {cards.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollToIndex(i)}
                        className={`h-3 cursor-pointer rounded-full transition-all duration-300 ${currentIndex === i ? 'bg-black w-3' : 'bg-gray-300 w-3 hover:bg-gray-500'}`}
                    />
                ))}
            </div>
        </section>
    );
}