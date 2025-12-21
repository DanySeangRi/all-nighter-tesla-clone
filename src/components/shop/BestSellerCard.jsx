import BestSellerProductImage from "./BestSellerProductImage";
const BestSellerCard = ({ product }) => (
  <div
    className="
      min-w-55
      snap-start
    "
  >
    <BestSellerProductImage src={product.image} alt={product.name} />
    <h3 className="mt-2 text-sm font-medium">{product.name}</h3>
  </div>
);

export default BestSellerCard;
