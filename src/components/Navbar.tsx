import React from "react";
import styled from "styled-components";

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 12px 24px;
`;

const Logo = styled.div`
  color: #f69af866;
  font-size: 30px;
  font-weight: 700;
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <Logo>borantia.</Logo>
      <span>Connect Wallet</span>
    </NavWrapper>
  );
};

export default Navbar;
