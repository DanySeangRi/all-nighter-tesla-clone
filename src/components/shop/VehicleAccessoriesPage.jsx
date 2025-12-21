import { data } from "./data/vihecle";
import ProductGrid from "./ProductGrid";
import ProductCard from "./ProductCard";

const VehicleAccessoriesPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-10 pt-10">{data.category.title}</h1>

      {data.sections.map((section) => (
        <section key={section.id} className="mb-16 scroll-mt-20 top-0">
          <h2 className="text-xl bg-white/70 py-1.5 mb-6 backdrop-blur-md  ">
            {section.title}
          </h2>

          <ProductGrid>
            {section.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </section>
      ))}
    </div>
  );
};

export default VehicleAccessoriesPage;
