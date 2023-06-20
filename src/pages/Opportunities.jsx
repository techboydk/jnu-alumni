import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavigationLink from "../components/NavigationLink";
import ContentContainer from "../components/ContentContainer";
import PageHeading from "../components/PageHeading";

const Opportunities = () => {
  return (
    <Container>
      <Header />
      <div className="main">
        <PageHeading title="Feed" />
        <div className="columns">
          <div className="column left">
            <ContentContainer />
            <ContentContainer />
            <ContentContainer />
            <ContentContainer />
            <ContentContainer />
            <ContentContainer />
          </div>
          <div className="column right">
            <NavigationLink bgc="#F5F5F5" />
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Opportunities;
const Container = styled.div`
  .main {
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    padding: 1rem 4rem 2rem;
    margin: 0 0 2rem;
    .columns {
      display: flex;
      gap: 2.25rem;
      margin-top: 2.25rem;
      .column {
        display: flex;
        flex-direction: column;
        &.left {
          flex: 0.7;
          .box {
            aspect-ratio: 1/0.3;
            border-radius: 25px;
          }
        }
        &.right {
          flex: 0.3;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 668px) {
    .main {
      padding: 1rem 2rem 2rem;
      .columns {
        flex-direction: column-reverse;
      }
    }
  }
  @media screen and (max-width: 368px) {
    .main {
      padding: 1rem 1rem 2rem;
      .columns {
        flex-direction: column-reverse;
      }
    }
  }
`;
