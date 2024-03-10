/* eslint-disable  */

import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MyNavbar = () => {
  /* 
    Renders Navbar, uses Nav.Link and Nav.Brand bootstrap components 
    with "as={Link}" attribute to render the nav.link components as 
    react-router links and "to='/page/" to link to page as with react-router-dom
  */
  return (
    <Navbar expand="lg" className="bg-gray-400 flex flex-row items-center">
      <Navbar.Brand className="ml-6 inline-flex items-center" to="/" as={Link}>
        <img
          src="https://i.pinimg.com/474x/f4/93/59/f49359cb388713901955962e6eb075af.jpg"
          width="50px"
          height="50px"
          className="d-inline-block align-top mr-3"
        />
        Rick and Morty
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ml-6">
          <Nav.Link
            className="hover:drop-shadow"
            to="/about/"
            id="aboutLink"
            as={Link}
          >
            About
          </Nav.Link>
          <Nav.Link
            className="hover:drop-shadow"
            to="/characters/"
            id="charactersLink"
            as={Link}
          >
            Characters
          </Nav.Link>
          <Nav.Link
            className="hover:drop-shadow"
            to="/favorites/"
            id="favoritesLink"
            as={Link}
          >
            Favorites
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
