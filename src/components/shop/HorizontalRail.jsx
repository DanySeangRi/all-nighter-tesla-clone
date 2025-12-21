import { useRef } from "react";

const HorizontalRail = ({ children }) => {
  const railRef = useRef(null);

  const scrollLeft = () => {
    railRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    railRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur p-2 rounded-full shadow"
      >
        ←
      </button>
      <div
        ref={railRef}
        className="
          flex gap-6
          overflow-x-auto
          scroll-smooth
          snap-x snap-mandatory
          pb-4


    px-8
    no-scrollbar
           
        "
      >
        {children}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur p-2 rounded-full shadow"
      >
        →
      </button>
    </div>
  );
};

export default HorizontalRail;
