const ApparelProductImage = ({ src, alt }) => {
  return (
    <div className="aspect-2/3">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default ApparelProductImage;
