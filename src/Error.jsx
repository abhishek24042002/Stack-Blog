import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import error from "./images/error.jpeg";
import { Button } from "./styles/Button";

const Error = () => {
  return (
    <>
      <Wrapper>
      <img src={error} alt={"404 error"} />
      <NavLink to="/">
      <Button>GO BACK</Button>
      </NavLink>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 7rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Error;
