import React from "react";
import Button from "../ui/Button";
import { cardBtn, } from "../ui/uiStyle";

const HomeShowcaseCard = ({
  title,
  mobileImage,
  desktopImage,
  name,
  underline,
  description,
  width = "w-82.5 sm:w-5xl",
  height = "h-130 sm:h-145",
}) => {
  return (
    <div className={`relative ${width} ${height} rounded-[10px] overflow-hidden shrink-0`}>
          {/* Responsive image */}
          <picture>
            <source media="(min-width: 640px)" srcSet={desktopImage} />
            <img
              src={mobileImage}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </picture>

           {/* Content */}
          <div className="relative z-10  h-full flex flex-col space-between">
                {/* title at the top of the page  */}
                <div className="text-white w-full h-48.25 p-4 xl:p-10">
                  <span className=" text-[14px] xl:text-[17x]">{title}</span>
                </div>
                {/* bottom content  */}
                <div className=" gap-5  flex-col p-4 xl:p-10 w-full h-96.5 item-end justify-end flex">
                    <div>
                      <h1 className="relative text-[40px] lg:text-5xl xl:text-5xl text-white top-2 lg:my-2 xl:my-4">{name}</h1>
                      <p className={`text-white ${underline} underline-offset-4 text-[16px] lg:text-[17px] xl:text-[20px]`}>
                        {description}
                      </p>
                    </div>
                  
                    <div className="flex gap-2">
                      <Button title={cardBtn[0].title} css={cardBtn[0].css} />
                      <Button title={cardBtn[1].title} css={cardBtn[1].css} />
                    </div>
                </div>

          </div>
    </div>
  );
};

export default HomeShowcaseCard;
