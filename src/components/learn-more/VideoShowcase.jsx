import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const VideoShowcase = ({ videoSrc, posterSrc, layout = "full" }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const handleVideoError = () => {
    setHasError(true);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const containerClass = layout === "full" 
    ? "w-full px-12" 
    : "max-w-7xl mx-auto px-8";

  const videoClass = layout === "full"
    ? "w-full h-screen object-cover rounded-sm"
    : "w-full h-[85vh] object-cover rounded-xl shadow-2xl";

  return (
    <section className={`w-full relative ${layout === "full" ? "mb-0" : "py-12"}`}>
      <div className={containerClass}>
        <div className="relative w-full group">
          {hasError ? (
            <div className={`${videoClass} bg-gray-100 flex items-center justify-center`}>
              <div className="text-center p-8">
                <p className="text-gray-500">Video unavailable</p>
              </div>
            </div>
          ) : (
            <video
              ref={videoRef}
              className={videoClass}
              poster={posterSrc}
              muted
              loop
              playsInline
              onError={handleVideoError}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
          
          {!hasError && (
            <button
              onClick={togglePlayPause}
              className="absolute bottom-8 left-8 bg-gray-500 bg-opacity-50 hover:bg-black hover:bg-opacity-70 text-white rounded-sm p-2 transition-all duration-300 z-10 backdrop-blur-sm"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-0.5" />
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

const WhiteCardWithVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="w-full bg-white pt-16 pb-8">
      <div className="w-full h-[600px] bg-white relative shadow-sm">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Main-Hero-Desktop-LHD.jpg"
          muted
          loop
          playsInline
        >
          <source src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4" type="video/mp4" />
        </video>
        
        <button
          onClick={togglePlayPause}
          className="absolute bottom-6 left-6 bg-gray-800 bg-opacity-60 hover:bg-opacity-80 text-white rounded-md p-2.5 transition-all duration-300 z-10"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </button>
      </div>
    </div>
  );
};

const TeslaModelYShowcase = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* First full-screen video card */}
      <div className="pt-16">
        <VideoShowcase
          videoSrc="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4"
          posterSrc="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Main-Hero-Desktop-LHD.jpg"
          layout="full"
        />
      </div>
      
      {/* White card with video */}
      <WhiteCardWithVideo />
      
      {/* Third video card */}
      <VideoShowcase
        videoSrc="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4"
        posterSrc="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Specs-Desktop.jpg"
        layout="contained"
      />
    </div>
  );
};   

export default TeslaModelYShowcase;