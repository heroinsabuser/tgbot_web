
import styled from "styled-components";

const ButtonElement = styled.button`
  padding: 10px 15px;
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
  border: none;
  outline: none;
  cursor: pointer;
`;

const Button = ({ onClick, className, children }) => {
  return <ButtonElement className={className} onClick={onClick}>{children}</ButtonElement>;
};

export default Button;
