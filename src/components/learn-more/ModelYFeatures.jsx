import React, { useRef, useState } from 'react';

/**
 * FeatureVideo Component
 * * A reusable video component that manages its own playback state.
 * Encapsulates the video element and a custom play/pause toggle button.
 * * @param {Object} props - Component props
 * @param {string} props.src - The source URL for the video
 */
const FeatureVideo = ({ src }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    /**
     * Toggles the video play status and updates internal state.
     * Uses shorthand logic for cleaner readability.
     */
    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        // Shorthand: Play or Pause based on current state
        isPlaying ? video.pause() : video.play();
        
        // Update state
        setIsPlaying(prev => !prev);
    };

    // Common classes for the button to keep JSX clean
    const buttonClasses = `
        absolute z-10 w-[40px] h-[40px] 
        flex items-center justify-center rounded-[4px] 
        bg-[rgba(128,128,128,0.65)] backdrop-blur-none 
        transition-all duration-300 ease-[cubic-bezier(0.5,0,0,0.75)] 
        hover:bg-[rgba(128,128,128,0.85)]
        text-[#393c41]
        top-4 right-4
        min-[1440px]:top-auto min-[1440px]:right-auto 
        min-[1440px]:bottom-8 min-[1440px]:left-8
    `;

    return (
        <>
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={src}
                autoPlay
                muted
                loop
                playsInline
            />
            <button onClick={togglePlay} className={buttonClasses}>
                {isPlaying ? (
                    // Pause Icon
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" className="w-5 h-5">
                        <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                    </svg>
                ) : (
                    // Play Icon
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" className="w-5 h-5">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                )}
            </button>
        </>
    );
};

const ModelYFeatures = () => {
    
    // ==============================
    // --- ICON SET 1: INTERIOR ---
    // ==============================

    const SeatFiveIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-[#171A20]">
            <path d="M9 10C7.61929 10 6.5 8.88071 6.5 7.5C6.5 6.11929 7.61929 5 9 5C10.3807 5 11.5 6.11929 11.5 7.5C11.5 8.88071 10.3807 10 9 10ZM9 11.5C11.2091 11.5 13 9.70914 13 7.5C13 5.29086 11.2091 3.5 9 3.5C6.79086 3.5 5 5.29086 5 7.5C5 9.70914 6.79086 11.5 9 11.5ZM14.4557 18C14.1257 15.8886 11.9815 14 9 14C6.01852 14 3.87426 15.8886 3.5443 18H14.4557ZM16 18.5667C16 19.1095 15.5223 19.5 14.9795 19.5H3.0205C2.47768 19.5 2 19.1095 2 18.5667C2 15.2161 5.13401 12.5 9 12.5C12.866 12.5 16 15.2161 16 18.5667ZM17 9C16.1716 9 15.5 8.32843 15.5 7.5C15.5 6.67157 16.1716 6 17 6C17.8284 6 18.5 6.67157 18.5 7.5C18.5 8.32843 17.8284 9 17 9ZM17 10.5C18.6569 10.5 20 9.15685 20 7.5C20 5.84315 18.6569 4.5 17 4.5C15.3431 4.5 14 5.84315 14 7.5C14 9.15685 15.3431 10.5 17 10.5ZM21.1318 18H17.5832C17.2392 18 16.9551 17.7296 16.892 17.3913C16.8085 16.9436 17.1311 16.5 17.5865 16.5H20.427C20.078 14.8406 18.5127 13.5 16.5 13.5C16.1141 13.5 15.7446 13.5493 15.397 13.6407L15.3964 13.6386C15.3226 13.6629 15.2438 13.676 15.1619 13.676C14.7477 13.676 14.4119 13.3402 14.4119 12.926C14.4119 12.5559 14.68 12.2484 15.0326 12.1871C15.4998 12.0652 15.9918 12 16.5 12C19.5376 12 22 14.3281 22 17.2C22 17.6633 21.5951 18 21.1318 18Z" />
        </svg>
    );

    const LoadUpIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-[#171A20]">
            <path d="M19.42 3.359a.96.96 0 0 0-1.317-.037L13.737 7.23l-1.554-.69a20.75 20.75 0 0 0-8.427-1.79H2.75a.75.75 0 1 0 0 1.5h1.006c2.693 0 5.357.565 7.818 1.66l1.989.883a24 24 0 0 0 6.569 1.854l-.113.676a7.1 7.1 0 0 0 .231 3.296v.37a2.26 2.26 0 0 1-2.261 2.261h-1.051a4.5 4.5 0 1 0-8.876 0H2.75a.75.75 0 0 0 0 1.5h5.852A4.5 4.5 0 0 0 12.5 21c1.666 0 3.12-.905 3.898-2.25h1.59a3.76 3.76 0 0 0 3.762-3.761v-.483a.8.8 0 0 0-.04-.249 5.6 5.6 0 0 1-.211-2.688l.238-1.428a.767.767 0 0 0-.662-.887l-.58-.073a22.4 22.4 0 0 1-5.23-1.307l3.456-3.092.999.998a.75.75 0 1 0 1.06-1.06zM12.5 19.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
        </svg>
    );

    const SettleInIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-[#171A20]">
            <path d="M16.994 18.713c0-1.296-.875-1.705-3.276-1.33q-2.155.337-6.318 1.671l-.29.093a.5.5 0 0 0-.2.828Q7.923 21 9.536 21h4.99c1.734 0 2.467-.675 2.467-2.287ZM5.497 4.245C5.515 3.599 5.529 3 4.347 3c-.908 0-1.353 2.966-1.353 4.656q0 1.63 2.753 10.495a.5.5 0 0 0 .771.256l.14-.103q3.627-2.732 1.614-5.906c-.139-.22-.332-.507-.553-.836-.89-1.328-2.227-3.32-2.227-4.11V4.497l.001-.126zm7.45 1.91a.75.75 0 0 1 .137 1.052l-.335.436a1.2 1.2 0 0 0 0 1.464l.67.872a2.7 2.7 0 0 1 0 3.292l-.335.436a.75.75 0 0 1-1.189-.914l.336-.436a1.2 1.2 0 0 0 0-1.464l-.671-.872a2.7 2.7 0 0 1 0-3.292l.335-.436a.75.75 0 0 1 1.052-.137Zm3.75 0a.75.75 0 0 1 .137 1.052l-.335.436a1.2 1.2 0 0 0 0 1.464l.67.872a2.7 2.7 0 0 1 0 3.292l-.335.436a.75.75 0 0 1-1.189-.914l.336-.436a1.2 1.2 0 0 0 0-1.464l-.671-.872a2.7 2.7 0 0 1 0-3.292l.335-.436a.75.75 0 0 1 1.052-.137Zm3.887 1.052a.75.75 0 0 0-1.189-.914l-.335.436a2.7 2.7 0 0 0 0 3.292l.67.872a1.2 1.2 0 0 1 0 1.464l-.335.436a.75.75 0 0 0 1.19.914l.335-.436a2.7 2.7 0 0 0 0-3.292l-.671-.872a1.2 1.2 0 0 1 0-1.464z" />
        </svg>
    );

    // ==============================
    // --- ICON SET 2: ALWAYS CONNECTED ---
    // ==============================
    
    const RemoteIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-[#171A20]">
            <path d="M6.75 7.375c0 1.502.628 2.866 1.65 3.875H3.75c-1.105 0-2.032.918-1.69 1.968.763 2.347 2.855 4.032 5.315 4.032 1.502 0 2.866-.628 3.875-1.65v4.65c0 1.105.918 2.032 1.968 1.69 2.347-.763 4.032-2.855 4.032-5.315 0-1.502-.628-2.866-1.65-3.875h4.65c1.105 0 2.032-.918 1.69-1.968-.763-2.347-2.855-4.032-5.315-4.032-1.502 0-2.866.628-3.875 1.65V3.75c0-1.105-.918-2.032-1.968-1.69-2.347.763-4.032 2.855-4.032 5.315m4.463 3.808a.3.3 0 0 1-.032.06C9.418 10.64 8.25 9.092 8.25 7.374s1.168-3.266 2.93-3.867a.3.3 0 0 1 .033.059.5.5 0 0 1 .037.183V11a.5.5 0 0 1-.037.183m1.574 9.25a.5.5 0 0 1-.037-.183V13a.46.46 0 0 1 .069-.242c1.763.601 2.931 2.148 2.931 3.867s-1.168 3.266-2.931 3.867a.4.4 0 0 1-.032-.06Zm-9.28-7.614a.47.47 0 0 1 .242-.069H11a.46.46 0 0 1 .242.069c-.601 1.763-2.148 2.931-3.867 2.931s-3.266-1.168-3.867-2.931Zm9.31-1.606a.3.3 0 0 1-.06-.032c.602-1.763 2.15-2.931 3.868-2.931 1.719 0 3.266 1.168 3.867 2.93a.46.46 0 0 1-.242.07H13a.5.5 0 0 1-.183-.037" />
        </svg>
    );

    const PhoneKeyIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-[#171A20]">
            <path d="M15.5 2h-7A2.5 2.5 0 0 0 6 4.5v15A2.5 2.5 0 0 0 8.5 22h7a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 15.5 2m1 17.5c0 .551-.449 1-1 1h-7c-.551 0-1-.449-1-1v-15c0-.551.449-1 1-1H10V4a.5.5 0 0 0 .5.5h3A.5.5 0 0 0 14 4v-.5h1.5c.551 0 1 .449 1 1zm-4.5-9a1 1 0 1 1 0-2 1 1 0 0 1 0 2m.75 1.386a2.501 2.501 0 1 0-1.5 0V17c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5h-.75v-1h.75a.75.75 0 0 0 0-1.5h-.75z" />
        </svg>
    );

    const DogModeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-[#171A20]">
            <path d="M17.223 6.114c0 1.868-1.082 3.382-2.417 3.382s-2.417-1.514-2.417-3.383 1.082-3.382 2.417-3.382 2.417 1.514 2.417 3.383m-5.666-.028c0 1.759-1.082 3.185-2.417 3.185S6.723 7.845 6.723 6.086 7.805 2.9 9.14 2.9s2.417 1.426 2.417 3.186m7.36 7.075c1.15 0 2.083-1.2 2.083-2.678 0-1.48-.933-2.678-2.083-2.678s-2.084 1.199-2.084 2.678.933 2.678 2.084 2.678M3 10.483c0 1.478.933 2.678 2.083 2.678s2.084-1.2 2.084-2.678c0-1.48-.933-2.678-2.084-2.678C3.933 7.805 3 9.004 3 10.483M12 21c3.314 0 6-2.239 6-5s-2.686-5-6-5-6 2.239-6 5 2.686 5 6 5" />
        </svg>
    );

    const SentryModeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-[#171A20]">
            <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0 M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        </svg>
    );

    // ==============================
    // --- ICON SET 3: SAVINGS ---
    // ==============================

    const ChargingIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-[#171A20]">
            <path d="M20.5 12a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0m1.5 0c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10m-9.348-2.5c.482.132.964.373 1.435.68l.745-1.272a4.8 4.8 0 0 0-2.126-.854v-.679h-1.15v.657c-1.446.143-2.388.964-2.388 2.224v.022c0 1.336.8 1.961 2.443 2.4v1.894c-.69-.13-1.26-.46-1.884-.93l-.855 1.237a5.45 5.45 0 0 0 2.684 1.095v1.151h1.15v-1.128c1.447-.142 2.422-.975 2.422-2.235v-.021c0-1.272-.757-1.951-2.476-2.422zm-1.041 1.545c-.69-.23-.844-.482-.844-.865v-.022c0-.395.241-.68.844-.756zm1.04 1.895c.669.23.877.482.877.888v.021c0 .44-.296.702-.876.778V12.94Z" />
        </svg>
    );

    const MaintenanceIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-[#171A20]">
            <path d="m18.378 9.498-.104-.356-.709-2.422a1.5 1.5 0 0 0-1.29-.999l-1.036-.086a39 39 0 0 0-6.478 0l-1.035.086a1.5 1.5 0 0 0-1.299 1.02l-.003.012-.004.01-.933 2.66-.114.325-.243.242-.155.154-.066.066-.074.057-.716.555c-.38.295-.619.77-.619 1.294V17h17v-4.884c0-.523-.239-1-.619-1.294l-.8-.62-.084-.065-.075-.077-.286-.296zm.618-3.23.664 2.269H20l.078-.667a.4.4 0 0 1 .454-.35l.468.067.108.027c.256.064.49.197.678.384a.73.73 0 0 1 .214.517v.132a.33.33 0 0 1-.228.314l-.17.055a4 4 0 0 1-1.236.196h-.114l.548.424a3.14 3.14 0 0 1 1.2 2.48v5.398c0 .68-.057 1.358-.171 2.025-.046.268-.247.461-.48.461h-2.115c-.14 0-.263-.105-.306-.26a7 7 0 0 1-.225-1.24H5.297q-.056.632-.225 1.24c-.043.155-.167.26-.306.26H2.652c-.234 0-.435-.193-.48-.461A12 12 0 0 1 2 17.514v-5.398c0-.976.445-1.894 1.2-2.48l.548-.424h-.114a4 4 0 0 1-1.237-.196l-.169-.055A.33.33 0 0 1 2 8.647v-.132a.73.73 0 0 1 .214-.517 1.46 1.46 0 0 1 .679-.384L3 7.587l.469-.067a.4.4 0 0 1 .453.35L4 8.537h.208l.796-2.27a3 3 0 0 1 2.597-2.04l1.036-.087a40.5 40.5 0 0 1 6.726 0l1.036.086a3 3 0 0 1 2.597 2.041Z" />
            <path fill="black" d="M16.167 9.126a2.292 2.292 0 0 1-3.211 2.1l-3.699 3.698a.833.833 0 0 1-1.178-1.179l3.697-3.697a2.292 2.292 0 0 1 2.778-3.111c.14.042.17.215.068.318L13.62 8.258c-.286.286-.253.781.072 1.107s.82.357 1.107.071l.973-.973c.105-.105.281-.069.32.075q.076.281.076.588Z" />
        </svg>
    );

    const PartsIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20 text-[#171A20]">
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        </svg>
    );

    // --- FEATURE DATA LISTS ---
    const interiorFeatures = [
        { icon: <SeatFiveIcon />, title: "Seat Five", description: "Bring along your family and friends with seating for up to five people." },
        { icon: <LoadUpIcon />, title: "Load Up", description: "Fit everyone's gear in 74 cubic feet of cargo space. Fold flat the second-row seats to store bikes, camping equipment and more." },
        { icon: <SettleInIcon />, title: "Settle In", description: "Enjoy a smooth, comfortable ride with a spacious interior, heated front seats and soft-touch textiles." }
    ];

    const connectedFeatures = [
        { icon: <RemoteIcon />, title: "Remote Climate Control", description: "Adjust your cabin's temperature before your drive and step into a comfortable climate." },
        { icon: <PhoneKeyIcon />, title: "Phone Key", description: "You won't forget your keys. Unlock upon arrival with phone key or unlock and lock with Remote Access." },
        { icon: <DogModeIcon />, title: "Dog Mode", description: "Activate Dog Mode to keep your co-pilot safe and cozy while you're away." },
        { icon: <SentryModeIcon />, title: "Sentry Mode", description: "Monitor your vehicle's surroundings while unattended by activating Sentry Mode." }
    ];

    const valueFeatures = [
        { icon: <ChargingIcon />, title: "Charging Costs Less", description: "Electricity typically costs less than gas. When you plug in at home overnight, you can charge using lower-cost electricity and then start your day with plenty of range." },
        { icon: <MaintenanceIcon />, title: "Virtually No Maintenance", description: "No oil changes, tune ups or smog checks. Just refill the washer fluid and rotate your tires. Learn More" },
        { icon: <PartsIcon />, title: "Fewer Parts to Replace", description: "A gas car engine has over 1,000 moving parts—Tesla drivetrains have around 20. Fewer moving parts means fewer repairs over time and greater reliability." }
    ];

    return (
        <div className='max-w-[1440px] mx-auto bg-white overflow-hidden font-sans antialiased' style={{ fontFamily: '"Universal Sans Display", -apple-system, Arial, sans-serif' }}>

            {/* --- SECTION 1: EVERYTHING YOU WANT --- */}
            <div className='card'>
                <div className=' md:px-12'>
                    <div className='w-full h-[490px] min-[1440px]:h-[672px] bg-amber-400 relative rounded-none min-[431px]:rounded-xl overflow-hidden'>
                        {/* REPLACED WITH NEW COMPONENT */}
                        <FeatureVideo src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-Y-Standard-Everything-Mobile.mp4" />
                    </div>
                </div>

                <div className='px-6 md:px-12 xl:px-[160px] mt-10 md:mt-[40px]'>
                    <div className='max-w-7xl mx-auto'>
                        <h1 className='text-[40px] xl:text-[48px] text-[#171A20] font-semibold leading-tight'>
                            Everything You Want
                        </h1>
                        <p className='mt-4 md:mt-[16px] text-[20px] xl:text-[20px] text-[#5C5E62] font-normal max-w-3xl leading-normal'>
                            For anyone and every drive. The athletically tuned exterior features sharp lines and lean
                            surfaces, a sloped roofline and new aerodynamic alloy wheels for unparalleled
                            efficiency. You can travel farther and get there faster while using less energy.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- INTERIOR FEATURES --- */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 xl:px-[160px] mt-10 md:mt-[40px]'>
                {interiorFeatures.map((item, index) => (
                    <div key={index} className='bg-[#F4F4F4] rounded-[4px] p-8 flex flex-col items-start'>
                        <div className='mb-4'>{item.icon}</div>
                        <h3 className='text-[34px] font-bold tracking-tight text-[#171A20] mb-2'>{item.title}</h3>
                        <p className='text-[20px] font-normal leading-normal text-[#393c41]'>{item.description}</p>
                    </div>
                ))}
            </div>

            {/* --- SECTION 2: MORE THAN A CAR --- */}
            <div className='secound-card mt-24 md:mt-[144px] min-[1440px]:mt-[160px]'>
                <div className='px-0 md:px-12'>
                    <div className=' md:px-12'>
                        <div className='w-full h-[490px] min-[1440px]:h-[672px] bg-amber-400 relative rounded-none min-[431px]:rounded-xl overflow-hidden'>
                            {/* REPLACED WITH NEW COMPONENT */}
                            <FeatureVideo src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-Y-Standard-Software-Mobile.mp4" />
                        </div>
                    </div>
                </div>
                <div className='px-6 md:px-12 xl:px-[160px] mt-10 md:mt-[40px]'>
                    <div className='max-w-7xl mx-auto'>
                        <h1 className='text-[40px] xl:text-[48px] text-[#171A20] font-semibold leading-tight'>
                            More Than a Car
                        </h1>
                        <p className='mt-4 md:mt-[16px] text-[20px] xl:text-[20px] text-[#5C5E62] font-normal max-w-3xl leading-normal'>
                            Model Y Standard includes all the fun. Park at your favorite spot and play music,
                            movies and games through the center 15.4-inch touchscreen. Active Camp Mode
                            to keep your cabin comfortable while you stream, relax or spend the night...
                        </p>
                    </div>
                </div>
            </div>

            {/* --- SECTION 3: THEATER --- */}
            <div className='third-card mt-24 md:mt-[144px]'>
                <div className='px-6 md:px-12 xl:px-[160px]'>
                    <div className='max-w-[1116px] mx-auto'>
                        <div className='card'>
                            <div className=' md:px-12'>
                                <div className='w-full h-[490px] min-[1440px]:h-[672px] bg-amber-400 relative rounded-none min-[431px]:rounded-xl overflow-hidden'>
                                    {/* REPLACED WITH NEW COMPONENT */}
                                    <FeatureVideo src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-Y-Standard-Theater-Mobile-EMEA.mov" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-6 md:px-12 xl:px-[160px] mt-8 md:mt-[30px]'>
                    <div className='max-w-7xl mx-auto'>
                        <h1 className='text-[40px] xl:text-[48px] text-[#171A20] font-semibold leading-tight'>Transform Your Car Into a Theater</h1>
                        <p className='mt-4 md:mt-[20px] text-[16px] xl:text-[20px] text-[#5C5E62] font-normal max-w-3xl leading-normal'>
                            Sit back, relaxz and watch your favorite movies and shows in Tesla Theater a high-resolution center touchscreen with fully immersice aufio.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- SECTION 4 & 5: MUSIC & GAME --- */}
            <div className='card mt-20 md:mt-[80px] px-6 md:px-12 xl:px-[160px]'>
                <div className='flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-12'>
                    <div className='flex-[1.2] w-full order-1 lg:order-2 min-[1440px]:flex-none min-[1440px]:w-[774px]'>
                        <div className='w-full h-[369px] xl:h-[528px] min-[1440px]:h-[528px] bg-amber-400 relative rounded-xl overflow-hidden'>
                            <img src="/src/assets/images/learn-more/Model-Y-Standard-Music-Desktop.jpg" alt="Turn Up the Music" className="w-full h-full object-cover rounded-xl" />
                        </div>
                    </div>
                    <div className='flex-1 w-full lg:pl-12 order-2 lg:order-1'>
                        <h1 className='text-[40px] xl:text-[48px] text-[#171A20] font-semibold leading-tight'>Turn Up the  Music</h1>
                        <p className='mt-6 md:mt-[20px] text-[16px] xl:text-[20px] text-[#5C5E62] leading-normal max-w-md'>
                            Sound insulation makes your favorite song sound even better. Select Caraoke to turn your cabin into your own private karaoke lounge.
                        </p>
                    </div>
                </div>
            </div>

            <div className='card mt-20 md:mt-[80px] px-6 md:px-12 xl:px-[160px]'>
                <div className='flex flex-col lg:flex-row items-start gap-8 lg:gap-12'>
                    <div className='flex-[1.2] w-full order-1 lg:order-2 min-[1440px]:flex-none min-[1440px]:w-[774px]'>
                        <div className='w-full h-[369px] xl:h-[528px] min-[1440px]:h-[528px] bg-amber-400 relative rounded-xl overflow-hidden'>
                            <img src="/src/assets/images/learn-more/Model-Y-Standard-Game-Desktop.avif" alt="Game Anywhere" className="w-full h-full object-cover rounded-xl" />
                        </div>
                    </div>
                    <div className='flex-1 w-full order-2 lg:order-1'>
                        <h1 className='text-[40px] xl:text-[48px] text-[#171A20] font-semibold leading-tight'>Game  Anywhere</h1>
                        <p className='mt-6 md:mt-[24px] text-[20px] xl:text-[20px] text-[#5C5E62] leading-normal max-w-md'>
                            Use the touchscreen or steering wheel to play games in Tesla Arcade. Connect a controller through Bluetooth for more fun.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- SECTION 6: ALWAYS CONNECTED --- */}
            <div className='six-card mt-24 md:mt-[144px]'>
                <div className='px-0 md:px-12'>
                    <div className='card'>
                        <div className=' md:px-12'>
                            <div className='w-full h-[490px] min-[1440px]:h-[672px] bg-amber-400 relative rounded-none min-[431px]:rounded-xl overflow-hidden'>
                                {/* REPLACED WITH NEW COMPONENT */}
                                <FeatureVideo src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-Y-Standard-Connected-Mobile.mp4" />
                            </div>
                        </div>
                    </div>
                    <div className='px-6 md:px-12 xl:px-[160px] mt-10 md:mt-[40px]'>
                        <div className='max-w-7xl mx-auto'>
                            <h1 className='text-[40px] xl:text-[48px] text-[#171A20] font-semibold leading-tight'>Always Connected</h1>
                            <p className='mt-4 md:mt-[16px] text-[20px] xl:text-[20px] text-[#5C5E62] font-normal max-w-3xl leading-normal'>
                                Monitor, access and control your vehicle from anywhere remotely on your phone with the Tesla app.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='always-connect mt-10 md:mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 xl:px-[160px]'>
                    {connectedFeatures.map((item, index) => (
                        <div key={index} className='bg-[#F4F4F4] rounded-[4px] p-8 flex flex-col items-start'>
                            <div className='mb-4'>{item.icon}</div>
                            <h3 className='text-[34px] font-bold tracking-tight text-[#171A20] mb-2'>{item.title}</h3>
                            <p className='text-[20px] font-normal leading-normal text-[#393c41]'>{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* --- SECTION 7: ALL THE RANGE YOU NEED --- */}
                <div className='card mt-24 md:mt-[144px]'>
                    <div className='px-0 md:px-12'>
                        <div className='w-full h-[490px] min-[1440px]:w-[1344px] min-[1440px]:h-[580px] mx-auto bg-amber-400 relative rounded-none md:rounded-xl overflow-hidden'>
                            <img src="/src/assets/images/learn-more/Model-Y-Standard-Range-Desktop.avif" alt="All the Range You Need" className="w-full h-full object-cover rounded-none md:rounded-xl" />
                        </div>
                    </div>
                    <div className='px-6 md:px-12 xl:px-[160px] mt-10 md:mt-[40px]'>
                        <div className='max-w-7xl mx-auto'>
                            <h1 className='text-[40px] xl:text-[48px] text-[#171A20] font-semibold leading-tight'>All the Range You Need</h1>
                            <p className='mt-4 md:mt-[16px] text-[20px] xl:text-[20px] text-[#5C5E62] font-normal max-w-3xl leading-normal'>
                                Go anywhere with up to 321 miles of EPA estimated range on a single charge. Navigate on longer trips with Trip Planner and your Tesla will add Supercharging stops along the way.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='three-box mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-center xl:justify-between gap-y-12 md:gap-x-12 px-6 md:px-12 xl:px-[160px] text-black w-full font-sans'>
                    <div className='flex flex-col items-center md:items-start min-w-[200px]'>
                        <div className='flex items-baseline gap-1 mb-2'>
                            <span className='text-[48px] md:text-[48px] font-bold tracking-[-1.5px] leading-none font-medium '>15</span>
                            <span className='text-[24px] md:text-[24px] font-medium'>min</span>
                        </div>
                        <p className='text-[16px] md:text-[20px] font-semibold uppercase tracking-[1.5px] text-neutral-800 text-center md:text-left leading-tight'>Recharge up to 160 miles²</p>
                    </div>
                    <div className="hidden md:block w-[1.5px] h-[60px] bg-neutral-200"></div>
                    <div className='flex flex-col items-center md:items-start min-w-[200px]'>
                        <div className='flex items-baseline gap-1 mb-2'>
                            <span className='text-[48px] md:text-[48px] font-medium tracking-[-1.5px] leading-none'>75,000</span>
                            <span className='text-[24px] md:text-[28px] font-bold'>+</span>
                        </div>
                        <p className='text-[17px] md:text-[20px] font-semibold uppercase tracking-[1.5px] text-neutral-800 text-center md:text-left leading-tight'>Global Superchargers</p>
                    </div>
                    <div className="hidden md:block w-[1.5px] h-[60px] bg-neutral-200"></div>
                    <div className='flex flex-col items-center md:items-start min-w-[200px]'>
                        <div className='flex items-baseline gap-1 mb-2'>
                            <span className='text-[48px] md:text-[48px] font-bold tracking-[-1.5px] leading-none font-medium '>99</span>
                            <span className='text-[24px] md:text-[24px] font-medium'>%</span>
                        </div>
                        <p className='text-[17px] md:text-[20px] font-semibold uppercase tracking-[1.5px] text-neutral-800 text-center md:text-left leading-tight'>Supercharger uptime</p>
                    </div>
                </div>

                {/* --- SECTION 8: MORE AFFORDABLE --- */}
                <div className='card mt-24 md:mt-[144px]'>
                    <div className='px-0 md:px-12'>
                        <div className='w-full h-[490px] min-[1440px]:w-[1344px] min-[1440px]:h-[672px] mx-auto bg-amber-400 relative rounded-none md:rounded-xl overflow-hidden'>
                            <img src="/src/assets/images/learn-more/Model-Y-Standard-Affordable-Desktop.avif" alt="More Affordable Than a Gas Car" className="w-full h-full object-cover rounded-none md:rounded-xl" />
                        </div>
                    </div>
                    <div className='px-6 md:px-12 xl:px-[160px] mt-10 md:mt-[40px]'>
                        <div className='max-w-7xl mx-auto'>
                            <h1 className='text-[40px] xl:text-[48px] text-[#171A20] font-semibold leading-tight'>More Affordable Than a Gas Car</h1>
                            <p className='mt-4 md:mt-[16px] text-[20px] xl:text-[20px] text-[#5C5E62] font-normal max-w-3xl leading-normal'>
                                From easy and affordable charging anywhere you go to extremely low maintenance and repairs—owning Model Y Standard typically costs less than owning a comparable gas car.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- VALUE FEATURES --- */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 xl:px-[160px] mt-10 md:mt-[40px]'>
                    {valueFeatures.map((item, index) => (
                        <div key={index} className='bg-[#F4F4F4] rounded-[4px] p-8 flex flex-col items-start'>
                            <div className='mb-4'>{item.icon}</div>
                            <h3 className='text-[34px] font-bold tracking-tight text-[#171A20] mb-2'>{item.title}</h3>
                            <p className='text-[20px] font-normal leading-normal text-[#393c41]'>{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* --- SECTION 9: SAFETY --- */}
                <div className='card mt-20 md:mt-[80px] px-6 md:px-12 xl:px-[160px]'>
                    <div className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start gap-8 lg:gap-12'>
                        <div className='flex-1 w-full'>
                            <h1 className='text-[40px] xl:text-[48px] text-[#171A20] font-semibold leading-tight'>Engineered for Your <br />  Safety</h1>
                            <div className='mt-6 md:mt-[24px] text-[20px] xl:text-[20px] text-[#5C5E62] leading-normal max-w-md space-y-6'>
                                <p>Safety at Tesla is paramount. Every Tesla Behicle is desinged with impact-absorbing zones, a stiff passenger compartment to minimize intrusion and multiple airbags to help protect occupants</p>
                                <p>Active safety features can help reduce impact severity or help prevent accidents altogether. Forward Collisin Warning, Active Emergency Braking and Lane Departure Avoidance come standard.</p>
                                <p>The passive and active safety systems are engineered to make Tesla vehicles the safest in the world with a very low probability of injury.</p>
                            </div>
                        </div>
                        <div className='flex-1 w-full min-[1440px]:flex-none min-[1440px]:w-[774px]'>
                            <div className='w-full h-[369px] xl:h-[528px] min-[1440px]:h-[528px] bg-amber-400 relative rounded-xl overflow-hidden'>
                                <img src="/src/assets/images/learn-more/Model-Y-Standard-Safety-Desktop.avif" alt="Engineered for Your Safety" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ModelYFeatures;