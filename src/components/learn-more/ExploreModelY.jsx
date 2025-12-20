import React, { useState } from 'react';

function ExploreModelY() {
    const [selected, setSelected] = useState('Standard');
    const options = ['Standard', 'Premium', 'Performance'];

    const carData = {
        Standard: {
            image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Toggle-Standard-Desktop.jpg',
            range: '260 mi',
        },
        Premium: {
            image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Toggle-Premium-Desktop.jpg',
            range: '310 mi',
        },
        Performance: {
            image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Toggle-Performance-Desktop.png',
            range: '285 mi',
        }
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            
            <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
                <img
                    src={carData[selected].image}
                    alt={selected}
                    className="w-full h-full object-cover"
                    key={selected} 
                />
            </div>

            <div className="relative z-10 flex flex-col items-center pt-20 h-full justify-between pb-20">
                
                <div className="text-center">
                    <h1 className="text-5xl font-semibold text-gray-900 mb-4">
                        Explore Model Y
                    </h1>
                    
                    <div className="flex bg-gray-200/50 backdrop-blur-md p-1 rounded-full border border-gray-300">
                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() => setSelected(option)}
                                className={`px-10 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    selected === option
                                        ? 'bg-white text-black shadow-sm'
                                        : 'text-gray-700 hover:text-black'
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex gap-12 text-black animate-fade-in">
                    <div className="text-center">
                        <p className="text-2xl font-bold">{carData[selected].range}</p>
                        <p className="text-xs uppercase tracking-widest">Range (EPA est.)</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ExploreModelY;