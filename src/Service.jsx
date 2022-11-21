import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Data from "./SerData";
import { Button } from "./styles/Button.js";

const Service = () => {
  return (
    <>
      <Happer>
        <h2 className="common-heading">Our Services</h2>
        <div className="container grid grid-three-column">
          {Data.map((value) => {
            return (
              <div key={value.id} className="card">
                <figure>
                  <img src={value.imglink} alt="tech_img" />
                </figure>
                <div className="card-data">
                  <h3>{value.title}</h3>
                  <p>{value.para}</p>
                  <NavLink to="/service">
                    <Button className="btn">Read More</Button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </Happer>
    </>
  );
};

const Happer = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;

      .btn {
        margin: 2rem auto;
        background-color: rgb(0 0 0 / 0%);
        border: 0.1rem solid rgb(98 84 243);
        color: rgb(98 84 243);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;

        &:hover {
          background-color: rgb(98 84 243);
          color: #fff;
        }
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transfrom: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
`;

export default Service;
