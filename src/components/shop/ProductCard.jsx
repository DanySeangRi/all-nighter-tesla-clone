import ProductImage from "./ProductImage";
const ProductCard = ({ product }) => {
  return (
    <div className=" flex flex-col">
      <ProductImage
        src={product.image}
        hoverSrc={product.imageHover}
        alt={product.name}
      />
      <div className=" mt-4 space-y-0.5 font-bold">
        <h3 className=" text-sm line-clamp-2 hover:text-red-500">
          {product.name}
        </h3>
        <p className=" text-sm font-semibold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
