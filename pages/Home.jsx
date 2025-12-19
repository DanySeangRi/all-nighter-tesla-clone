import React from "react";
import HomeShowcaseCard from "../src/components/homepage/HomeShowcaseCard";
import HomeShowcaseData from "../src/components/homepage/data";
export default function Home() {
  return (
    <div>
      {/* example of calling calling props */}
      <HomeShowcaseCard
        title={HomeShowcaseData[0].title}
        mobileImage={HomeShowcaseData[0].imageMobile}
        desktopImage={HomeShowcaseData[0].imageDesktop}
        name={HomeShowcaseData[0].name}
        underline="underline"
        description={HomeShowcaseData[0].description}
      />
    </div>
  );
}
