import BestSellerProductImage from "./BestSellerProductImage";
const BestSellerCard = ({ product }) => (
  <div
    className="
      snap-start
      min-w-[60vw]
      md:min-w-[40vw]
      lg:min-w-[27vw]
    "
  >
    <BestSellerProductImage src={product.image} alt={product.name} />
    <h3 className="mt-2 text-lg pt-2">{product.name}</h3>
  </div>
);

export default BestSellerCard;
