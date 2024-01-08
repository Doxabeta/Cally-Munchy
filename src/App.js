import React, { useState } from 'react';

// import Menu from './Components/Menu/Menu';
// import Item from './Components/Item/Item';
import Events from './Components/Events/Events';
import Enquiry from './Components/Enquiry/Enquiry';
import Intro from './Components/Intro/Intro';
import NavBar from "./Components/NavBar/NavBar"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      {/* <Events />  
      <Enquiry />  */}
      {/* <Menu /> */}
      {/* <Item /> */}
    </div>
  );
}

export default App;
