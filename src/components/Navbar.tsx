import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
  text-decoration: none;
  border: none;
`;

const Button = styled.button`
  background: #18151e;
  border-radius: 15px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #fafafa;
  outline: none;
  border: none;
  padding: 8px 16px;
  &:hover {
    cursor: pointer;
  }
`;

const TTTTT = styled.div`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;

  color: #fafafa;
  display: flex;
  align-items: center;
  margin-right: 16px;
`;
interface Props {
  onClick: () => void;
  account: string;
}
const Navbar = ({ onClick, account }: Props) => {
  const navigate = useNavigate();
  return (
    <NavWrapper>
      <Link to="/">
        <Logo>borantia.</Logo>
      </Link>
      <div onClick={()=>navigate("/leaderboard")}>Leaderboard</div>
      {account ? (
        <TTTTT
          onClick={() => {
            navigate("/profile");
          }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/22779056?s=120&v=4"
            alt=""
            style={{ height: "32px", borderRadius: "50%", marginRight: "16px" }}
          />
          {account.substring(0, 5) + "..."}
        </TTTTT>
      ) : (
        <Button onClick={() => onClick()}>Connect Wallet</Button>
      )}
    </NavWrapper>
  );
};

export default Navbar;
