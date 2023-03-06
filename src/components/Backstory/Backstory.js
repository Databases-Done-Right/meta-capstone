import image1 from "./Mario and Adrian A.jpg"

const Backstory = () => {
  return (
      <div id="backstory_container">
        <div>
            <h2>Little Lemon</h2>
            <h3>Our History</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div><img src={image1} /></div>
      </div>
    );
  }
  
  export default Backstory;