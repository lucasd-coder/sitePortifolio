import React from 'react';

import { Link } from 'react-router-dom';
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
        <Link to="/">lucasdasilva524@Hotmail.com</Link>
        <NavItem>
          <p className="home">
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#about">Sobre mim</a>
          </p>
          <p>
            <a href="#skills">Habilidades</a>
          </p>
          <p>
            <a href="#projects"> Projetos</a>
          </p>
          <p className="contact">
            <a href="#contacts">Contato</a>
          </p>
        </NavItem>
      </Content>
      <HeaderContent>{children}</HeaderContent>
    </HeaderPage>
  );
};

export default Header;
