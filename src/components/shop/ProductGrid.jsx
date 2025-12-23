const ProductGrid = ({ children }) => {
  return (
    <div
      className="
        grid
        grid-cols-2
        md:grid-cols-3
        gap-6
        md:gap-8
        xl:gap-16

      "
    >
      {children}
    </div>
  );
};

export default ProductGrid;
