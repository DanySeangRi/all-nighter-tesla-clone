import React from "react";

export default function Button({ title, css }) {
  return (
    <button className={`
      ${css}
      rounded-sm 
      flex justify-center
      items-center p-1 
      text-sm
      cursor-pointer`}
    >
      {title}
    </button>
  );
}
