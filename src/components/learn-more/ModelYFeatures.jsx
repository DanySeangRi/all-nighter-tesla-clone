import React from 'react';

const ModelYFeatures = () => {
    return (
        /* The main wrapper ensures a clean 1440px layout */
        <div className='max-w-[1440px] mx-auto bg-white overflow-hidden font-sans antialiased'>
            
            {/* --- SECTION 1: EVERYTHING YOU WANT --- */}
            <div className='card'>
                <div className='px-6 md:px-12'>
                    <div className='w-full h-[490px] bg-amber-400 relative rounded-xl overflow-hidden'>
                        <img src="/src/assets/images/learn-more/Model-Y-Standard-Everything-Desktop-Poster.avif" alt="Everything You Want" className="w-full h-full object-cover rounded-xl" />
                        <div className='w-10 h-10 bg-red-500 absolute top-5 right-5'>a</div>
                    </div>
                </div>
                {/* Centered content with max-width and proper padding */}
                <div className='px-6 md:px-12 xl:px-[160px] mt-10 md:mt-[40px]'>
                    <div className='max-w-7xl mx-auto'>
                        <h1 className='text-[28px] xl:text-[48px] text-[#171A20] font-semibold leading-tight'>Everything You Want</h1>
                        <p className='mt-4 md:mt-[16px] text-[16px] xl:text-[18px] text-[#5C5E62] font-normal max-w-3xl leading-normal'>
                            For anyone and every drive. The athletically tuned exterior features sharp lines and lean 
                            surfaces, a sloped roofline and new aetodynamic alloy wheels for unparalledled 
                            effdiciency. You can travel farther and get there faster while using less energy
                        </p>
                    </div>
                </div>
            </div>

            <div className='three-box mt-10 md:mt-[40px] grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 xl:px-[160px]'>
                <div className='h-[324px] bg-red-500 rounded-xl overflow-hidden'><img src="/src/assets/images/learn-more/Model-Y-Exterior-Carousel-Slide-1-Desktop.png" alt="Exterior Slide 1" className="w-full h-full object-cover" /></div>
                <div className='h-[324px] bg-red-500 rounded-xl overflow-hidden'><img src="/src/assets/images/learn-more/Model-Y-Exterior-Carousel-Slide-2-Desktop.png" alt="Exterior Slide 2" className="w-full h-full object-cover" /></div>
                <div className='h-[324px] bg-red-500 rounded-xl overflow-hidden'><img src="/src/assets/images/learn-more/Model-Y-Exterior-Carousel-Slide-3-Desktop.png" alt="Exterior Slide 3" className="w-full h-full object-cover" /></div>
            </div>

            {/* --- SECTION 2: MORE THAN A CAR --- */}
            <div className='secound-card mt-24 md:mt-[144px]'>
                <div className='px-0 md:px-12'>
                    <div className='w-full h-[490px] bg-amber-400 relative rounded-none md:rounded-xl overflow-hidden'>
                        <img src="/src/assets/images/learn-more/Model-Y-Standard-Software-Desktop-Poster.avif" alt="More Than a Car" className="w-full h-full object-cover rounded-none md:rounded-xl" />
                    </div>
                </div>
                {/* Centered content with max-width and proper spacing */}
                <div className='px-6 md:px-12 xl:px-[160px] mt-10 md:mt-[40px]'>
                    <div className='max-w-7xl mx-auto'>
                        <h1 className='text-[28px] xl:text-[48px] text-[#171A20] font-semibold leading-tight'>More Than a Car</h1>
                        <p className='mt-4 md:mt-[16px] text-[16px] xl:text-[18px] text-[#5C5E62] font-normal max-w-3xl leading-normal'>
                            Model Y Standard includes all the fun. Park at your favorite spot and play music, movies and games through the center 15.4-inch touchscreen. Active Camp Mode To Keep your cabin comfortable while you stream, relax or spend the night...
                        </p>
                    </div>
                </div>
            </div>

            {/* --- SECTION 3: THEATER --- */}
            <div className='third-card mt-24 md:mt-[144px]'>
                <div className='px-6 md:px-12 xl:px-[160px]'>
                    <div className='max-w-[1116px] mx-auto'>
                        <div className='w-full h-[580px] bg-amber-400 relative rounded-xl overflow-hidden'>
                            <img src="/src/assets/images/learn-more/Model-Y-Standard-Theater-Desktop-Poster-EMEA.avif" alt="Theater" className="w-full h-full object-cover rounded-xl" />
                            <div className='w-10 h-10 bg-red-500 absolute top-5 right-5'>a</div>
                        </div>
                    </div>
                </div>
                {/* Centered content with max-width */}
                <div className='px-6 md:px-12 xl:px-[160px] mt-8 md:mt-[30px]'>
                    <div className='max-w-7xl mx-auto'>
                        <h1 className='text-[28px] xl:text-[48px] text-[#171A20] font-semibold leading-tight'>Transfrom Your Car Into a Theater</h1>
                        <p className='mt-4 md:mt-[16px] text-[16px] xl:text-[18px] text-[#5C5E62] font-normal max-w-3xl leading-normal'>
                            Sit back, relaxz and watch your favorite movies and shows in Tesla Theater a high-resolution center touchscreen with fully immersice aufio.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- SECTION 4 & 5: MUSIC & GAME --- */}
            {/* Turn Up the Music - Side by side layout */}
            <div className='card mt-20 md:mt-[80px] px-6 md:px-12 xl:px-[160px]'>
                <div className='flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-12'>
                    {/* Image Container (First on mobile, Left on desktop) - Wider than text */}
                    <div className='flex-[1.2] w-full order-1 lg:order-2'>
                        <div className='w-full h-[350px] xl:h-[400px] bg-amber-400 relative rounded-xl overflow-hidden'>
                             <img src="/src/assets/images/learn-more/Model-Y-Standard-Music-Desktop.jpg" alt="Turn Up the Music" className="w-full h-full object-cover rounded-xl" />
                             <div className='w-8 h-8 bg-red-500 absolute top-4 right-4 rounded-md flex items-center justify-center text-white text-xs font-bold'>a</div>
                        </div>
                    </div>

                    {/* Text Container (Second on mobile, Right on desktop) */}
                    <div className='flex-1 w-full lg:pl-12 order-2 lg:order-1'> 
                        <h1 className='text-[28px] xl:text-[48px] text-[#171A20] font-semibold leading-tight'>
                           Turn Up the <br/> Music
                        </h1>
                        <p className='mt-6 md:mt-[24px] text-[16px] xl:text-[18px] text-[#5C5E62] leading-normal max-w-md'>
                            Sound insulation makes your favorite song sound even better. Select Caraoke to turn your cabin into your own private karaoke lounge.
                        </p>
                    </div>
                </div>
            </div>

            {/* Game Anywhere - Side by side layout */}
            <div className='card mt-20 md:mt-[80px] px-6 md:px-12 xl:px-[160px]'>
                <div className='flex flex-col lg:flex-row items-start gap-8 lg:gap-12'>
                    {/* Image Section (First on mobile, Right on desktop) - Wider than text */}
                    <div className='flex-[1.2] w-full order-1 lg:order-2'>
                        <div className='w-full h-[350px] xl:h-[400px] bg-amber-400 relative rounded-xl overflow-hidden'>
                             <img src="/src/assets/images/learn-more/Model-Y-Standard-Game-Desktop.avif" alt="Game Anywhere" className="w-full h-full object-cover rounded-xl" />
                             <div className='w-8 h-8 bg-red-500 absolute top-4 right-4 rounded-md flex items-center justify-center text-white text-xs font-bold'>a</div>
                        </div>
                    </div>

                    {/* Text Section (Second on mobile, Left on desktop) */}
                    <div className='flex-1 w-full order-2 lg:order-1'>
                        <h1 className='text-[28px] xl:text-[48px] text-[#171A20] font-semibold leading-tight'>
                            Game<br/> Anywhere
                        </h1>
                        <p className='mt-6 md:mt-[24px] text-[16px] xl:text-[18px] text-[#5C5E62] leading-normal max-w-md'>
                            Use the touchscreen or steering wheel to play games in Tesla Arcade. Connect a controller through Bluetooth for more fun.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- SECTION 6: ALWAYS CONNECTED --- */}
            <div className='six-card mt-24 md:mt-[144px]'>
                <div className='px-0 md:px-12'>
                    <div className='w-full h-[490px] bg-amber-400 relative rounded-none md:rounded-xl overflow-hidden'>
                        <img src="/src/assets/images/learn-more/Model-Y-Standard-Connected-Desktop-Poster.avif" alt="Always Connected" className="w-full h-full object-cover rounded-none md:rounded-xl" />
                        <div className='w-10 h-10 bg-red-500 absolute top-5 right-5'>a</div>
                    </div>
                </div>
                {/* Proper spacing between image and text */}
                <div className='px-6 md:px-12 xl:px-[160px] mt-10 md:mt-[40px]'>
                    <div className='max-w-7xl mx-auto'>
                        <h1 className='text-[28px] xl:text-[48px] text-[#171A20] font-semibold leading-tight'>Always Connected</h1>
                        <p className='mt-4 md:mt-[16px] text-[16px] xl:text-[18px] text-[#5C5E62] font-normal max-w-3xl leading-normal'>
                            Monitor, access and control your begicle fromanywhere remotely on your phone with the Tesla app.
                        </p>
                    </div>
                </div>
            </div>

            <div className='three-box mt-10 md:mt-[40px] grid grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 xl:px-[160px]'>
                <div className='h-[324px] bg-red-500 rounded-xl overflow-hidden'><img src="/src/assets/images/learn-more/Model-Y-Meet-Carousel-Slide-1-Desktop.png" alt="Meet Slide 1" className="w-full h-full object-cover" /></div>
                <div className='h-[324px] bg-red-500 rounded-xl overflow-hidden'><img src="/src/assets/images/learn-more/Model-Y-Meet-Carousel-Slide-2-Desktop.png" alt="Meet Slide 2" className="w-full h-full object-cover" /></div>
                <div className='h-[324px] bg-red-500 rounded-xl overflow-hidden'><img src="/src/assets/images/learn-more/Model-Y-Meet-Carousel-Slide-3-Desktop.avif" alt="Meet Slide 3" className="w-full h-full object-cover" /></div>
                <div className='h-[324px] bg-red-500 rounded-xl overflow-hidden'><img src="/src/assets/images/learn-more/Model-Y-Meet-Carousel-Slide-4-Desktop.png" alt="Meet Slide 4" className="w-full h-full object-cover" /></div>
            </div>

            {/* --- SECTION 7: ALL THE RANGE YOU NEED --- */}
            <div className='card mt-24 md:mt-[144px]'>
                <div className='px-0 md:px-12'>
                    <div className='w-full h-[490px] bg-amber-400 relative rounded-none md:rounded-xl overflow-hidden'>
                        <img src="/src/assets/images/learn-more/Model-Y-Standard-Range-Desktop.avif" alt="All the Range You Need" className="w-full h-full object-cover rounded-none md:rounded-xl" />
                        <div className='w-10 h-10 bg-red-500 absolute top-5 right-5'>a</div>
                    </div>
                </div>
                {/* Centered content with max-width constraint */}
                <div className='px-6 md:px-12 xl:px-[160px] mt-10 md:mt-[40px]'>
                    <div className='max-w-6xl mx-auto text-center'>
                        <h1 className='text-[28px] xl:text-[48px] text-[#171A20] font-semibold leading-tight'>All the Range You Need</h1>
                        <p className='mt-4 md:mt-[16px] text-[16px] xl:text-[18px] text-[#5C5E62] font-normal max-w-2xl mx-auto leading-normal'>
                            Go anywhere with up to 321miles of EPA estimated rangge on a single chargne. 
                            Navigate on longer trips with Trip Planner and your Tesla Will add Supercharging stops along the way.
                        </p>
                    </div>
                </div>
            </div>

            <div className='three-box mt-10 md:mt-[40px] flex flex-wrap justify-center xl:justify-between gap-6 px-6 md:px-12 xl:px-[160px]'>
                <div className='w-[205px] h-[76px] bg-red-500 rounded-xl overflow-hidden'><img src="/src/assets/images/learn-more/Model-Y-2-Specs-LR-AWD-Desktop-Imperial.avif" alt="Specs 1" className="w-full h-full object-cover" /></div>
                <div className='w-[205px] h-[76px] bg-red-500 rounded-xl overflow-hidden'><img src="/src/assets/images/learn-more/Model-Y-Standard-Specs-Desktop-Imperial.avif" alt="Specs 2" className="w-full h-full object-cover" /></div>
                <div className='w-[205px] h-[76px] bg-red-500 rounded-xl overflow-hidden'><img src="/src/assets/images/learn-more/Model-Y-Performance-Specs-Desktop-US-Imperial.png" alt="Specs 3" className="w-full h-full object-cover" /></div>
                <div className='w-[205px] h-[76px] bg-red-500 rounded-xl overflow-hidden'><img src="/src/assets/images/learn-more/Model-Y-2-Specs-LR-AWD-Desktop-Imperial.avif" alt="Specs 4" className="w-full h-full object-cover" /></div>
            </div>

            {/* --- SECTION 8: MORE AFFORDABLE --- */}
            <div className='card mt-24 md:mt-[144px]'>
                <div className='px-0 md:px-12'>
                    <div className='w-full h-[490px] bg-amber-400 relative rounded-none md:rounded-xl overflow-hidden'>
                        <img src="/src/assets/images/learn-more/Model-Y-Standard-Affordable-Desktop.avif" alt="More Affordable Than a Gas Car" className="w-full h-full object-cover rounded-none md:rounded-xl" />
                        <div className='w-10 h-10 bg-red-500 absolute top-5 right-5'>a</div>
                    </div>
                </div>
                {/* Centered content with proper typography hierarchy */}
                <div className='px-6 md:px-12 xl:px-[160px] mt-10 md:mt-[40px]'>
                    <div className='max-w-6xl mx-auto text-center'>
                        <h1 className='text-[28px] xl:text-[48px] text-[#171A20] font-semibold leading-tight'>More Affordable Than a Gas Car</h1>
                        <p className='mt-4 md:mt-[16px] text-[16px] xl:text-[18px] text-[#5C5E62] font-normal max-w-2xl mx-auto leading-normal'>
                            From easy and affordable bgarging anywhere you go to extremely low maintenace and repairs-owning Model Y Standard typically cost less than owning a comparable gas car.
                        </p>
                    </div>
                </div>
            </div>

            <div className='three-box mt-10 md:mt-[40px] grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 xl:px-[160px]'>
                <div className='h-[324px] bg-red-500 rounded-xl overflow-hidden'><img src="/src/assets/images/learn-more/Model-Y-Storage-Desktop-Poster.png" alt="Storage" className="w-full h-full object-cover" /></div>
                <div className='h-[324px] bg-red-500 rounded-xl overflow-hidden'><img src="/src/assets/images/learn-more/Model-Y-Comfort-Desktop-Poster.png" alt="Comfort" className="w-full h-full object-cover" /></div>
                <div className='h-[324px] bg-red-500 rounded-xl overflow-hidden'><img src="/src/assets/images/learn-more/Model-Y-Exterior-Desktop.png" alt="Exterior" className="w-full h-full object-cover" /></div>
            </div>

            {/* --- SECTION 9: ENGINEERED FOR YOUR SAFETY --- */}
            <div className='card mt-20 md:mt-[80px] px-6 md:px-12 xl:px-[160px]'>
                <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-12'>
                    {/* Text Section */}
                    <div className='flex-1 w-full'>
                        <h1 className='text-[28px] xl:text-[48px] text-[#171A20] font-semibold leading-tight'>
                            Engineered<br/> for Your <br />
                            Safety
                        </h1>
                        
                        <div className='mt-6 md:mt-[24px] text-[16px] xl:text-[18px] text-[#5C5E62] leading-normal max-w-md space-y-6'>
                            <p>
                                Safety at Tesla is paramount. Every Tesla vehicle is designed with impact-absorbing zones, a stiff passenger compartment to minimize intrusion and multiple airbags to help protect occupants.
                            </p>

                            <p>
                                Active safety features can help reduce impact severity or help prevent accidents altogether. Forward Collision Warning, Active Emergency Braking and Lane Departure Avoidance come standard.
                            </p>

                            <p>
                                The passive and active safety systems are engineered to make Tesla vehicles the safest in the world with a very low probability of injury.
                            </p>
                        </div>
                    </div>

                    {/* Image Section - Large hero-style image */}
                    <div className='flex-1 w-full'>
                        <div className='w-full h-[450px] xl:h-[550px] bg-amber-400 relative rounded-xl overflow-hidden'>
                             <img src="/src/assets/images/learn-more/Model-Y-Standard-Safety-Desktop.avif" alt="Engineered for Your Safety" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ModelYFeatures;
