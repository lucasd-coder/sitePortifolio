import styled, { css } from 'styled-components';

interface BorderIcon {
  backgroundCard?: string;
}

export const Container = styled.div.attrs({
  id: 'home',
})`
  height: 100vh;
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 80rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 15rem;

    h2 {
      font: 400 2rem Ubuntu;
      margin: 3em;
    }
  }
`;
export const About = styled.div`
  justify-content: center;
  padding-bottom: 3em;
  width: 90%;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 17rem;
  h1 {
    font: 500 2.4rem Ubuntu;
    padding-bottom: 2rem;
  }

  h2 {
    margin: 3rem;
  }
  h3 {
    font: 400 1.6rem Ubuntu;
    margin: 2rem;
  }

  p {
    font: 300 1.4rem Ubuntu;
    padding: 2rem;
  }

  span {
    font: 300 1.4rem Ubuntu;
    margin: 1rem;
  }
`;

export const Phote = styled.div.attrs({
  id: 'about',
})`
  display: block;
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0px auto 24px;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transition: all 0.2s ease 0s;
  }

  @media (max-width: 730px) {
    margin-top: 6em;
  }

  @media (max-width: 414px) {
    margin-top: 15em;
  }
`;
export const CardIcon = styled.div`
  width: 3.2em;
  height: 3.2em;
`;

export const BorderIcon = styled.div<BorderIcon>`
  border-radius: 10%;
  height: 7em;
  width: 7em;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  ${props => css`
    background: ${props.backgroundCard};
  `}
`;

export const Square = styled.div<BorderIcon>`
  height: 12.5em;
  width: 25em;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-right: 2em;
  ${props => css`
    background: ${props.backgroundCard};
  `}

  h3 {
    color: #4d4e5a;
    font: 400 1.4rem Ubuntu;
  }

  p {
    font: 400 1rem Ubuntu;
    color: #000;
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 1em;
  }
  a {
    text-decoration: none;
    color: #0366d6;
    font: 400 1.2rem Ubuntu;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TitleHabilit = styled.h2.attrs({
  id: 'skills',
})``;

export const TitleProject = styled.h2.attrs({
  id: 'projects',
})``;

export const Linha = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  justify-content: center;
  align-items: center;
`;

export const LinhaProject = styled.div`
  width: 80%;
  max-width: 980px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

export const Footer = styled.footer.attrs({
  id: 'contacts',
})`
  display: block;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 2em;
  align-items: center;
  margin-top: 10em;
  p {
    padding: 2em;
  }

  svg {
    margin-right: 1em;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

export const ContainerFliud = styled.div.attrs({
  className: 'container-fluid mb-4',
})``;

export const RowFluid = styled.div.attrs({
  className:
    'row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5',
})``;

export const ColMd = styled.div.attrs({
  className: 'col mt-4',
})``;
