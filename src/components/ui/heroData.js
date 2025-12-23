// Hero slides data with responsive images
import ModelYMobile from "../../assets/images/homepage/Homepage-Promo-Meet-Model-Y-Mobile.jpg";
import ModelYTablet from "../../assets/images/homepage/Homepage-Promo-Meet-Model-Y-Tablet.jpg";
import ModelYDesktop from "../../assets/images/homepage/Homepage-Promo-Meet-Model-Y-Desktop.jpg";

import Model3Mobile from "../../assets/images/homepage/Homepage-Promo-Meet-Model-3-Mobile.jpg";
import Model3Tablet from "../../assets/images/homepage/Homepage-Promo-Meet-Model-3-Tablet.jpg";
import Model3Desktop from "../../assets/images/homepage/Homepage-Promo-Meet-Model-3-Desktop.jpg";

import CybertruckMobile from "../../assets/images/homepage/Homepage-Promo-Cybertruck-Mobile-US-v2.jpg";
import CybertruckTablet from "../../assets/images/homepage/Homepage-Promo-Cybertruck-Tablet-US-v2.jpg";
import CybertruckDesktop from "../../assets/images/homepage/Homepage-Promo-Cybertruck-Desktop-US-v2.jpg";

//Cybertruck Logo
import cyberLogo from "../../assets/images/homepage/cybertruck-640w.webp"


export const fallbackSlides = [
    {
    title: "Model Y",
    subtitle: "Order Online for Touchless Delivery",
    date: "",
    button1: "Order Now",
    button2: "View Inventory",
    images: {
        mobile: ModelYMobile,
        tablet: ModelYTablet,
        desktop: ModelYDesktop,
        },
    },
    {
    titleLogo: cyberLogo,
    subtitle: "Order Online for Touchless Delivery",
    date: "",
    button1: "Order Now",
    button2: "View Inventory",
    images: {
        mobile: CybertruckMobile,
        tablet: CybertruckTablet,
        desktop: CybertruckDesktop,
        },
    },
];

