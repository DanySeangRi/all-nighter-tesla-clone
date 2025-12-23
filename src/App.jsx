import React from 'react';
import TeslaSpecCard from './components/learn-more/TeslaSpecCard.jsx';
import { Divide } from 'lucide-react';
import Navbar from './components/layout/Navbar.jsx';
import StickyBottomBar from './components/ui/StickyBottomBar.jsx';
function App() {
  return (
    <div className="min-h-screen">
      <TeslaSpecCard/>
      <StickyBottomBar/>
    </div>
  );
}
export default App;


