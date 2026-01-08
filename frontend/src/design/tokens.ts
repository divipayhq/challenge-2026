export const tokens = {
  colors: {
    primary: '#C8EF00',
    primaryHover: '#b3d600',
    accent: '#546E7A',
    accentHover: '#455a64',
    background: '#FFFFFF',
    textPrimary: '#000000',
    textSecondary: '#666666',
    link: '#546E7A',
    error: '#d32f2f',
    errorBg: '#ffebee',
    border: '#eeeeee',
    disabled: '#e0e0e0',
    disabledText: '#999999',
  },
  fonts: {
    family: 'Arial, sans-serif',
    sizeH1: '52px',
    sizeH2: '24px',
    sizeBody: '14px',
    weightNormal: 400,
    weightSemibold: 600,
  },
  spacing: {
    unit: 4,
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
  },
  border: {
    radius: '8px',
    width: '1px',
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    fast: '0.1s ease',
    normal: '0.2s ease',
  },
} as const;

export type Tokens = typeof tokens;
