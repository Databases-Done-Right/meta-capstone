import HomepageHero from "./HomepageHero"
import Specials from "./components/Specials/Specials"
import Testimonials from "./components/Testimonials/Testimonials"
import Backstory from "./components/Backstory/Backstory"

const HomePage = () => {
    return (
      <>
          <HomepageHero />
          <Specials />
          <Testimonials />
          <Backstory />
      </>
    );
  }
  
  export default HomePage;