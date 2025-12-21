import ShopHoverDropdown from "./ShopHoverDropdown";
import { IoSearchOutline, IoCartOutline, IoMenuOutline } from "react-icons/io5";

export default function ShopNavbar() {
  return (
    <header className="relative z-50 bg-white">
      <div className="h-14 flex items-center justify-between px-8">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <div className="font-bold tracking-[0.3em] font-['Tesla']">TESLA</div>
          <span className="text-gray-400">|</span>
          <span className="font-medium">Shop</span>
        </div>

        {/* CENTER (HOVER DROPDOWN) */}
        <ShopHoverDropdown />

        {/* RIGHT */}
        <div className="flex items-center gap-4 text-xl">
          <IoSearchOutline />
          <IoCartOutline />
          <div className="flex items-center gap-1 text-sm">
            <IoMenuOutline className="text-xl" />
            <span>Menu</span>
          </div>
        </div>
      </div>
    </header>
  );
}
