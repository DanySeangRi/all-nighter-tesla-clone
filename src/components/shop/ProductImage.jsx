const ProductImage = ({ src, hoverSrc, alt }) => {
  return (
    <div className=" relative aspect-square overflow-hidden rounded-lg bg-gray-100 group">
      <img
        src={src}
        alt={alt}
        className=" absolute w-full h-full object-contain inset-0 group-hover:opacity-0"
      />
      <img
        src={hoverSrc}
        alt={alt}
        className=" absolute w-full h-full object-contain opacity-0 inset-0 group-hover:opacity-100"
      />
    </div>
  );
};

export default ProductImage;
