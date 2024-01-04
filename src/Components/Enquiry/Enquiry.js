import "./Enquiry.css";

const Frame = () => {
    return (
        <div>
            <div className="frame">

            <div className="heading">EVENTS 
                                    ENQUIRY</div>

                <p className="email-required">
                    <span className="text-wrapper">Email</span>
                    <span className="span"> (required)</span>
                </p>
                <p className="phone-required">
                    <span className="text-wrapper">Phone</span>
                    <span className="span"> (required)</span>
                </p>
                <div className="overlap-group">
                    <p className="nature-of-event">
                        <span className="text-wrapper">Nature of Event</span>
                        <span className="span"> (required)</span>
                    </p>
                    <div className="div" />
                </div>
                <p className="message-required">
                    <span className="text-wrapper">Message</span>
                    <span className="span"> (required)</span>
                </p>
                <div className="cally-munchy-img" src="https://images.squarespace-cdn.com/content/v1/64e3926eb597a92d578672bc/1ef93da8-4216-40db-abee-2974144808d7/Cally+Munchy+X+Abei-02.jpg?format=1500w">
                    <div className="text-wrapper-2">First</div>
                    <div className="text-wrapper-3">Surname</div>
                </div>
                <div className="div-2" />
                <div className="div-3" />
                <div className="div-4" />
                <div className="div-5" />
                <div className="div-6" />
            </div>
        </div>
    );
};

export default Frame;