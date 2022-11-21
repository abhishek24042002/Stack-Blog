import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const MarvelSection = (props) => {
  return (
    <>
      <Wrapper>
        <div className="container grid grid-two-column">
          <div className="section-marvel-data">
            <p className="marvel-top-para">Welcome to</p>
            <h1 className="marvel-heading">{props.h1}</h1>
            <p className="marvel-para">
              “Where the Internet is about availability of information, blogging
              is about making information creation available to anyone.”
            </p>
            <Button className="btn explore-btn">
              <NavLink to="/contact">Explore</NavLink>
            </Button>
          </div>
          <div className="section-marvel-image">
            <picture>
              <img src={props.image} alt="computer pic" />
            </picture>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;

  .section-marvel-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .marvel-top-para {
    text-transfrom: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .marvel-heading {
    text-transfrom: uppercase;
    font-size: 6.4rem;
  }

  .marvel-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-marvel-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  @media (max-width: 768px){
    .grid{
      display:flex;
      flex-direction:column;
    }
  }
`;

export default MarvelSection;
