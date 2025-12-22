import React, { useState, useRef, useEffect } from 'react';
import { Pause, Play } from 'lucide-react';
import { videos } from './videos';
import Button from '../ui/Button';
import { cardBtn } from '../ui/uiStyle';
const VideoDisplay = ({
  id,
  autoPlay = true,
  loop = true,
  muted = true,
  className = "",
  height,
 // Default for desktop
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

  const videoContainerClasses = ` ${id === "small-card" ? 'lg:min-w-[904px] lg:flex-1  ' : 'max-w-[1344px]'} ${className}`;

  // Responsive button positioning: top-right for mobile (430px), bottom-left for desktop (1440px)
  const responsiveButtonClasses = "top-7 right-7 ";

  return (
    <div className={videoContainerClasses} >
  <div className={`relative w-100.5 lg:w-full `}>
        <video
        ref={videoRef}
        src={videoData.src}
        loop={loop}
        muted={muted}
        playsInline
        className={`w-full ${height} object-cover rounded-lg `}
      />
      <div className={` absolute  ${responsiveButtonClasses} z-10`}>
        <button
          onClick={togglePlay}
          className="px-3 py-3 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-md border border-white/20 transition-all duration-300  "
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="text-white w-5 h-5 fill-white" />
          ) : (
            <Play className="text-white w-5 h-5 fill-white" />
          )}
        </button>
      </div>
<div className='absolute bottom-5 left-5 z-10 flex flex-col '>
        <div className=' text-white'>
      <h1 className=' text-[40px] font-medium'>Full Self Driving (Supervised)</h1>
      </div>
    <div className=" z-10 flex gap-2 mt-6">
      <Button title={cardBtn[3].title} css={cardBtn[3].css} />
       <Button title={cardBtn[4].title} css={cardBtn[4].css} />
    </div>
</div>

  </div>
    </div>
  );
};

export default VideoDisplay;