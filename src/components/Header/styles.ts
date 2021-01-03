import styled from 'styled-components';

export const HeaderPage = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  background: #212121;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
  /* padding: 16px 24px; */
  margin: 0 auto;
  margin-top: 2em;
  transition: all 0.2s;

  a {
    text-decoration: none;
    color: #fff;
    position: absolute;
    margin-left: 8em;
    font: 300 1.2rem Ubuntu;
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

  img {
    height: 40px;
    width: 40px;
    color: #fff;
  }
`;

export const NavItem = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-right: 8em;
  padding: 2em;
  margin-bottom: 1.2em;

  p {
    font: 300 1.2rem Ubuntu;
    margin-right: 6em;
    a {
      text-decoration: none;
    }

    &.home {
      margin-right: 4em;
    }

    &.contact {
      margin-left: -1em;
    }
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;
`;
