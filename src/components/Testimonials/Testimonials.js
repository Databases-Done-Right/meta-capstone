import five_star from "./5star.jpg"
import customer1 from "./customer1.jpg"
import customer2 from "./customer2.jpg"
import customer3 from "./customer3.jpg"
import customer4 from "./customer4.jpg"
import Testimonial from "./Testimonial"
import { useState } from "react"


const Testimonials = () => {
  const [review1, setReview1] = useState("The food was awesome! Will return again and again!")
  const [review2, setReview2] = useState("Great atmosphere, and the city's best food to boot!")
  const [review3, setReview3] = useState("Some fo the best good that I have tasted in a long while!")
  const [review4, setReview4] = useState("This place is a great place to get together with friends!")
  
  return (
      <div id="testimonials_container">
        <Testimonial name="Bob Jones" review={review1} star_image={five_star} image={customer1} />
        <Testimonial name="Sarah Smith" review={review2} star_image={five_star} image={customer2} />
        <Testimonial name="John Doe" review={review3} star_image={five_star} image={customer3} />
        <Testimonial name="Heather Jones" review={review4} star_image={five_star} image={customer4} />
      </div>
    );
  }
  
  export default Testimonials;