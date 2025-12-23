import React, { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import Hero from '../ui/Hero';
import { learnMoreSlide } from '../ui/heroData';
import ExploreModelY from './ExploreModelY';


export default function SlideCardModelY({ cards = [], title = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef(null);
    const isScrolling = useRef(false);
    const debounceTimer = useRef(null);

    const getItemWidth = useCallback(() => {
        if (!scrollRef.current) return 0;
        const container = scrollRef.current;
        const firstCard = container.querySelector('[data-card]');
        if (!firstCard) return 0;

        const computedStyle = window.getComputedStyle(container);
        const gap = parseInt(computedStyle.gap) || 16;
        return firstCard.offsetWidth + gap;
    }, []);

    const handleScroll = useCallback(() => {
        if (isScrolling.current) return;
        if (debounceTimer.current) clearTimeout(debounceTimer.current);

        debounceTimer.current = setTimeout(() => {
            const container = scrollRef.current;
            if (!container) return;
            const itemWidth = getItemWidth();
            if (itemWidth > 0) {
                const newIndex = Math.round(container.scrollLeft / itemWidth);
                setCurrentIndex(Math.max(0, Math.min(newIndex, cards.length - 1)));
            }
        }, 50);
    }, [cards.length, getItemWidth]);

    const scrollToIndex = useCallback((index) => {
        if (!scrollRef.current) return;
        const targetIndex = Math.max(0, Math.min(index, cards.length - 1));
        const itemWidth = getItemWidth();

        if (itemWidth > 0) {
            isScrolling.current = true;
            scrollRef.current.scrollTo({
                left: targetIndex * itemWidth,
                behavior: 'smooth'
            });
            setCurrentIndex(targetIndex);
            setTimeout(() => { isScrolling.current = false; }, 600);
        }
    }, [cards.length, getItemWidth]);

    return (

        <section className="w-full">

            <Hero data={learnMoreSlide} />

            <div className="py-12 mx-auto sm:px-6 md:px-8 lg:py-18">

                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-[40px] md:text-4xl font-semibold mb-2 ">{title.maintitle}</h2>
                    <p className="text-[24px] text-black font-medium mb-2">{title.subtitle1}</p>
                    <p className='font-normal  text-gray-700 text-[20px]'>{title.subtitle2}</p>
                </div>

                <div className="relative group/carousel">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="carousel-viewport flex overflow-x-auto snap-x snap-mandatory gap-2 lg:gap-4 pb-6 scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <style jsx>{`.carousel-viewport::-webkit-scrollbar { display: none; }`}</style>

                        {cards.map((card, index) => (
                            <div
                                key={index}
                                data-card
                                className="snap-start shrink-0"
                            >
                                <div className="relative cursor-pointer overflow-hidden rounded-xl group transition-all duration-500">

                                    <picture className="block w-84.5 h-129.5 lg:w-107 lg:h-124.5 overflow-hidden rounded-xl">
                                        <source className='max-w-177' media="(max-width: 768px)" srcSet={card.img.mobile} />
                                        <img
                                            src={card.img.desktop}
                                            alt={card.title}
                                            className="h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                            loading={index > 1 ? "lazy" : "eager"}
                                        />
                                    </picture>

                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-500 flex flex-col justify-end p-5 md:p-6">
                                        <h3 className="text-white text-[34px] font-medium leading-none mb-4">
                                            {card.title}
                                        </h3>
                                    </div>

                                    {/* Ensure the parent of this div has the "group" class */}
                                    <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-600 transition-all duration-300 group-hover:outline-1 group-hover:outline-white group-hover:outline-offset-2 cursor-pointer ">
                                        <Plus size={20} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons: Visible by default, hidden only when disabled */}
                    <button
                        onClick={() => scrollToIndex(currentIndex - 1)}
                        className={`absolute hidden md:block mx-10 left-2 md:-left-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-md shadow-lg z-10 transition-all duration-300 hover:bg-gray-100 ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
                            }`}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={() => scrollToIndex(currentIndex + 1)}
                        className={`absolute hidden sm:block mx-10 right-2 md:-right-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-md shadow-lg z-10 transition-all duration-300 hover:bg-gray-100 ${currentIndex >= cards.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'
                            }`}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center gap-1 mt-4">
                    {cards.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToIndex(i)}
                            className={`cursor-pointer h-3 w-3 rounded-full transition-all duration-300 ${currentIndex === i ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <ExploreModelY />
        </section>
    );
}