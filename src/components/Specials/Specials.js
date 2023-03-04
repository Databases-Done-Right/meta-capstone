import special1_image from "./bruchetta.svg"
import special2_image from "./greek salad.jpg"
import special3_image from "./lemon dessert.jpg"
import Special from "./Special"
import { useState } from "react"


const Specials = () => {
  const [special1, setSpecial1] = useState("This famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and reosemary crutons.")
  const [special2, setSpecial2] = useState("This famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and reosemary crutons.")
  const [special3, setSpecial3] = useState("This famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and reosemary crutons.")
  return (
      <div id="specials_container">
        <Special name="Greek Salad" price="$12.99" description={special2} image={special2_image} order_link="#" />
        <Special name="Brushetta" price="$5.99" description={special1} image={special1_image} order_link="#" />
        <Special name="Lemon Dessert" price="$5.00" description={special3} image={special3_image} order_link="#" />
      </div>
    );
  }
  
  export default Specials;