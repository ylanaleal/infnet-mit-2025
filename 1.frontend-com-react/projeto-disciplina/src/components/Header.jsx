import React from 'react';
import logo from '../assets/images/villa-pet-logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>
          <img src={logo} width="50px;" style={{ paddingRight: '5px' }} />
          MIT Full Stack 2025
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/users">
                Users
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/feedback">
                Feedback
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

// return (
//   <>
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       <a href="/">
//         <img src={logo} width="50px;" style={{ paddingRight: '5px' }} />
//       </a>
//       <h2>Villa Pet</h2>
//     </div>
//   </>
// );

export default Header;
