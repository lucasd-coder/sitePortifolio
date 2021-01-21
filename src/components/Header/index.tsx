import React from 'react';

import { Button } from 'react-bootstrap';
import {
  Content,
  HeaderPage,
  IcoEmail,
  NavItem,
  HeaderContent,
} from './styles';
import envelope from '../../assets/icons/icon-email.svg';

const Header: React.FC = ({ children }) => {
  return (
    <HeaderPage>
      <Content>
        <IcoEmail>
          <img src={envelope} alt="icon-email" />
        </IcoEmail>
        <a className="mail" href="/">
          lucasdasilva524@Hotmail.com
        </a>

        <Button className="navbar-toggler" type="button" data-toggle="collapse">
          <span className="navbar-toggler-icon" />
        </Button>

        <NavItem>
          <div className="menu-toggle">
            <div className="one" />
            <div className="two" />
            <div className="three" />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">Sobre mim</a>
              </li>
              <li>
                <a href="#skills">Habilidades</a>
              </li>
              <li>
                <a href="#projects"> Projetos</a>
              </li>
              <li>
                <a href="#contacts">Contato</a>
              </li>
            </ul>
          </nav>
        </NavItem>
      </Content>
      <HeaderContent>{children}</HeaderContent>
    </HeaderPage>
  );
};

export default Header;
