import React from "react";

export default function Button({ title, css }) {
  return (
    <button className={`
      ${css}
      hover:opacity-85
      rounded-sm 
      flex justify-center
      items-center p-1 
      text-sm sm:text-sm `}
    >
      {title}
    </button>
  );
}
