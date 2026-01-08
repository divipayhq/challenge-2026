import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { tokens } from './tokens';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const StyledCard = styled.div`
  background: ${tokens.colors.background};
  padding: ${tokens.spacing.xl};
  border-radius: ${tokens.border.radius};
  border: ${tokens.border.width} solid ${tokens.colors.border};
  box-shadow: ${tokens.shadows.md};
`;

export function Card({ children, ...props }: CardProps) {
  return <StyledCard {...props}>{children}</StyledCard>;
}
