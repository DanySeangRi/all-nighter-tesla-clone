import React from "react";

export default function Card({ product }) {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href="#">
            <span className="absolute inset-0" />
            {product.name}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {product.price}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img
          src={product.image}
          alt=""
          className="h-full w-full bg-gray-50 object-cover"
        />
      </div>
    </article>
  );
}
