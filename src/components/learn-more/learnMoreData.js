import { LearnMoreData1, LearnMoreData2, LearnMoreData3, Affordability1, Affordability2, Affordability3, Connected1, Connected2, Connected3, Connected4 } from "./Icons.jsx";
import slide1Desktop from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-1-Desktop.png";
import slide1Mobile from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-1-Mobile.png";
import slide2Desktop from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-2-Desktop.png";
import slide2Mobile from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-2-Mobile.png";
import slide3Desktop from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-Warranty-Desktop.avif";
import slide3Mobile from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-Warranty-Mobile.avif";
import slide4Desktop from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-4-Desktop.png";
import slide4Mobile from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-4-Mobile.avif";
import slide5Desktop from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-3-Desktop.avif";
import slide5Mobile from "../../assets/images/learn-more/Model-Y-Meet-Carousel-Slide-3-Mobile.avif";
import { Subtitles } from "lucide-react";



export const learnMoreData = {
  sectionTitle: "Everything You Want",
  sectionDescription:
    "For anyone and every drive. The athletically tuned exterior features sharp lines and lean surfaces, a sloped roofline and new aerodynamic alloy wheels for unparalleled efficiency. You can travel farther and get there faster while using less energy.",

  cards: [
    {
      id: 1,
      title: "Seat Five",
      description: "Bring along your family and friends with seating for up to five people.",
      icon: LearnMoreData1,
    },
    {
      id: 2,
      title: "Load Up",
      description:
        "Fit everyone’s gear in 74 cubic feet of cargo space. Fold flat the second-row seats to store bikes, camping equipment and more.",
      icon: LearnMoreData2,
    },
    {
      id: 3,
      title: "Settle In",
      description:
        "Enjoy a smooth, comfortable ride with a spacious interior, heated front seats and soft-touch textiles.",
      icon: LearnMoreData3,
    },
  ],
};



export const affordabilityData = {
  sectionTitle: "More Affordable Than a Gas Car",
  sectionDescription: "From easy and affordable charging anywhere you go to extremely low maintenance and repairs—owning Model Y Standard typically costs less than owning a comparable gas car.",
  cards: [
    {
      id: 1,
      title: "Charging Costs Less",
      description: "Electricity typically costs less than gas. When you plug in at home overnight, you can charge using lower-cost electricity and then start your day with plenty of range.",
      icon: Affordability1
    },
    {
      id: 2,
      title: "Virtually No Maintenance",
      description: "No oil changes, tune ups or smog checks. Just refill the washer fluid and rotate your tires. Learn More",
      icon: Affordability2
    },
    {
      id: 3,
      title: "Fewer Parts to Replace",
      description: "A gas car engine has over 1,000 moving parts—Tesla drivetrains have around 20. Fewer moving parts means fewer repairs over time and greater reliability.",
      icon: Affordability3
    }
  ]
};




export const connected = {
  sectionTitle: "Always Connected",
  layout: "small",
  sectionDescription: "Monitor, access and control your vehicle from anywhere remotely on your phone with the Tesla app.",
  cards: [
    {
      id: 1,
      title: "Remote Climate Control",
      description: "Adjust your cabin’s temperature before your drive and step into a comfortable climate.",
      icon: Connected1
    },
    {
      id: 2,
      title: "Phone Key",
      description: "You won’t forget your keys. Unlock upon arrival with phone key or unlock and lock with Remote Access.",
      icon: Connected2
    },
    {
      id: 3,
      title: "Dog Mode",
      description: "Activate Dog Mode to keep your co-pilot safe and cozy while you’re away.",
      icon: Connected3
    },
    {
      id: 4,
      title: "Sentry Mode",
      description: "Monitor your vehicle’s surroundings while unattended by activating Sentry Mode.",
      icon: Connected4
    }
  ]
};

export const videos = [
    {
      id: 'big-card',
      title: 'Tesla Big Card Video',
      src: 'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-Y-Standard-FSD-Desktop.mp4',
      
    },
    {
      id: 'small-card',
      title: 'Tesla Small Card Video',
      src: 'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-Y-Standard-FSD-Carousel-Slide-3-Desktop-NA.mp4'
    },
  ];
import slideImage1 from "../../assets/images/learn-more/Model-Y-Standard-FSD-Carousel-Slide-1-Desktop.avif";
import slideImage2 from "../../assets/images/learn-more/Model-Y-Standard-FSD-Carousel-Slide-2-Desktop.avif";
export const slides = [
    {
      type: "image",
      image: slideImage1,
      title: "Full Self-Driving (Supervised)",
      description:
        "A suite of advanced driver-assistance features designed to provide more active guidance and assisted driving under your active supervision.",
    },
    {
      type: "image",
      image: slideImage2,
      title: "Front-Facing Cameras",
      description:
        "Enhanced visibility for greater safety, easier parking and driver-assistance features like Actually Smart Summon.",
    },
    {
      type: "video",
      title: "Blind Spot Monitoring",
      description:
        "Illuminated warning lights and on-screen visualizations help you safely check your surroundings.",
    },

  ];

  

 



export const cards = [

  { title: "Safety", img: { desktop: slide1Desktop, mobile: slide1Mobile } },
  { title: "Convenience", img: { desktop: slide2Desktop, mobile: slide2Mobile } },
  {
    title: "Full Self-Driving (Supervised)",
    img: {
      desktop: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Meet-Landing-Carousel-FSD-All.jpg',
      mobile: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Meet-Landing-Carousel-FSD-All.jpg'
    }
  },
  { title: "Warranties", img: { desktop: slide4Desktop, mobile: slide4Mobile } },
  { title: "Utility", img: { desktop: slide3Desktop, mobile: slide3Mobile } },
  { title: "Entertainment", img: { desktop: slide5Desktop, mobile: slide5Mobile } },
];


export const headerTitleCards = {
  maintitle: "Meet Model Y",
  subtitle1: "Electric Midsize SUV",
  subtitle2: "Explore the features that are available with every Model Y."
}