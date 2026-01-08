import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { tokens } from './tokens';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputGroup = styled.div`
  margin-bottom: ${tokens.spacing.lg};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${tokens.spacing.sm};
  font-weight: ${tokens.fonts.weightSemibold};
  color: ${tokens.colors.textPrimary};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: ${tokens.spacing.md};
  border: ${tokens.border.width} solid ${tokens.colors.accent};
  border-radius: ${tokens.border.radius};
  font-family: ${tokens.fonts.family};
  font-size: ${tokens.fonts.sizeBody};

  &:focus {
    outline: none;
    border-color: ${tokens.colors.textPrimary};
    box-shadow: 0 0 0 2px rgba(200, 239, 0, 0.3);
  }
`;

export function Input({ label, id, ...props }: InputProps) {
  return (
    <InputGroup>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput id={id} {...props} />
    </InputGroup>
  );
}
