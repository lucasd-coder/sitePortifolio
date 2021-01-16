import styled from 'styled-components';

export const HeaderPage = styled.header.attrs({
  id: 'menu-section',
})`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: #212121;

  @media (max-width: 730px) {
    nav {
      display: none;
    }

    .one,
    .two,
    .three {
      background-color: #fff;
      height: 5px;
      width: 100%;
      margin: 6px auto;

      transition-duration: 0.3s;
    }

    .menu-toggle {
      width: 40px;
      height: 30px;
      margin-right: 20px;
    }

    /* fullscreen */
    &.on {
      position: absolute;
      top: 0;
      background: #212121;
      left: 0;
      width: 100vw;
      height: 100vh;

      z-index: 10;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    &.on nav {
      display: block;
    }

    &.on .menu-toggle {
      position: absolute;
      right: 25px;
      top: 15px;
    }
    &.on .menu-toggle .one {
      transform: rotate(45deg) translate(7px, 7px);
    }
    &.on .menu-toggle .two {
      opacity: 0;
    }

    &.on .menu-toggle .three {
      transform: rotate(-45deg) translate(8px, -9px);
    }

    &.on nav ul {
      text-align: center;
      display: block;
    }

    &.on nav ul a {
      transition-duration: 0.5s;
      font-size: 1.7rem;
      line-height: 4rem;
      display: block;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 2em;
  transition: all 0.2s;

  .mail {
    text-decoration: none;
    color: #fff;
    position: absolute;
    margin-left: 7.5em;
    font: 300 1.2rem Ubuntu;
    margin-bottom: 1em;
  }
  @media (max-width: 1100px) {
    .mail {
      font: 300 1rem Ubuntu;
      margin-left: 8.5em;
    }
  }

  @media (max-width: 980px) {
    .mail {
      margin-left: 8.5em;
    }
  }

  @media (max-width: 830px) {
    .mail {
      font: 300 0.8rem Ubuntu;
      margin-left: 7em;
    }
  }
  @media (max-width: 730px) {
    .mail {
      display: none;
    }
  }
`;

export const IcoEmail = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4em;
  margin-bottom: 1em;

  img {
    height: 30px;
    width: 30px;
    color: #fff;
  }

  @media (max-width: 830px) {
    margin-left: 2em;
    height: 40px;
    width: 40px;
  }
  @media (max-width: 730px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 3em;
  margin-right: 5em;

  nav ul {
    display: flex;
  }

  nav ul li {
    list-style: none;
  }

  nav ul li a {
    text-decoration: none;
    font: 300 1.2rem Ubuntu;
    padding: 1.7rem;
    transition: all 250ms linear 0s;
    color: #fff;
  }

  @media (max-width: 1145px) {
    nav ul li a {
      padding: 1.2rem;
    }
  }

  @media (max-width: 1100px) {
    nav ul li a {
      font: 300 1rem Ubuntu;
    }
  }
  @media (max-width: 980px) {
    nav ul li a {
      font: 300 1rem Ubuntu;
      padding: 1rem;
    }
  }
  @media (max-width: 910px) {
    nav ul li a {
      padding: 0.8rem;
    }
  }
  @media (max-width: 870px) {
    nav ul li a {
      font: 300 0.8rem Ubuntu;
    }
  }
  @media (max-width: 760px) {
    nav ul li a {
      padding: 0.8rem;
    }
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;
`;
