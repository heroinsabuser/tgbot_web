import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  padding: 10px 15px;
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
  border: none;
  outline: none;
  cursor: pointer;
`;

const Button = ({ onClick }) => {
  return <ButtonElement onClick={onClick}>Закрыть</ButtonElement>;
};

export default Button;
