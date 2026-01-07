
import {btnShopHero} from '../ui/uiStyle'
import Button from '../ui/Button'
export default function ShopHome({
  desktopImage,
  mobileImage,
  alt,
  title,
  textColor = "text-black",
}) {
  return (
    <div className="relative h-screen w-full">
      <picture>
        {/* Desktop */}
        <source media="(min-width: 640px)" srcSet={desktopImage} />

        {/* Mobile (fallback) */}
        <img
          src={mobileImage}
          alt={alt}
          className="h-full w-full object-cover"
        />
      </picture>

      <div className="absolute bottom-20 inset-x-0 z-10 flex flex-col items-center gap-5 px-4">
        <h2
          className={`text-center text-2xl md:text-4xl font-medium mb-3 ${textColor}`}
        >
          {title}
        </h2>
      
        <Button title={btnShopHero[0].title} css={btnShopHero[0].css}></Button>
      </div>
    </div>
  );
}
