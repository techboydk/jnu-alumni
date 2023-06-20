import React, { useEffect } from "react";
import styled from "styled-components";

const Input = ({ type, name, placehodler, onChange, inputValue }) => {
  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  return (
    <Container>
      <input
        type={type}
        name={name}
        placeholder={placehodler}
        onChange={onChange}
        value={inputValue || ""}
        required
      />
    </Container>
  );
};

export default Input;
const Container = styled.label`
  input {
    outline: none;
    border: none;
    background: #ffffff;
    border-radius: 25.51px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #8f8f8f;
    padding: 5px 15px;
    width: 100%;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 1024px) {
    input {
      margin-bottom: 20px ;
      font-size: 18px ;
    }
  }
  @media screen and (max-width: 668px) {
    input {
      margin-bottom: 20px !important;
      font-size: 15px !important;
    }
  }
  @media screen and (max-width: 368px) {
    input {
      margin-bottom: 15px !important;
      font-size: 15px !important;
    }
  }
`;
