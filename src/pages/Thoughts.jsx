import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHeading from "../components/PageHeading";
import NavigationLink from "../components/NavigationLink";
import ContentContainer from "../components/ContentContainer";
import Thought from "../components/Thought";

const Thoughts = () => {
  const thoughts = [
    {
      name: "dipesh yadav",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      description: "description",
    },
    {
      name: "dipesh yadav",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      description: "description",
    },
    {
      name: "dipesh yadav",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      description: "description",
    },
    {
      name: "dipesh yadav",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      description: "description",
    },
  ];
  return (
    <Container>
      <Header />
      <div className="main">
        <PageHeading title="Thoughts" />
        <div className="columns">
          <div className="column left">
            {thoughts.map((thought, index) => {
              return <Thought key={index} thought={thought} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Thoughts;
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
            aspect-ratio: 1/0.5;
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
