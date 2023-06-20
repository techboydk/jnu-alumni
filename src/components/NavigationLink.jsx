import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationLink = ({bgc}) => {
  return (
    <Container style={{backgroundColor: `${bgc && bgc}`}}>
      <Link to="/" className="link">
        Home
      </Link>
      <Link className="link">My Profile</Link>
      <Link to='/about' className="link">About the JAA</Link>
      <Link className="link">Alumni Services</Link>
      <Link className="link">Volunteer</Link>
      <Link className="link">Help</Link>
    </Container>
  );
};

export default NavigationLink;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 25.51px;
  padding: 34px 30px;
  a.link {
    all: unset;
    cursor: pointer;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 34px;
    display: flex;
    align-items: center;
    text-align: justify;
    text-decoration-line: underline;
    color: #0066ff;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 1024px) {
    a.link {
      font-size: 20px;
      line-height: normal;
    }
  }
  @media screen and (max-width: 668px) {
    flex: 1;
    a.link {
      font-size: 18px;
      line-height: normal;
    }
  }
  @media screen and (max-width: 368px) {
    a.link {
      font-size: 15px;
    }
  }
`;
