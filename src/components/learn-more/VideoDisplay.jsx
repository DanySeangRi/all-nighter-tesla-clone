import React, { useState, useRef, useEffect } from "react";
import { Pause, Play } from "lucide-react";
import { videos } from "./learnMoreData";

const VideoDisplay = ({
  id,
  height = "h-full",
  autoPlay = false,
  loop = true,
  muted = true,
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const videoRef = useRef(null);

  const videoData = videos.find(v => v.id === id);

  useEffect(() => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.play() : videoRef.current.pause();
  }, [isPlaying]);

  if (!videoData) {
    return <div>Video not found</div>;
  }

  return (
    <div className={`relative w-full ${height} overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        src={videoData.src}
        muted={muted}
        loop={loop}
        playsInline
        className="w-full h-full object-cover lg:rounded-xl "
      />

      {/* Play / Pause */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="
          absolute bottom-6 left-6
          px-3 py-3
          bg-black/20 hover:bg-black/40
          backdrop-blur-sm
          rounded-md border border-white/20
          transition
        "
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white fill-white" />
        ) : (
          <Play className="w-5 h-5 text-white fill-white" />
        )}
      </button>
    </div>
  );
};

export default VideoDisplay;
