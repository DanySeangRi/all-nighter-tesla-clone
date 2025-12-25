// Car Model Images
import ModelYMobile from "../../assets/images/homepage/Homepage-Card-Model-Y-Mobile-US-v2.jpg";
import ModelYDesktop from "../../assets/images/homepage/Homepage-Card-Model-Y-Desktop-US-v2.jpg";
import Model3Mobile from "../../assets/images/homepage/Homepage-Card-Model-3-Mobile-US-v2.jpg";
import Model3Desktop from "../../assets/images/homepage/Homepage-Card-Model-3-Desktop-US-v2.jpg";
import CybertruckMobile from "../../assets/images/homepage/Homepage-Card-Cybertruck-Mobile-US-v3.jpg";
import CybertruckDesktop from "../../assets/images/homepage/Homepage-Card-Cybertruck-Desktop-US-v3.jpg";
import CyberLogo from "../../assets/images/homepage/cybertruck-640w.webp";
import ModelXMobile from "../../assets/images/homepage/Homepage-Card-Model-X-New-Mobile-US-v4.jpg";
import ModelXDesktop from "../../assets/images/homepage/Homepage-Card-Model-X-New-Desktop-US-v4.jpg";
import ModelSMobile from "../../assets/images/homepage/Homepage-Card-Model-S-Mobile-US-v3.jpg";
import ModelSDesktop from "../../assets/images/homepage/Homepage-Card-Model-S-Desktop-US-v3.jpg";

// Power Supply Images
import SolarPanelsMobile from "../../assets/images/homepage/Homepage-Card-Solar-Panels-Mobile-v2.jpg";
import SolarPanelsDesktop from "../../assets/images/homepage/Homepage-Card-Solar-Panels-Desktop-v2.jpg";
import PowerwallMobile from "../../assets/images/homepage/Homepage-Card-Powerwall-Mobile.png";
import PowerwallDesktop from "../../assets/images/homepage/Homepage-Card-Powerwall-Desktop.png";
import MegapackMobile from "../../assets/images/homepage/Homepage-Card-Megapack-Mobile-v2.jpg";
import MegapackDesktop from "../../assets/images/homepage/Homepage-Card-Megapack-Desktop-v2.jpg";
import SolarRoofMobile from "../../assets/images/homepage/Homepage-Card-Solar-Roof-Tablet.png";
import SolarRoofDesktop from "../../assets/images/homepage/Homepage-Card-Solar-Roof-Desktop.png";

// Self Driving Images
import FeaturesMobile from "../../assets/images/homepage/Homepage-Features-Mobile.png";
import FeaturesDesktop from "../../assets/images/homepage/Homepage-Features-Desktop.png";

const carModel = [
  {
    title: "Midsize SUV",
    imageMobile: ModelYMobile,
    imageDesktop: ModelYDesktop,
    name: "Model Y",
    description: "As Low as 0% APR Available",
  },
  {
    title: "Sport Sedan",
    imageMobile: Model3Mobile,
    imageDesktop: Model3Desktop,
    name: "Model 3",
    description: "2.99% APR Available",
  },
  {
    title: "Utility Truck",
    imageMobile: CybertruckMobile,
    imageDesktop: CybertruckDesktop,
    cyberLogo: CyberLogo,
    description: "3.99% APR Available",
  },
  {
    title: "Luxury SUV",
    imageMobile: ModelXMobile,
    imageDesktop: ModelXDesktop,
    name: "Model X",
    description: "3.99% APR Available",
  },
  {
    title: "Luxury Sedan",
    imageMobile: ModelSMobile,
    imageDesktop: ModelSDesktop,
    name: "Model S",
    description: "3.99% APR Available",
  },
];
export { carModel };

const powerSupplyData = [
  {
    imageMobile: SolarPanelsMobile,
    imageDesktop: SolarPanelsDesktop,
    name: "Solar Panels",
    description: "Power Your Home and Reduce Your Electricity Bill",
  },
  {
    imageMobile: PowerwallMobile,
    imageDesktop: PowerwallDesktop,
    name: "Powerwall",
    description: "Keep Your Lights On During Power Outages",
  },
  {
    imageMobile: MegapackMobile,
    imageDesktop: MegapackDesktop,
    name: "Megapack",
    description: "Massive Batteries for Massive Energy Support",
  },
  {
    imageMobile: SolarRoofMobile,
    imageDesktop: SolarRoofDesktop,
    name: "Solar Roof",
    description: "Generate Clean Energy With Your Roof",
  },
];
const selfDriving = [
  {
    imageMobile: FeaturesMobile,
    imageDesktop: FeaturesDesktop,
    name: "Features That Come Standard",
    description: "Generate Clean Energy With Your Roof",
  },
];
export { powerSupplyData, selfDriving };
