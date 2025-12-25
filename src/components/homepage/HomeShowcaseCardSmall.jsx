import React from "react";
import Button from "../ui/Button";
import { cardBtn } from "../ui/uiStyle";

const HomeShowcaseCardSmall = ({
  title,
  mobileImage,
  desktopImage,
  name,
  underline,
  description,
}) => {
  return (
    <div className="relative w-100.5 h-130 lg:w-110 lg:h-145  rounded-[10px] overflow-hidden shrink-0">
      {/* Responsive image */}
      <picture>
        <source media="(min-width: 640px)" srcSet={desktopImage} />
        <img
          src={mobileImage}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      <div className="relative z-10  h-full flex flex-col jusitfy-space-between   ">
        <div className="text-white w-full h-48.25 p-4 md:py-8 md:px-10 ">
          <span className=" text-[14px]">{title}</span>
        </div>

        <div className=" gap-5  flex-col p-4 md:p-10 w-full h-96.5 item-end justify-end flex">
          <div>
            <h1 className="text-[40px] text-white relative top-2 font-medium">
              {name}
            </h1>
            <p
              className={`text-white ${underline} underline-offset-4 text-[16px]`}
            >
              {description}
            </p>
          </div>

          <div className="flex gap-2 ">
            <Button title={cardBtn[3].title} css={cardBtn[3].css} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeShowcaseCardSmall;
