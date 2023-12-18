import "./Enquiry.css"

const Enquiry = () => {
    return (
        <><div /><div className="frame">
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
            <div className="text-wrapper-2">First Name</div>
            <div className="text-wrapper-3">Surname</div>
            <div className="div-2" />
            <div className="div-3" />
            <img className="img"  />
            <div className="div-4" />
            <div className="div-5" />
            <div className="div-6" />z
        </div></>
    );
};

export default Enquiry;