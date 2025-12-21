import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const HorizontalRail = ({ children }) => {
  const railRef = useRef(null);

  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([...children, ...children, ...children]); 
  }, [children]);

  const scrollLeft = () => {
    if (!railRef.current) return;
    railRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!railRef.current) return;
    railRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const rail = railRef.current;
    if (!rail) return;

    const scrollWidth = rail.scrollWidth / 3; 
    if (rail.scrollLeft >= scrollWidth * 2) {
      rail.scrollLeft = scrollWidth;
    } else if (rail.scrollLeft <= 0) {
      rail.scrollLeft = scrollWidth;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 border-2 text-white border-black/20 backdrop-blur p-1.5 text-xl rounded-full shadow"
      >
        <ArrowLeft />
      </button>

      <div
        ref={railRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 px-8 no-scrollbar"
      >
        {items}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 border-2 text-white border-black/20 backdrop-blur p-1.5 text-xl rounded-full shadow"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default HorizontalRail;
