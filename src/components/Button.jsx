import React from "react";
import styled from "styled-components";

const Button = ({ name, bgc, onclickFuction }) => {
  return (
    <Container
      style={
        bgc
          ? { background: `${bgc}` }
          : { background: `none`, border: "1px solid black", color: "black" }
      }
      onClick={onclickFuction && onclickFuction}
    >
      {name}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  all: unset;
  border-radius: 25.51px;
  padding: 5px 35px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 34px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  justify-content: center;
  text-transform: capitalize;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    font-size: 18px;
    line-height: 25px;
    padding: 8px 30px;
  }
`;
