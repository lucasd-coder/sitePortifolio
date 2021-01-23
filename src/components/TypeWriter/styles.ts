import styled from 'styled-components';

export const TypeWriterContainer = styled.div`
  line-height: 7.8rem;
  font: 500 4rem Ubuntu;
  display: block;
  justify-content: center;
  margin-top: 10rem;

  @media (max-width: 768px) {
    line-height: 5rem;
    font: 400 3rem Ubuntu;
  }

  @media (max-width: 730px) {
    line-height: 5rem;
    font: 300 2.2rem Ubuntu;
  }

  @media (max-width: 414px) {
    line-height: 4rem;
    font: 300 1.7rem Ubuntu;
  }

  @media (max-width: 360px) {
    line-height: 4rem;
    font: 300 1.5rem Ubuntu;
  }

  strong {
    font-weight: 500;
  }
`;
