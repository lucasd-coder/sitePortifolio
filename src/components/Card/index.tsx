import React from 'react';

import { Container, Content, Header, Title } from './styles';

interface CardProps {
  title?: string;
}

const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default Card;
