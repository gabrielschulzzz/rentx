import React from 'react'
import { useTheme } from 'styled-components';

import {
  Container,
  Title
} from './styles';

interface Props {
    title: string;
    color?: string;
}

export function Button({ title, color, ...rest }: Props) {
    const theme = useTheme()

  return (
      <Container color={color ? color : theme.colors.main} {...rest}>
          <Title>{title}</Title>
      </Container>
  );
}