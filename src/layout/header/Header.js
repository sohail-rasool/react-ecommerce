import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBars, FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../services/firebase/firebase.utils';

import SwitchTheme from '../../components/SwitchButton/SwitchTheme';
import CartDropDown from '../../components/CartDropDown/CartDropDown';
import { toggleDropDownAction } from '../../store/actions/cartDropDownAction';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.googleUser.currentUser);
  const showDropDown = useSelector(
    (state) => state.showCartDropDown.cartDropDown
  );

  const toggleDropDown = () => {
    dispatch(toggleDropDownAction());
  };

  return (
    <header>
      <Navbar bg='light' expand='lg' className='custom-navbar'>
        <Container className='position-relative'>
          <Navbar.Brand as={Link} to='/'>
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle>
            <FaBars />
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto align-items-center'>
              <Nav.Link as={Link} to='/shop'>
                SHOP
              </Nav.Link>
              <Nav.Link as={Link} to='/contact'>
                CONTACT
              </Nav.Link>

              {user ? (
                <Nav.Link onClick={() => auth.signOut()}>SIGN Out</Nav.Link>
              ) : (
                <Nav.Link as={Link} to='/signin'>
                  SIGN IN
                </Nav.Link>
              )}

              <Nav.Link
                className='cart-icon position-relative'
                onClick={toggleDropDown}
              >
                <FaShoppingCart />
                (0)
                {showDropDown && <CartDropDown />}
              </Nav.Link>
              <SwitchTheme className='ms-2' />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
