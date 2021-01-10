import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 5px;
  color: #fff;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.span`
  flex: 1;
  padding: 5px;
`;

export const Content = styled.div`
  padding: 1.4rem;
  width: 10em;
  align-items: center;
  text-align: center;

  p {
    margin-top: 1em;
    font-size: 1.1rem;
  }
`;
