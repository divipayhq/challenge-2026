import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { tokens } from './tokens';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

const variantStyles = {
  primary: css`
    background: ${tokens.colors.primary};
    color: ${tokens.colors.textPrimary};
    &:hover:not(:disabled) {
      background: ${tokens.colors.primaryHover};
    }
  `,
  secondary: css`
    background: ${tokens.colors.accent};
    color: ${tokens.colors.background};
    &:hover:not(:disabled) {
      background: ${tokens.colors.accentHover};
    }
  `,
  danger: css`
    background: ${tokens.colors.accent};
    color: ${tokens.colors.background};
    padding: ${tokens.spacing.sm} ${tokens.spacing.lg};
    &:hover:not(:disabled) {
      background: ${tokens.colors.accentHover};
    }
  `,
};

const StyledButton = styled.button<{ $variant: ButtonProps['variant'] }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${tokens.spacing.md} ${tokens.spacing.xl};
  border: none;
  border-radius: ${tokens.border.radius};
  font-family: ${tokens.fonts.family};
  font-size: ${tokens.fonts.sizeBody};
  font-weight: ${tokens.fonts.weightSemibold};
  cursor: pointer;
  transition: background ${tokens.transitions.normal}, transform ${tokens.transitions.fast};

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    background: ${tokens.colors.disabled};
    color: ${tokens.colors.disabledText};
    cursor: not-allowed;
  }

  ${({ $variant }) => variantStyles[$variant || 'primary']}
`;

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <StyledButton $variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}
