import React from 'react';

const ModelYFeatures = () => {
    return (
        /* The main wrapper ensures a clean 1440px layout */
        <div className='max-w-[1440px] mx-auto bg-white overflow-hidden font-sans antialiased'>
            
            {/* --- SECTION 1: EVERYTHING YOU WANT --- */}
            <div className='card'>
                <div className='w-full h-[490px] bg-amber-400 relative rounded-xl overflow-hidden '>
                    <img src="" alt="" className="w-full h-full object-cover" />
                    <div className='w-10 h-10 bg-red-500 absolute top-5 right-5'>a</div>
                </div>
                {/* Horizontal Padding: 160px for 1440px displays */}
                <div className='px-[24px] xl:px-[160px]'>
                    <h1 className='mt-[40px] text-[32px] md:text-[40px] text-[#171A20] font-semibold'>Everything You Want</h1>
                    <p className='mt-[16px] text-[18px] md:text-[20px] text-[#5C5E62] font-semibold max-w-[800px] leading-relaxed'>
                        For anyone and every drive. The athletically tuned exterior features sharp lines and lean 
                        surfaces, a sloped roofline and new aetodynamic alloy wheels for unparalledled 
                        effdiciency. You can travel farther and get there faster while using less energy
                    </p>
                </div>
            </div>

            <div className='three-box mt-[40px] grid grid-cols-1 md:grid-cols-3 gap-6 px-[24px] xl:px-[160px]'>
                <div className='h-[324px] bg-red-500 rounded-xl'></div>
                <div className='h-[324px] bg-red-500 rounded-xl'></div>
                <div className='h-[324px] bg-red-500 rounded-xl'></div>
            </div>

            {/* --- SECTION 2: MORE THAN A CAR --- */}
            <div className='secound-card mt-[144px] '>
                <div className='w-full h-[490px] bg-amber-400 relative rounded-xl '>
                    <img src="" alt="" className="w-full h-full object-cover" />
                  
                </div>
                <div className='px-[24px] xl:px-[160px]'>
                    <h1 className='mt-[40px] text-[40px] text-[#171A20] font-semibold'>More Than a Car</h1>
                    <p className='mt-[16px] text-[20px] text-[#5C5E62] font-semibold max-w-[850px] leading-relaxed'>
                        Model Y Standard includes all the fun. Park at your favorite spot and play music, movies and games through the center 15.4-inch touchscreen. Active Camp Mode To Keep your cabin comfortable while you stream, relax or spend the night...
                    </p>
                </div>
            </div>

            {/* --- SECTION 3: THEATER --- */}
            <div className='third-card mt-[144px] px-[12px] xl:px-[160px]'>
                <div className='w-full h-[490px] bg-amber-400 relative rounded-xl overflow-hidden'>
                    <img src="" alt="" />
                    <div className='w-10 h-10 bg-red-500 absolute top-5 right-5'>a</div>
                </div>
                <h1 className='mt-[30px] text-[40px] text-[#171A20] px-[24px] font-semibold'>Transfrom Your Car Into a Theater</h1>
                <p className='mt-[16px] text-[20px] text-[#5C5E62] px-[24px] font-semibold'>
                    Sit back, relaxz and watch your favorite movies and shows in Tesla Theater a high-resolution center touchscreen with fully immersice aufio.
                </p>
            </div>

            {/* --- SECTION 4 & 5: MUSIC & GAME --- */}
            
{/* Changed items-center to items-start for top alignment */}
<div className='card mt-[80px] px-[24px] xl:px-[160px] flex flex-col lg:flex-row-reverse items-start gap-12'>
    
    {/* Text Container (Now on the Right) */}
    <div className='flex-1 lg:pl-12'> 
        {/* pt-0 ensures the heading starts exactly at the top boundary */}
        <h1 className='text-[32px] md:text-[40px] text-[#171A20] font-semibold leading-tight pt-0'>
           Turn Up the <br/> Music
        </h1>
        <p className='mt-[24px] text-[17px] text-[#5C5E62] leading-relaxed max-w-[450px]'>
            Sound insulation makes your <br />
            favorite song sound even better. <br />
            Select Caraoke to turn your cabin <br />
            into your own private karaoke <br />
            lounge.
        </p>
    </div>

    {/* Image Container (Now on the Left) */}
    <div className='flex-1 w-full'>
        {/* This container top now matches the top of the "T" in Turn */}
        <div className='w-full h-[350px] xl:h-[400px] bg-amber-400 relative rounded-xl overflow-hidden'>
             <img src="" alt="" className="w-full h-full object-cover" />
             <div className='w-8 h-8 bg-red-500 absolute top-4 right-4 rounded-md flex items-center justify-center text-white text-xs font-bold'>a</div>
        </div>
    </div>
</div>
{/* Changed items-center to items-start for perfect top alignment */}
<div className='card mt-[80px] px-[24px] xl:px-[160px] flex flex-col lg:flex-row items-start gap-12'>
    
    {/* Text Section */}
    <div className='flex-1'>
        <h1 className='text-[32px] md:text-[40px] text-[#171A20] font-semibold leading-tight pt-0'>
            Game<br/> Anywhere
        </h1>
        <p className='mt-[24px] text-[17px] text-[#5C5E62] leading-relaxed max-w-[450px]'>
            Use the touchscreen or steering <br />
            wheel to play games in Tesla <br />
            Arcade. Connect a controller <br />
            through Bluetooth for more fun.
        </p>
    </div>

    {/* Image Section */}
    <div className='flex-1 w-full'>
        {/* The top of this box now aligns with the top of the "G" in Game */}
        <div className='w-full h-[350px] xl:h-[400px] bg-amber-400 relative rounded-xl overflow-hidden'>
             <img src="" alt="" className="w-full h-full object-cover" />
             <div className='w-8 h-8 bg-red-500 absolute top-4 right-4 rounded-md flex items-center justify-center text-white text-xs font-bold'>a</div>
        </div>
    </div>
</div>
            {/* Added lg:flex-row-reverse to swap positions on desktop */}
            {/* <div className='flex flex-col lg:flex-row gap-8 px-[12px] xl:px-[160px] mt-[144px]'>
                <div className='four-card flex-1'>
                    <div className='w-full h-[369px] bg-amber-400 relative rounded-xl overflow-hidden'>
                        <div className='w-10 h-10 bg-red-500 absolute top-5 right-5'>a</div>
                    </div>
                    <h1 className='mt-[30px] text-[40px] text-[#171A20] px-[24px] font-semibold'>Turn Up The Music</h1>
                    <p className='mt-[16px] text-[20px] text-[#5C5E62] px-[24px] font-semibold'>
                        Sound insulation makes your favorite sond sound even better. Select Caraok to turn your cabin into your own private karaok lounge.
                    </p>
                </div>

                <div className='five-card flex-1'>
                    <div className='w-full h-[369px] bg-amber-400 relative rounded-xl overflow-hidden'>
                        <div className='w-10 h-10 bg-red-500 absolute top-5 right-5'>a</div>
                    </div>
                    <h1 className='mt-[30px] text-[40px] text-[#171A20] px-[24px] font-semibold'>Game Anywhere</h1>
                    <p className='mt-[16px] text-[20px] text-[#5C5E62] px-[24px] font-semibold'>
                        Use the touchscreen or steering wheel to play games in Tesla Aecade. Connect a controller through Bluetooth for more fun.
                    </p>
                </div>
            </div> */}

            {/* --- SECTION 6: ALWAYS CONNECTED --- */}
            <div className='six-card mt-[144px]'>
                <div className='w-full h-[490px] bg-amber-400 relative  rounded-xl'>
                    <div className='w-10 h-10 bg-red-500 absolute top-5 right-5'>a</div>
                </div>
                <div className='px-[24px] xl:px-[160px]'>
                    <h1 className='mt-[40px] text-[40px] text-[#171A20] font-semibold'>Always Connected</h1>
                    <p className='mt-[16px] text-[20px] text-[#5C5E62] font-semibold'>
                        Monitor, access and control your begicle fromanywhere remotely on your phone with the Tesla app.
                    </p>
                </div>
            </div>

            <div className='three-box mt-[40px] grid grid-cols-2 lg:grid-cols-4 gap-6 px-[24px] xl:px-[160px]'>
                <div className='h-[324px] bg-red-500 rounded-xl'></div>
                <div className='h-[324px] bg-red-500 rounded-xl'></div>
                <div className='h-[324px] bg-red-500 rounded-xl'></div>
                <div className='h-[324px] bg-red-500 rounded-xl'></div>
            </div>

            {/* --- SECTION 7: ALL THE RANGE YOU NEED --- */}
            <div className='card mt-[144px]'>
                <div className='w-full h-[490px] bg-amber-400 relative rounded-xl'>
                    <div className='w-10 h-10 bg-red-500 absolute top-5 right-5'>a</div>
                </div>
                <div className='px-[24px] xl:px-[160px]'>
                    <h1 className='mt-[40px] text-[40px] text-[#171A20] font-semibold'>All the Range You Need</h1>
                    <p className='mt-[16px] text-[20px] text-[#5C5E62] font-semibold leading-relaxed max-w-[850px]'>
                        Go anywhere with up to 321miles of EPA estimated rangge on a single chargne. 
                        Navigate on longer trips with Trip Planner and your Tesla Will add Supercharging stops along the way.
                    </p>
                </div>
            </div>

            <div className='three-box mt-[40px] flex flex-wrap justify-center xl:justify-between gap-6 px-[24px] xl:px-[160px]'>
                <div className='w-[205px] h-[76px] bg-red-500 rounded-xl'></div>
                <div className='w-[205px] h-[76px] bg-red-500 rounded-xl'></div>
                <div className='w-[205px] h-[76px] bg-red-500 rounded-xl'></div>
                <div className='w-[205px] h-[76px] bg-red-500 rounded-xl'></div>
            </div>

            {/* --- SECTION 8: MORE AFFORDABLE --- */}
            <div className='card mt-[144px]'>
                <div className='w-full h-[490px] bg-amber-400 relative rounded-xl'>
                    <div className='w-10 h-10 bg-red-500 absolute top-5 right-5'>a</div>
                </div>
                <div className='px-[24px] xl:px-[160px]'>
                    <h1 className='mt-[40px] text-[40px] text-[#171A20] font-semibold'>More Affordable Than a Gas Car</h1>
                    <p className='mt-[16px] text-[20px] text-[#5C5E62] font-semibold leading-relaxed max-w-[850px]'>
                        From easy and affordable bgarging anywhere you go to extremely low maintenace and repairs-owning Model Y Standard typically cost less than owning a comparable gas car.
                    </p>
                </div>
            </div>

            <div className='three-box mt-[40px] grid grid-cols-1 md:grid-cols-3 gap-6 px-[24px] xl:px-[160px]'>
                <div className='h-[324px] bg-red-500 rounded-xl'></div>
                <div className='h-[324px] bg-red-500 rounded-xl'></div>
                <div className='h-[324px] bg-red-500 rounded-xl'></div>
            </div>
           {/* items-start aligns the top of the image div with the top of the text div */}
<div className='card mt-[80px] px-[24px] xl:px-[160px] flex flex-col lg:flex-row items-start gap-12'>
    
    <div className='flex-1'>
        {/* The top of this H1 is now the "anchor" for the image top */}
        <h1 className='text-[32px] md:text-[40px] text-[#171A20] font-semibold leading-tight pt-0'>
            Engineered<br/> for Your <br />
            Safety
        </h1>
        
        <div className='mt-[24px] text-[17px] text-[#5C5E62] leading-relaxed max-w-[450px]'>
            Safety at Tesla is paramount. <br />
            Every Tesla vehicle is <br />
            designed with impact-absorbing zones,<br />
            a stiff passenger compartment to <br />
            minimize intrusion and multiple airbags to<br />
            help protect occupants.

            <div className='mt-8'>
                Active safety features can <br />
                help reduce impact severity <br />
                or help prevent accidents<br />
                altogether. Forward Collision<br />
                Warning, Active Emergency<br />
                Braking and Lane Departure<br />
                Avoidance come standard.
            </div>

            <div className='mt-8'>
                The passive and active safety<br />
                systems are engineered to<br />
                make Tesla vehicles the <br />
                safest in the world with a <br />
                very low probability of injury.
            </div>
        </div>
    </div>

    <div className='flex-1 w-full'>
        {/* This div will now start at the same vertical Y-position as the "E" in Engineered */}
        <div className='w-full h-[450px] bg-amber-400 relative rounded-xl overflow-hidden'>
             <img src="" alt="" className="w-full h-full object-cover" />
        </div>
    </div>
</div>
            
            
            
        </div>
    );
};

export default ModelYFeatures;