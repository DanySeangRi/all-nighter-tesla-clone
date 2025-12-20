import React, { useState } from 'react';

function ExploreModelY() {
    const [selected, setSelected] = useState('Standard');
    const options = ['Standard', 'Premium', 'Performance'];

    const carData = {
        Standard: {
            id: 1,
            images: {
                desktop: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Toggle-Standard-Desktop.jpg',
                mobile: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Toggle-Standard-Mobile.jpg',
            },
            specs: {
                range: { value: "321", unit: "mi", label: "Range (EPA est.)" },
                performance: { value: "5", unit: "", label: "Seats" },
                utility: { value: "74", unit: "cu ft", label: "Cargo Space" }
            },
            trimLevel: "Standard"
        },
        Premium: {
            id: 2,
            images: {
                desktop: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Toggle-Premium-Desktop.jpg",
                mobile: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Toggle-Premium-Mobile.jpg",
            },
            specs: {
                range: { value: "327", unit: "mi", label: "Range (EPA est.)" },
                performance: { value: "4.6", unit: "s", label: "0 to 60 mph" },
                utility: { value: "169", unit: "mi", label: "Charge in 15 min" }
            },
            trimLevel: "Premium",
        },
        Performance: {
            id: 3,
            images: {
                desktop: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Toggle-Performance-Desktop.png',
                mobile: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Toggle-Performance-Mobile.png',
            },
            specs: {
                range: { value: "306", unit: "mi", label: "Range (EPA est.)" },
                performance: { value: "3.3", unit: "s", label: "0 to 60 mph1" },
                utility: { value: "155", unit: "mph", label: "Top Speed" }
            },
            trimLevel: "Performance"
        }
    };

    const currentCar = carData[selected];

    return (
        <div className="relative w-full h-screen overflow-hidden bg-white">

            <div className="absolute inset-0 transition-opacity duration-700" key={selected.id}>
                <picture>
                    <source
                        media="(min-width: 768px)"
                        srcSet={currentCar.images.desktop}
                    />
                    <img
                        src={currentCar.images.mobile}
                        alt="Tesla car"
                        className="w-full h-full object-cover object-center"
                    />
                </picture>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-between h-full pt-16 pb-12 px-6">
                <div className="text-center flex flex-col items-center w-full max-w-lg">
                    <h1 className="text-[40px] md:text-5xl font-medium text-gray-900 mb-6 tracking-tight">
                        Explore Model Y
                    </h1>

                    <div className="inline-flex bg-gray-200/50 backdrop-blur-md p-1 rounded-md w-full md:w-auto">
                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() => setSelected(option)}
                                className={`flex-1 md:flex-none py-2 rounded-md md:px-10 font-medium transition-all duration-300 ${selected === option
                                    ? 'bg-white text-black shadow-sm'
                                    : 'text-gray-600 hover:text-black'
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-center w-full gap-0 xl:gap-40">
                    <div className="text-center">
                        <p className='hidden font-light text-[32px] md:text-[40px] text-gray-500 italic xl:block'>
                            <span className="not-italic font-medium text-black ">Model Y</span> {currentCar.trimLevel}
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-7 max-w-4xl">
                        {Object.values(currentCar.specs).map((spec, index, array) => (
                            <React.Fragment key={index}>
                                <div className="text-center ">
                                    <p className="text-[28px] xl:text-[34px] font-medium text-black">
                                        {spec.value}
                                        <span className="text-[14px] ml-1 font-medium">{spec.unit}</span>
                                    </p>
                                    <p className="text-[12px] text-gray-500 font-normal tracking-widest  whitespace-nowrap">
                                        {spec.label}
                                    </p>
                                </div>

                                {index < array.length - 1 && (
                                    <div className="hidden xl:block h-15 w-px mt-3 bg-gray-300 "></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreModelY;