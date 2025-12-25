import React from "react";
import Card from "./Card";
import modelS from "../../assets/images/homepage/Homepage-Card-Model-S-Desktop-US-v3.jpg";
import modelX from "../../assets/images/homepage/Homepage-Card-Model-X-New-Desktop-US-v4.jpg";
import cybertruck from "../../assets/images/homepage/Homepage-Card-Cybertruck-Desktop-US-v3.jpg";

const products = [
  {
    name: "Model S",
    price: "$72,990",
    image: modelS,
  },
  {
    name: "Model X",
    price: "$77,990",
    image: modelX,
  },
  {
    name: "Cybertruck",
    price: "$60,990",
    image: cybertruck,
  },
];

export default function Production() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tesla Products
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Browse our selection of electric vehicles.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.name} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
