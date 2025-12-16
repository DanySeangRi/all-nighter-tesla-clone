import React from "react";

const VideoShowcase = ({ videoSrc, posterSrc, title, description }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
        <video
          className="w-full"
          poster={posterSrc}
          controls
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {title && (
        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-3">{title}</h2>
          {description && (
            <p className="text-base text-gray-700 max-w-3xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}
    </section>
  );
};

const VideoShowcaseList = () => {
  const videos = [
    {
      videoSrc: "/videos/model-y-taillight.mp4",
      posterSrc: "/images/learn-more/Model-Y-Standard-Software-Desktop-Poster.avif",
      title: "Distinctive Design",
      description: "The sleek, aerodynamic design of Model Y features distinctive LED taillights and a modern aesthetic that turns heads wherever you go."
    },
    {
      videoSrc: "/videos/model-y-driving.mp4",
      posterSrc: "/images/learn-more/Model-Y-Standard-Software-Desktop-Poster.avif",
      title: "More Than a Car",
      description: "Model Y Standard includes all the fun. Park at your favorite spot and play music, movies and games through the center 15.4-inch touchscreen.* Activate Camp Mode to keep your cabin comfortable while you stream, relax or spend the night."
    },
    {
      videoSrc: "/videos/model-y-theater.mp4",
      posterSrc: "/images/learn-more/Model-Y-Standard-Theater-Desktop-Poster-EMEA.avif",
      title: "Transform Your Car Into a Theater",
      description: "Enjoy movies and shows on the stunning 15.4-inch touchscreen display. With premium audio and comfortable seating, your Model Y becomes the ultimate entertainment destination."
    },
    {
      videoSrc: "/videos/model-y-aerial.mp4",
      posterSrc: "/images/learn-more/Model-Y-Standard-Software-Desktop-Poster.avif",
      title: "Adventure Awaits",
      description: "Whether cruising through the city or exploring scenic routes, Model Y delivers an exceptional driving experience with impressive range and performance."
    },
    {
      videoSrc: "/videos/model-y-autopilot.mp4",
      posterSrc: "/images/learn-more/Model-Y-Standard-FSD-Desktop-Poster.avif",
      title: "Advanced Autopilot",
      description: "Experience the future of driving with advanced autopilot features. Model Y's intelligent systems provide enhanced safety and convenience for every journey."
    }
  ];

  return (
    <div className="w-full bg-white">
      {videos.map((video, index) => (
        <VideoShowcase
          key={index}
          videoSrc={video.videoSrc}
          posterSrc={video.posterSrc}
          title={video.title}
          description={video.description}
        />
      ))}
    </div>
  );
};

export default VideoShowcaseList;