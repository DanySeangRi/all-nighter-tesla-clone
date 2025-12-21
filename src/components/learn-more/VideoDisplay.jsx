import React, { useState, useRef, useEffect } from 'react';
import { Pause, Play } from 'lucide-react';
import { videos } from './videos';

const VideoDisplay = ({
  id,
  autoPlay = true,
  loop = true,
  muted = true,
  className = "",
  height,
  buttonPositionClasses = "bottom-7 left-7", // Default for desktop
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const videoRef = useRef(null);

  const videoData = videos.find(v => v.id === id);

  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (!videoData) {
    return <div className={className}>Video not found for ID: {id}</div>;
  }

  const videoContainerClasses = `relative w-full overflow-hidden mt-20 mb-20 mx-auto group ${id === "small-card" ? 'max-w-[1116px] ' : 'max-w-[1344px]'} ${className}`;

  // Responsive button positioning: top-right for mobile (430px), bottom-left for desktop (1440px)
  const responsiveButtonClasses = "top-7 right-7 xl:bottom-7 xl:top-auto xl:right-auto xl:left-7";

  return (
    <div className={videoContainerClasses}>
      <video
        ref={videoRef}
        src={videoData.src}
        loop={loop}
        muted={muted}
        playsInline
        className={`w-full ${height} object-cover rounded-lg`}
      />
      <div className={`absolute ${responsiveButtonClasses} z-10`}>
        <button
          onClick={togglePlay}
          className="px-3 py-3 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-md border border-white/20 transition-all duration-300"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="text-white w-5 h-5 fill-white" />
          ) : (
            <Play className="text-white w-5 h-5 fill-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoDisplay;