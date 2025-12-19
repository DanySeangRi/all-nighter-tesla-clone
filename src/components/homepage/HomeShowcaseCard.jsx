import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import { cardBtnCss, } from "../ui/uiStyle";
const HomeShowcaseCard = ({
  mobileImage,
  desktopImage,
  name,
  underline,
  description,
}) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(min-width: 640px)");
    setIsDesktop(media.matches);

    const listener = (e) => setIsDesktop(e.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <div
      className="
        w-82.5 h-130
        sm:w-5xl sm:h-145
        bg-amber-950 rounded-[10px]
        bg-cover flex items-end
      "
      style={{
        backgroundImage: `url(${isDesktop ? desktopImage : mobileImage})`,
      }}
    >
      <div className="flex gap-5 flex-col p-4">
        <div className="flex flex-col">
          <h1 className="text-[40px] text-white relative top-1">
            {name}
          </h1>
          <p className={`text-white ${underline} text-[16px]`}>
            {description}
          </p>
        </div>

        <div className="flex gap-2 mb-4">
          <Button
            title={cardBtnCss[0].title}
            css={cardBtnCss[0].css}
          />
          <Button
            title={cardBtnCss[1].title}
            css={cardBtnCss[1].css} 
         
          />
        </div>
      </div>
    </div>
  );
};

export default HomeShowcaseCard;
