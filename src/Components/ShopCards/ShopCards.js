import "./ShopCards.css"

import Taste1 from "../../Assets/CallyTaste1.jpg";
import Taste2 from "../../Assets/CallyTaste2.jpg";
import Taste3 from "../../Assets/CallyTaste3.jpg";
import Taste4 from "../../Assets/CallyTaste4.jpg";
import Taste5 from "../../Assets/CallyTaste5.jpg";

const ShopCards = () => {
    return (
        <><div>
            <div className="image">
                <img className="rectangle" alt="Rectangle" src={Taste1} />
            </div>
            <div className="label">
                <p className="text-wrapper">SHI - TUAN CHILLI OIL</p>
            </div>
            <div className="text-wrapper-1">£7.50</div>
        </div><div>
                <div className="image">
                    <img className="rectangle-2" alt="Rectangle" src={Taste2} />
                </div>
                <div className="label">
                    <p className="text-wrapper">SHI - TUAN CHILLI MAYO</p>
                </div>
                <div className="text-wrapper-1">£7.50</div>
            </div><div className="image">
                <img className="rectangle-2" alt="Rectangle" src={Taste3} />
            </div><div className="label">
                <p className="text-wrapper">SHI - TUAN CHILLI MAYO</p>
            </div><div className="text-wrapper-1">£7.50</div><><div className="image">
                <img className="rectangle-2" alt="Rectangle" src={Taste4} />
            </div><div className="label">
                    <p className="text-wrapper">SHI - TUAN CHILLI MAYO</p>
                </div><div className="text-wrapper-1">£7.50</div></><><div className="image">
                    <img className="rectangle-2" alt="Rectangle" src={Taste5} />
                </div><div className="label">
                    <p className="text-wrapper">SHI - TUAN CHILLI MAYO</p>
                </div><div className="text-wrapper-1">£7.50</div></></>
                
    );
};

export default ShopCards;