import React from 'react';
import Typewriter from 'typewriter-effect';

import { TypeWriterContainer } from './styles';

interface TypeWriterProps {
  value: string;
  valas: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ value, valas }) => {
  const styleTypeWriter = `
      <strong>${value}</strong>
  `;
  const comeBack = `
  <strong>${valas}</strong>

  `;
  return (
    <TypeWriterContainer>
      <Typewriter
        options={{
          loop: true,
          delay: 75,
        }}
        onInit={typewriter => {
          typewriter
            .pauseFor(2500)
            .typeString(styleTypeWriter)
            .pauseFor(300)
            .deleteChars(29)
            .typeString(comeBack)
            .pauseFor(2500)
            .start();
        }}
      />
    </TypeWriterContainer>
  );
};

export default TypeWriter;
