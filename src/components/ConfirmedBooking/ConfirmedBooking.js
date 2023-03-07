import hero_image from "../../restauranfood.jpg"

const ConfirmedBooking = () => {
    return (
      <div className="fullwidth_container">
      <div id="homepage_hero">
        <div>
            <h1>Booking Confirmed</h1>
            <p>Your online booking is confirmed. We look forward to seeing you soon!</p>
        </div>
        <div>
            <img src={hero_image} alt="Booked Hero" />
        </div>
      </div>
      </div>
    );
  }
  
  export default ConfirmedBooking;