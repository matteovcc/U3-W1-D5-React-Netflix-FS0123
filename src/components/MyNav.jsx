import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import { BiSearch, BiBellFill } from 'react-icons/bi';
import logo from '../assets/netflix_logo.png';
import profilePic from "../assets/avatar.png"

const NavBar = () => (
  <Navbar  bg="transparent" expand="lg" className="p-3 mb-5">
    <Navbar.Brand href="#">
      <img
        src={logo}
        width="100px"
        alt="Logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarNav" />
    <Navbar.Collapse id="navbarNav">
      <Nav className="me-auto ">
        <Nav.Link href="#" className="text-white">
          Home
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          TV Shows
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          Movies
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          Recently Added
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          My List
        </Nav.Link>
      </Nav>
      <div className="d-flex align-items-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <span className="mx-3 text-white">KIDS</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
        
          viewBox="0 0 16 16"
          className="me-3"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>
          <img
            src={profilePic}
            alt=""
            className="rounded-circle me-2"
            width="32"
            height="32"
          />

        <NavDropdown id="dropdownUser" align="end" >
          <NavDropdown.Item href="profile.html">Profile</NavDropdown.Item>
          <NavDropdown.Item href="settings.html">Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="index.html">Home</NavDropdown.Item>
        </NavDropdown>
      </div>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
