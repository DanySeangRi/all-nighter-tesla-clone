import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const VideoShowcase = ({ videoSrc, posterSrc, title, description, layout = "full", showText = true }) => {
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
    ? "w-full px-12 mb-0" 
    : "max-w-7xl mx-auto px-8 mt-30 mb-20";

  const videoClass = layout === "full"
    ? "w-full h-screen object-cover rounded-sm"
    : "w-full h-[85vh] object-cover rounded-xl shadow-2xl";

  return (
    <section className={`w-full relative ${layout === "full" ? "mb-0" : "py-12"}`}>
      <div className={containerClass}>
        <div className="relative w-full group">
          {hasError ? (
            <div className={`${videoClass} -black flex items-center justify-center`}>
              <div className="text-center p-8">
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
              className="absolute bottom-8 left-8 bg-gray-500 bg-opacity-50 hover:bg-black hover:bg-opacity-70 text-white rounded-sm  p-2 transition-all duration-300 z-10 backdrop-blur-sm"
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

const TeslaModelYShowcase = () => {
  const videos = [
    {
      videoSrc: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4",
      posterSrc: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Main-Hero-Desktop-LHD.jpg",
      layout: "full"
    },
    {
      videoSrc: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Test-Drive-Desktop-NA.mp4",
      posterSrc: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Specs-Desktop.jpg",
      layout: "contained",
    },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {videos.map((video, index) => (
        <VideoShowcase
          key={index}
          videoSrc={video.videoSrc}
          posterSrc={video.posterSrc}
          layout={video.layout}
          showText={video.showText !== false}
        />
      ))}
    </div>

    
  );
};

export default TeslaModelYShowcase;