import React from "react";
import styled, { css } from "styled-components";
import { lighten, darken } from 'polished';

const colorStyle = css`
    /* Color */
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

const StyledButton = styled.button`
  /* Common styles */
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* Size */
  height: 2.25rem;
  font-size: 1rem;

  ${colorStyle};
  /* Other */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, color, ...rest }) {
  return <StyledButton color={color} {...rest}>{children}</StyledButton>;
}

// Default props
Button.defaultProps = {
  color: "blue"
};

export default Button;
