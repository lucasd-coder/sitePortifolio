import styled from 'styled-components';

export const HeaderPage = styled.header`
  #space {
    padding: 0.9rem 4rem;
  }

  nav {
    background: #09090a;

    .navbar-nav a {
      font: 300 1.2rem Ubuntu;
    }
  }

  .navbar-dark .navbar-brand {
    color: #fff;
    font: 300 1.2rem Ubuntu;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: #fff;
  }
  @media (min-width: 992px) {
    .navbar-expand-lg .navbar-nav .nav-link {
      padding-right: 0.7rem;
      padding-left: 0.7rem;
    }
  }

  @media (max-width: 530px) {
    .navbar-brand {
      display: none;
    }
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;
`;
