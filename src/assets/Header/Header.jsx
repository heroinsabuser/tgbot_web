import React from "react";
import styled from "styled-components";
import Button from "../Button/button";
import { useTelegram } from "../hooks/useTelegram";

const HeaderElement = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Username = styled.span`
  margin-left: auto;
`;

const Header = () => {
    const {user,onClose} = useTelegram()
    return (
    <HeaderElement>
      <Button onClick={onClose}></Button>
      <Username>{user?.username}</Username>
    </HeaderElement>
  );
};

export default Header;
