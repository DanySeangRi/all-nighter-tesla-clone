import {shop} from "./data/shop.js";
import ShopHome from "./ShopHome.jsx";
const ShopHomePage = () => {
  return (
    <ul>
      {shop.map((item) => (
        <li key={item.id}>
          <ShopHome {...item} />
        </li>
      ))}
    </ul>
  );
};

export default ShopHomePage;
