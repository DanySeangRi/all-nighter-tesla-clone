import React from 'react'
import Footer from "/src/components/layout/Footer"
import NavBar from '/src/components/layout/NavBar'	
import SlideCardModelY from '../src/components/learn-more/SlideCardModelY'
// import {headerTitleCards, cards} from "./components/learn-more/learnMoreData"
 import {headerTitleCards, cards} from '../src/components/learn-more/learnMoreData'
 import StickyBottomBar from '../src/components/ui/StickyBottomBar'
 import TeslaSpecCard from '../src/components/learn-more/TeslaSpecCard'
export default function LearnMore() {
  return (
    <div>
      <NavBar/>
     <SlideCardModelY cards={cards} title={headerTitleCards}/>
     <TeslaSpecCard/>
     <StickyBottomBar/>

    </div>
  )
}

