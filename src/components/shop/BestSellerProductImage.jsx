const BestSellerProductImage = ({ src, alt }) => {
  return (
    <div className=" relative aspect-square overflow-hidden rounded-lg bg-gray-100 group">

      <img
        src={src}
        alt={alt}
        className=" absolute w-full h-full object-contain opacity-100 inset-0"
      />
    </div>
  );
};

export default BestSellerProductImage;
