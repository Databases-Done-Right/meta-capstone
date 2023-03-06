import HomepageHero from "./HomepageHero"
import HomePage from "./HomePage"
import Specials from "./components/Specials/Specials"
import Testimonials from "./components/Testimonials/Testimonials"
import Backstory from "./components/Backstory/Backstory"
import Reservation from "./components/Reservation/Reservation"
import { Routes, Route } from "react-router-dom";

const Main = () => {
    return (
      <main>
        <Routes>
          <Route path="" element={<HomePage />}></Route>
          <Route path="/reservations" element={<Reservation />}></Route>
          <Route path="/menu" element={<Specials />}></Route>
          <Route path="/testimonials" element={<Testimonials />}></Route>
          <Route path="/about" element={<Backstory />}></Route>
        </Routes>
      </main>
    );
  }
  
  export default Main;