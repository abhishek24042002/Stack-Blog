import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../images/logo2.jpg';
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <MainHeader>
        <NavLink to="/">
            <img src={logo} alt={"logo"} className="logo"/>
        </NavLink>
        <Navbar/>
      </MainHeader>
    </>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({theme}) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: 4rem;
    max-weight: 30%;
  }
`;

export default Header;
