import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import { HeaderPage, HeaderContent } from './styles';
import envelope from '../../assets/icons/icon_Email.svg';

const Header: React.FC = ({ children }) => {
  return (
    <HeaderPage>
      <Navbar
        className="pt-5 pb-5"
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
        id="space"
      >
        <Navbar.Brand href="/">
          <img src={envelope} width="70" height="70" alt="Email" />
          lucasdasilva524@Hotmail.com
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto" />
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#about">
              Sobre mim
            </Nav.Link>
            <Nav.Link href="#skills">Habilidades</Nav.Link>
            <Nav.Link href="#projects">Projetos</Nav.Link>
            <Nav.Link href="#contacts">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <HeaderContent>{children}</HeaderContent>
    </HeaderPage>
  );
};

export default Header;
