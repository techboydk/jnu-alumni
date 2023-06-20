import React from "react";
import styled from "styled-components";

const PageHeading = ({ title }) => {
  return <Container>{title}</Container>;
};

export default PageHeading;
const Container = styled.h2`
  font-family: "Libre Baskerville";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 62px;
  display: flex;
  align-items: center;
  text-align: justify;
  color: #000000;
  @media screen and (max-width: 1024px){
    font-size: 32px;
  }
  @media screen and (max-width: 668px){
    line-height: normal;
    font-size: 25px;
  }
  @media screen and (max-width: 368px){
    font-size: 20px;
  }
`;
