import HorizontalRail from "./HorizontalRail";
import BestSellerCard from "./BestSellerCard";

const BestSellers = ({ products }) => {

  return (
    <section className="px-6 py-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Best Sellers</h2>
      </div>

      <HorizontalRail>
        {products.map((product) => (
          <BestSellerCard key={product.id} product={product} />
        ))}
      </HorizontalRail>
    </section>
  );
};

export default BestSellers;
