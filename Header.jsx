import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../Header/Header.css';
import infoHeader from '../../../store/HeaderDataBase';

function Header() {
  return (
    <>
      {infoHeader.Data4.map((Data4, index) => (
        <Navbar className='nav' key={index}>
          <Container className="navbar-container">
            <Navbar.Brand href="#home">
              <img src={Data4.logo} alt="Logo" className="logo" />
            </Navbar.Brand>
    
            <Nav className="me-auto navbar-center">
              <Nav.Link href="#Pedidos">{Data4.texto1}</Nav.Link>
              <Nav.Link href="#Menu">{Data4.texto2}</Nav.Link>
              <Nav.Link href="#Ubicaciones">{Data4.texto3}</Nav.Link>
              <Nav.Link href="#Nosotros">{Data4.texto4}</Nav.Link>
            </Nav>
    
            <div className="navbar-icons">
              <img src={Data4.instagram} alt="Instagram" className="icon" />
              <img src={Data4.facebook} alt="Facebook" className="icon" />
              <img src={Data4.whatsapp} alt="WhatsApp" className="icon" />
            </div>
    
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
