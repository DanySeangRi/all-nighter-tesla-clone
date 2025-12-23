import React, { useRef, useState, useEffect } from 'react';

const FeatureVideo = ({ src, className = 'w-full h-full object-cover' }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);

        // Try to autoplay when src changes; swallow errors (browsers may block autoplay)
        const p = video.play();
        if (p && typeof p.then === 'function') p.catch(() => {});

        return () => {
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
        };
    }, [src]);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            const p = video.play();
            if (p && typeof p.then === 'function') p.catch(() => {});
        } else {
            video.pause();
        }
    };

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
                className={className}
                src={src}
                autoPlay
                muted
                loop
                playsInline
            />
            <button onClick={togglePlay} className={buttonClasses}>
                {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" className="w-5 h-5">
                        <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" className="w-5 h-5">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                )}
            </button>
        </>
    );
};

export default FeatureVideo;
