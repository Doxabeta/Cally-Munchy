// import React, { useState } from 'react';


import Events from './Components/Events/Events';
// import Enquiry from './Components/Enquiry/Enquiry';
import Intro from './Components/Intro/Intro';
import NavBar from "./Components/NavBar/NavBar";
// import ShopCards from './Components/ShopCards/ShopCards';
import Menu from "./Components/Menu/Menu"
import UpcomingEvents from "./Components/UpcomingEvents/UpcomingEvents";
import Calendar from './Components/Calendar/Calendar';
import Shop from './Components/Shop/Shop';
import Chatbot from './Components/Chatbot/Chatbot';


function App() {
  return (
    <div className="App">
      <Chatbot />
      <NavBar />
      <Intro />
      <Events />  
      <UpcomingEvents />
      <Calendar />
      <Menu />
      <Shop />


      {/* <Enquiry />  */}
      {/* <ShopCards /> */}

    </div>
  );
}

export default App;
