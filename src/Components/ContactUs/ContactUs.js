import "./ContactUs.css";

const ContactUs = () => {
    return (
        <div className="Contact-Main">
            <div className="text-wrapper-1">GET IN TOUCH - LET THE FUSION BEGIN!</div>

            <div className="frame">
                <p className="email-required div">
                    <span className="text-wrapper">Email</span>
                    <span className="span"> (required)</span>
                </p>
                <p className="phone-required div">
                    <span className="text-wrapper">Phone</span>
                    <span className="span"> (required)</span>
                </p>
                <div className="overlap-group div">
                    <p className="nature-of-event div">
                        <span className="text-wrapper">Nature of Event</span>
                        <span className="span"> (required)</span>
                    </p>
                    <div className="div" />
                </div>
                <p className="message-required div">
                    <span className="text-wrapper">Message</span>
                    <span className="span"> (required)</span>
                </p>
                    <div className="text-wrapper-2">First</div>
                    <div className="text-wrapper-3">Surname</div>
                </div>
                <div className="cally-munchy-img" src="https://images.squarespace-cdn.com/content/v1/64e3926eb597a92d578672bc/31f46a1b-80b8-42df-b6fd-3251ed85f3b1/Cally+Munchy+X+Abei-14.jpg?format=1500w">
                <div className="div-2" />
                <div className="div-3" />
                <div className="div-4" />
                <div className="div-5" />
                <div className="div-6" />
            </div>
        </div>

        

    );
};

export default ContactUs;