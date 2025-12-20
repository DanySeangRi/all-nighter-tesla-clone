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
}) => {
  return (
    <div className="relative w-82.5 h-130 sm:w-5xl sm:h-145 rounded-[10px] overflow-hidden">
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
          <div className="relative z-10  h-full flex flex-col jusitfy-space-between   ">
                {/* title at the top of the page  */}
                <div className="text-white w-full h-48.25 p-4 md:py-8 md:px-10 ">
                  <span className=" text-[14px]">{title}</span>
                </div>
                {/* bottom content  */}
                <div className=" gap-6  flex-col p-4 md:p-10 w-full h-96.5 item-end justify-end flex">
                    <div>
                      <h1 className="text-[48px] text-white relative top-2">{name}</h1>
                      <p className={`text-white ${underline} underline-offset-4 text-[16px]`}>
                        {description}
                      </p>
                    </div>
                  
                    <div className="flex gap-2 ">
                      <Button title={cardBtn[0].title} css={cardBtn[0].css} />
                      <Button title={cardBtn[1].title} css={cardBtn[1].css} />
                    </div>
                </div>

          </div>
    </div>
  );
};

export default HomeShowcaseCard;
