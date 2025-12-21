import BestSellers from "./BestSellers.jsx";
import { shop } from "./data/shop.js";
import ShopHome from "./ShopHome.jsx";
import {products} from "./data/products.js";


const ShopHomePage = () => {
  return (
    <>
      <ShopHome
        desktopImage="src/assets/images/shop/tesla-shop-marketing/ModelY.avif"
        mobileImage="src/assets/images/shop/tesla-shop-marketing/modelymobile.avif"
        alt="Model Y Roof Rack"
        title="Model Y Roof Rack"
        textColor="text-black"
      />
      <BestSellers products={products}/>

      <ul>
        {shop.map((item) => (
          <li key={item.id}>
            <ShopHome {...item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShopHomePage;
