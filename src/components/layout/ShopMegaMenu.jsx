import React, { useState, useRef, useEffect } from "react";




// Data definitions (will be moved here from original files)
const DROPDOWN_DATA = {

};


export default function ShopMegaMenu({ activeMenu, open, onMouseEnter, onMouseLeave }) {
  const [menuHeight, setMenuHeight] = useState(0);
  const contentRef = useRef(null);


  useEffect(() => {
    if (activeMenu && contentRef.current) {
      setMenuHeight(contentRef.current.offsetHeight);
    } else if (!activeMenu) {
      setMenuHeight(0);
    }
  }, [activeMenu]);





  const renderSingleCategoryLayout = (title) => (
    <div className="mx-auto max-w-7xl py-14 text-center">
      <h3 className="text-2xl font-bold">{title} Overview</h3>
      <p className="mt-4 text-lg">Explore our range of {title.toLowerCase()} products.</p>
      {/* Add more generic content or links here if needed */}
    </div>
  );




  let content = null;
  let additionalContainerClasses = ''; // For discover layout's specific centering

  if (activeMenu) {
    switch (activeMenu) {




      default:
          content = null;
    }
  }


  return (
    <div
      className={`absolute left-0 top-14 w-full bg-white z-40 overflow-hidden
        transition-all duration-500 ease-out
        ${
          open
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2 invisible"
        }
      `}
      style={{ height: open ? menuHeight : 0 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div key={activeMenu} ref={contentRef} className={`transition-opacity duration-200 custom-tesla-ease ${additionalContainerClasses}`}>
        {content}
      </div>
    </div>
  );
}
