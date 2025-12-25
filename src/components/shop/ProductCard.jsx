import { useState, useEffect } from "react";
import ProductImage from "./ProductImage";

const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.image);
  const [currentHoverImage, setCurrentHoverImage] = useState(
    product.imageHover
  );
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  useEffect(() => {
    setCurrentImage(product.image);
    setCurrentHoverImage(product.imageHover);
    setActiveColorIndex(0);
  }, [product]);

  const handleColorClick = (variant, index) => {
    setCurrentImage(variant.image);
    setCurrentHoverImage(variant.imageHover);
    setActiveColorIndex(index);
  };

  return (
    <div className="flex flex-col cursor-pointer">
      <div className="relative w-full isolate">
        {product.outOfStock && (
          <div className="absolute top-0 left-0 bg-[#5C5E62] text-white text-sm font-semibold px-2 py-2 z-20">
            Out Of Stock
          </div>
        )}

        <div className="pointer-events-auto">
          <ProductImage
            src={currentImage}
            hoverSrc={currentHoverImage}
            alt={product.name}
          />
        </div>
      </div>

      <div className="mt-3 flex justify-between items-start">
        <div className="flex flex-col space-y-1">
          <h3 className="text-sm font-bold text-gray-900 hover:text-red-400 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm font-semibold">${product.price}</p>
        </div>

        {product.colors && product.colors.length > 0 && (
          <div className="flex space-x-2 mt-1 z-10">
            {product.colors.map((variant, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full border shadow-sm cursor-pointer  focus:outline-none focus:ring focus:ring-offset-1 focus:ring-gray-800 ${
                  activeColorIndex === index
                    ? "border-gray-800"
                    : "border-gray-300"
                }`}
                style={{
                  backgroundImage: `url(${variant.hex})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                aria-label={`Select ${product.name} color variant ${index + 1}`}
                onClick={() => handleColorClick(variant, index)}
              ></button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
