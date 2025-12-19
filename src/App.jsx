import React from "react";
import InfoCard from "./components/learn-more/InfoCard";
import { AffordabilityData, learnMoreData, Connected } from "./components/learn-more";

export default function App() {
  return <>
    <InfoCard data={learnMoreData}/>

    <InfoCard data={AffordabilityData} />

    <InfoCard data={Connected} />

  </>;
}
