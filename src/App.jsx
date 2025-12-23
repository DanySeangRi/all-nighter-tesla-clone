import React from "react";
import SlideCardModelY from "./components/learn-more/SlideCardModelY";
import {headerTitleCards, cards} from "./components/learn-more/learnMoreData"
export default function App() {
  return <>
  <SlideCardModelY cards={cards} title={headerTitleCards}/>
  </>;
}
