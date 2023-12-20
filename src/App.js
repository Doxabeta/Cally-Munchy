import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">
        <div className="frame">
            <img className="image" alt="Image" src="https://images.squarespace-cdn.com/content/v1/64e3926eb597a92d578672bc/545dc2be-37fd-4ee1-89ca-e28ed7cebe01/Asset+1Cally+lounge.png?format=1500w"/>
            <div className="navbar">
                <div className="text-wrapper"><button>Home</button></div>
                <div className="div"><button>Menu</button></div>
                <div className="text-wrapper-2"><button>Events</button></div>
                <div className="text-wrapper-3"><button>Shop</button></div>
                <div className="text-wrapper-4"><button>Contact</button></div>
            </div>
            <div className="text-wrapper-5"><button className="last">Reservations</button></div>
            <img className="uim-instagram-alt" alt="Uim instagram alt" src="uim-instagram-alt.svg" />
            <img className="ic-baseline-facebook" alt="Ic baseline facebook" src="ic-baseline-facebook.svg" />
        </div>
        </div>
    );
};



export default App;
