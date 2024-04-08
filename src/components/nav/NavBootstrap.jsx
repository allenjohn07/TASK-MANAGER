import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../config/firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useGetUserInfo } from '../../hooks/useGetUserInfo';
import './Nav.css'; // Import your CSS file

function NavBootstrap() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const { isAuth } = useGetUserInfo();

  const handleLinkClick = (path) => {
    navigate(path);
    setExpanded(false); // Close the navbar when a link is clicked
  };

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userid: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem('auth', JSON.stringify(authInfo));
    navigate('/tasks');
    setExpanded(false); // Close the navbar when Sign In button is clicked
  };

  const signOutwithGoogle = () => {
    try {
      auth.signOut();
      localStorage.clear();
      navigate('/');
      setExpanded(false)
    } catch (error) {
      console.error('Error signing out', error);
      throw error;
    }
  };

  const logoClick = () => {
    navigate('/');
    setExpanded(false); // Close the navbar when Sign In button is clicked
  };

  return (
    <Navbar
      expand="lg"
      className="nav-bg bg-body-tertiary" // Added classNames for background color
      style={{ marginLeft: '2%', marginRight: '2%' }}
      expanded={expanded}
    >
      <Container fluid>
        <Navbar.Brand
          className="gap-2"
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={logoClick}
        >
          <img className="logo" src={logo} alt="logo" /> TASK MANAGER {/* Added className for logo */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-2 pe-3" navbarScroll>
            <Nav.Link onClick={() => handleLinkClick('/home')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleLinkClick('/about')}>About Us</Nav.Link>
            <Nav.Link onClick={() => handleLinkClick('/tasks')}>Tasks</Nav.Link>
          </Nav>
          {isAuth ? (
            <Button onClick={signOutwithGoogle} variant="outline-danger">
              Sign Out
            </Button>
          ) : (
            <Button onClick={signInWithGoogle} variant="outline-success">
              Sign In
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBootstrap;
