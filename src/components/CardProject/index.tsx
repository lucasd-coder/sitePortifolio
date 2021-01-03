import React from 'react';

import { Container, Content, Header, Title } from './styles';

interface CardProjectProps {
  title?: string;
}

const CardProject: React.FC<CardProjectProps> = ({ children, title }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default CardProject;
