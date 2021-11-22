import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaBars, FaShoppingCart } from 'react-icons/fa';

import SwitchTheme from '../../components/SwitchButton/SwitchTheme';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Navbar bg='light' expand='lg' className='custom-navbar'>
        <Container className='position-relative'>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle>
            <FaBars />
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto align-items-center'>
              <Nav.Link href='#home'>SHOP</Nav.Link>
              <Nav.Link href='#link'>CONTACT</Nav.Link>
              <Nav.Link href='#link'>SIGN IN</Nav.Link>
              <NavDropdown
                title={<FaShoppingCart />}
                className='pt-0'
                id='basic-nav-dropdown'
              >
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#theme-changer'>
                <SwitchTheme className='ms-2' />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
