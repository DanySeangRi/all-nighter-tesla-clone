import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site footer"
      className="text-[12px] font-sans text-[#393c41] pt-0 px-6 pb-[60px]"
    >
      <nav>
        <h2 className="sr-only">Footer menu</h2>

        {/* Desktop layout */}
        <ul className="hidden min-[600px]:flex flex-wrap gap-x-2 gap-y-1 items-center justify-center text-center max-w-[1440px] mx-auto min-h-[70px] py-4">
          <li><a href="#" title="About Tesla">Tesla © {currentYear}</a></li>
          <li><a href="#">Privacy &amp; Legal</a></li>
          <li><a href="#">Vehicle Recalls</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Get Updates</a></li>
          <li><a href="#">Locations</a></li>
          <li><a href="#">Learn</a></li>
        </ul>

        {/* Mobile layout */}
        <div className="min-[600px]:hidden flex flex-col items-center max-w-[430px] mx-auto pt-6 px6 pb-[92px]">
        <ul className="flex flex-col gap-y-2 text-center list-none mb-4">
          <li><a href="#">Tesla © {currentYear}</a></li>
          <li><a href="#">Privacy & Legal</a></li>
          <li><a href="#">Vehicle Recalls</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Get Updates</a></li>
          <li><a href="#">Learn</a></li>
        </ul>
        </div>
      
      </nav>
    </footer>
  );
}