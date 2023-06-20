import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <Container>
      <Header />
      <div className="main"></div>
      <Footer />
    </Container>
  );
};

export default About;
const Container = styled.div`
  @media screen and (max-width: 1024px){
    
  }
  @media screen and (max-width: 668px){

  }
  @media screen and (max-width: 368px){

  }`;
