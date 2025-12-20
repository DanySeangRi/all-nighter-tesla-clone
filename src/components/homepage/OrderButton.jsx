import React from 'react';

export default function OrderButton({
  text = 'Order Now',
  theme = 'light',
  onClick,
}) {
  const baseClasses =
    'w-64 rounded-md px-6 py-2.5 text-sm font-medium tracking-wider shadow-sm transition-all duration-300 ease-in-out';

  const themeClasses = {
    light: 'bg-white/80 text-black/90 backdrop-blur-sm hover:bg-white',
    dark: 'bg-black/60 text-white backdrop-blur-sm hover:bg-black/80',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${themeClasses[theme]}`}
    >
      {text}
    </button>
  );
}