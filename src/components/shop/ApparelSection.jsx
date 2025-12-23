import React from "react";
import ApparelCard from "./ApparelCard";

const ApparelSection = () => {
  const apparels = [
    {
      id: 1,
      name: "Men's Apparel",
      image:
        "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/mens_web_2800x1300.png",
    },
    {
      id: 2,
      name: "Women's Apparel",
      image:
        "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/womens_web_2800x1300.png",
    },
    {
      id: 3,
      name: "Kids' Apparel",
      image:
        "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/kids_web_2800x1300.png",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-3">
      {apparels.map(({ id, name, image }) => (
        <div key={id} className="flex-1">
          <ApparelCard name={name} image={image} />
        </div>
      ))}
    </div>
  );
};

export default ApparelSection;
