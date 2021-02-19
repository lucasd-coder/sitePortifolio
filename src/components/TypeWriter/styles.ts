import styled from 'styled-components';

export const TypeWriterContainer = styled.div`
  line-height: 7.5rem;
  font: 500 3.7rem Ubuntu;
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  @media (max-width: 768px) {
    line-height: 4rem;
    font: 400 2.7rem Ubuntu;
  }

  @media (max-width: 730px) {
    line-height: 5rem;
    font: 300 2rem Ubuntu;
    margin-top: 3rem;
  }

  @media (max-width: 414px) {
    line-height: 4rem;
    font: 300 1.4rem Ubuntu;
  }

  @media (max-width: 360px) {
    line-height: 4rem;
    font: 400 1.2rem Ubuntu;
  }

  strong {
    font-weight: 500;
  }
`;
