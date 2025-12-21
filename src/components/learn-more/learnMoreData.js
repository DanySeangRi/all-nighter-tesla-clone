import { LearnMoreData1, LearnMoreData2, LearnMoreData3, Affordability1, Affordability2, Affordability3, Connected1, Connected2, Connected3, Connected4 } from "./icons.jsx";

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
  sectionDescription: "From easy and affordable charging anywhere you go to extremely low maintenance and repairs—owning Model Y Standard typically costs less than owning a comparable gas car.",
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