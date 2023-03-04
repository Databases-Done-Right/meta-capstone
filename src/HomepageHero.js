import hero_image from "./restauranfood.jpg"

const HomepageHero = () => {
    return (
      <div class="fullwidth_container">
      <div id="homepage_hero">
        <div>
            <h1>Little Lemon</h1>
            <h3>Anytown, USA</h3>
            <p>Anytown's best resturaunt! Come visit us and see what all the hype is about.</p>
            <button class="cta_button">Reserve a Table</button>
        </div>
        <div>
            <img src={hero_image} alt="Homepage Hero" />
        </div>
      </div>
      </div>
    );
  }
  
  export default HomepageHero;