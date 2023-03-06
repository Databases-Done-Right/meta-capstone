const Testimonial = (props) => {
    return (
      <div>
        <img className="the_rating" src={props.star_image} alt="Customer Rating" />
        <div className="customer_image_and_name">
          <img src={props.image} alt="Customer Headshot" />
          <p>{props.name}</p>
        </div>
        <p>{props.review}</p>
      </div>
    );
  }
  
  export default Testimonial;