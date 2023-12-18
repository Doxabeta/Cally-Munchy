import React, {useState} from 'react';

// import Menu from './Components/Menu/Menu';
// import Item from './Components/Item/Item';
import Events from './Components/Events/Events';
import Enquiry from './Components/Enquiry/Enquiry';

function App() {
  return(
    <div className="App">
      <Events />
      <Enquiry />
      {/* <Item /> */}
      {/* <Menu /> */}
    </div>
  );
}

export default App;
