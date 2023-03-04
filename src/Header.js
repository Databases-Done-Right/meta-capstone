import Nav from "./Nav"
import logo from "./Logo.svg"

const Header = () => {
    return (
      <header>
        <img src={logo} />
        <nav>
          <Nav />
        </nav>
      </header>
    );
  }
  
  export default Header;