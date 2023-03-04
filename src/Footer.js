import footer_image from "./footer-logo.jpg"

const Footer = () => {
    return (
      <footer>
        <div>
            <img src={footer_image} />
        </div>
        <div>
            <h2>Navigation</h2>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservations</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </div>
        <div>
            <h2>Contact</h2>
            <p>1234 Main St.<br />Dallas, TX 12345</p>
            <p>(123) 456-7890</p>
            <p>email@here.com</p>
        </div>
        <div>
            <h2>Social Media</h2>
            <ul>
                <li><a href="https://www.facebook.com">Facebook</a></li>
                <li><a href="https://www.linkedin.com">Linked In</a></li>
            </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;