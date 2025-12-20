import React, { useState, useRef, useEffect } from 'react';
import { Pause, Play } from 'lucide-react';
import { videos } from './videos';

const VideoDisplay = ({
  id,
  autoPlay = true,
  loop = true,
  muted = true,
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const videoRef = useRef(null);

  const videoData = videos.find(v => v.id === id);

  useEffect(() => {
    setIsPlaying(autoPlay);
  }, [autoPlay, id]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!videoData) {
    return <div className={className}>Video not found for ID: {id}</div>;
  }

  return (
    <div className={`relative w-full overflow-hidden group ${className}`}>
      <video
        ref={videoRef}
        src={videoData.src}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        className="w-full max-h-full h-250 py-10 object-cover rounded-lg"
      />
      <div className="absolute bottom-20 left-10 z-10">
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
