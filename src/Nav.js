//import { Link, Route, Switch } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="horizontal_menu">
      <li><a href="/">Home</a></li>
      <li><a href="about">About</a></li>
      <li><a href="menu">Menu</a></li>
      <li><a href="reservations">Reservations</a></li>
      <li><a href="order">Order Online</a></li>
      <li><a href="testimonials">Testimonials</a></li>
    </ul>
  );
}

export default Nav;
