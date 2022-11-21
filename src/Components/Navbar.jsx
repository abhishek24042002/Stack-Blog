import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="menuIcon">
          <ul className="navbar-list">
            <li>
              <NavLink className="navbar-link" to="/">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/service">
                SERVICE
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/about">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;

    li {
      list-style: none;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          text-transfrom: uppercase;
          color: ${({theme}) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active{
          color: ${({theme}) => theme.colors.helper};
        }
      }
    }
  }
`;

export default Navbar;
