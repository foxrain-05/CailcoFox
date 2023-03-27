import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background: rgb(250, 250, 250);
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

const LogoText = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: rgb(60, 60, 60);
  margin-right: 2rem;
`;

const LoginBtn = styled.button`
  background: rgb(100, 100, 100);
  color: rgb(250, 250, 250);
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin: 0 0.6rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(250, 250, 250);
    color: rgb(100, 100, 100);
  }
`;

// bule button for join us
const JoinBtn = styled.button`
  background: rgb(100, 100, 100);
  color: rgb(250, 250, 250);
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin: 0 0.6rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(250, 250, 250);
    color: rgb(100, 100, 100);
  }
`;

const DivBox = styled.div`
  display: flex;
  align-items: center;
`;

const Bar = styled(Link)`
  color: rgb(60, 60, 60);
  text-decoration: none;
  padding: 1.6rem 1.5rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;
  magin-batton: 0.5rem;
  &:hover {
    border-bottom: 4px solid rgb(100, 100, 100);
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <Nav>
      <DivBox>
        <LogoLink to="/">
          <DivBox>
            <Logo src="logo.png" alt="logo" />
            <LogoText>CailcoFox</LogoText>
          </DivBox>
        </LogoLink>
        <Bar to="/models">모델</Bar>
        <Bar to="/recode">녹음</Bar>
      </DivBox>

      <DivBox>
        <Link to="/login">
          <LoginBtn>로그인</LoginBtn>
        </Link>
        <Link to="/about">
          <JoinBtn>회원가입</JoinBtn>
        </Link>
      </DivBox>
    </Nav>
  );
};

export default Navbar;
