import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import ReactDOM from "react-dom";
import { loadStripe } from "@stripe/stripe-js";

const EventCard = ({ event }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    document.body.style.overflowY = "hidden";
    setShowModal(true);
  };

  const closeModal = () => {
    document.body.style.overflowY = "scroll";
    setShowModal(false);
  };

  // Payment Integration
  const makePayment = async (event) => {
    const stripe = await loadStripe(
      "pk_test_51Nr3OeSAbh2NgfAxV3SIFKExyU9wLz1RITEM20NanKk2wriMLhEk7DycjkeyIxezBxL3OXDTQchawZEYLXja2D1S00zcwQTFpx"
    );

    const body = {
      EventDetail: event,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "http://localhost:2000/api/v1/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  const PopupModel = () => {
    return ReactDOM.createPortal(
      <>
        <div className="event-model-wrapper">
          <div className="event-model-container">
            <div className="event-model-navbar">
              <h1 className="event-model-title animate__bounce">
                {event.title}
              </h1>
              <CloseIcon
                className="CloseButton"
                color="secondary"
                fontSize="large"
                sx={{ mr: 5 }}
                onClick={closeModal}
              ></CloseIcon>
            </div>
            <div className="event-model-body">
              <div className="event-model-img-container">
                <img src={event.image} alt="" className="event-model-img" />
              </div>
              <div className="event-model-detail-container">
                <p className="event-model-description">{event.description}</p>
                <button
                  className="event-model-btn btn"
                  onClick={() => makePayment(event)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </>,
      document.querySelector(".EventModelPortal")
    );
  };

  return (
    <>
      <div className="items" key={event.title}>
        <img src={event.image} alt="" className="e-card-image" />
        <h1 className="e-card-title">{event.title}</h1>
        {<p className="e-card-des">{event.description}</p>}
        <button className="e-card-viewbtn btn" onClick={openModal}></button>
      </div>
      {/* {Popup model} */}
      {showModal && <PopupModel />}
    </>
  );
};

export default EventCard;
