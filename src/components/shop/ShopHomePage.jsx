import BestSellers from "./BestSellers.jsx";
import { shop } from "./data/shop.js";
import ShopHome from "./ShopHome.jsx";
import {products} from "./data/products.js";
import ApparelSection from "./ApparelSection.jsx";
import ProductGrid from "./ProductGrid.jsx";


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
      <BestSellers products={products} />

      <ul>
        {shop.map((item) => (
          <li key={item.id}>
            <ShopHome {...item} />
          </li>
        ))}
      </ul>
      <div>
        <ApparelSection />
      </div>

      <ShopHome
        desktopImage="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/tesla-shop-marketing-imagery/image-grid/WirelessCharger2800x1300.png"
        mobileImage="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/tesla-shop-marketing-imagery/image-grid/WirelessCharger1800x1700.png"
        alt="Model Y Roof Rack"
        title="Model Y Roof Rack"
        textColor="text-black"
      />
    </>
  );
};

export default ShopHomePage;
