import React from "react";
import styled, { css } from "styled-components";
import { lighten, darken } from 'polished';

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '2.5rem',
    fontSize: '1rem',
  },
  small: {
    height: '2rem',
    fontSize: '0.875rem',
  },
  default: {
    height: '2.25rem',
    fontSize: '1rem',
  },
};

const sizeStyles = css`
  ${({ size }) => {
    const { height, fontSize } = sizes[size] || sizes.default;
    return css`
      height: ${height};
      font-size: ${fontSize};
    `;
  }}
`;

const colorStyle = css`
  ${({ theme, color }) => {
    const colors = theme.colors || {
      blue: '#228be6',
      gray: '#868e96',
      pink: '#f06595',
    };
    const selectedColor = colors[color] || 'aqua';
    return css`
      background: ${selectedColor};
      &:hover {
        background: ${lighten(0.1, selectedColor)};
      }
      &:active {
        background: ${darken(0.1, selectedColor)};
      }
    `;
  }}
`;

const outlineStyle = css`
  ${({ theme, color, outline }) => {
    if (outline) {
      const colors = theme.colors || {
        blue: '#228be6',
        gray: '#868e96',
        pink: '#f06595',
      };
      const selectedColor = colors[color] || 'aqua';
      return css`
        color: ${selectedColor};
        background: none;
        border: 1px solid ${selectedColor};
        &:hover {
          background: ${selectedColor};
          color: white;
        }
      `;
    }
  }}
`;

const fullWidthStyle = css`
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-top: 1rem;
      }
    `}
`;

const StyledButton = styled.button`
  /* Common styles */
  display: inline-flex;
  align-items: center;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  ${sizeStyles}
  ${colorStyle}
  ${outlineStyle}
  ${fullWidthStyle}


`;

function Button({ children, outline, fullWidth, size, color, ...rest }) {
  return (
    <StyledButton outline={outline} fullWidth={fullWidth} color={color} size={size} {...rest}>
      {children}
    </StyledButton>
  );
}

// Default props
Button.defaultProps = {
  color: "blue",
  size: "medium",
  outline: false,
  fullWidth: false,
};

export default Button;
