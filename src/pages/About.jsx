import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHeading from "../components/PageHeading";
import ContentContainer from "../components/ContentContainer";
import MemberCard from "../components/MemberCard";

const About = () => {
  return (
    <Container>
      <Header />
      <div className="main">
        <PageHeading title="About JAA" />
        <div className="columns">
          <div className="column">
            <ContentContainer>
              <p className="text">
                Our JNU days echo within us, weaving our paths and culminating
                in our esteemed status as JNU alumni. As we embark on a lifelong
                journey of learning, we remain connected, cherishing the
                unforgettable memories formed during our pivotal years at JNU.
                We owe a debt of gratitude to this institution, where formal and
                informal education shaped us into the individuals we are today.
              </p>
              <p className="text">
                To honor this debt, let's pledge to contribute our time and
                efforts to enhance our alma mater, ensuring JNU thrives as a
                beacon of knowledge and growth. Together, we can create a
                nurturing environment that elevates JNU to new heights of
                excellence. The Alumni Association of JNU (JAA) reconnects us
                with our cherished alma mater. JAA fosters a sense of community
                among alumni, offering personal and professional support through
                community-driven initiatives.
              </p>
            </ContentContainer>
          </div>
          <div className="column">
            <ContentContainer>
              <p className="text">
                Our JNU days echo within us, weaving our paths and culminating
                in our esteemed status as JNU alumni. As we embark on a lifelong
                journey of learning, we remain connected, cherishing the
                unforgettable memories formed during our pivotal years at JNU.
                We owe a debt of gratitude to this institution, where formal and
                informal education shaped us into the individuals we are today.
              </p>
              <p className="text">
                To honor this debt, let's pledge to contribute our time and
                efforts to enhance our alma mater, ensuring JNU thrives as a
                beacon of knowledge and growth. Together, we can create a
                nurturing environment that elevates JNU to new heights of
                excellence. The Alumni Association of JNU (JAA) reconnects us
                with our cherished alma mater. JAA fosters a sense of community
                among alumni, offering personal and professional support through
                community-driven initiatives.
              </p>
            </ContentContainer>
          </div>
        </div>
        <div className="member_container">
          <h2 className="member_container_title">Executive Committee</h2>
          <div className="members">
            <MemberCard
              name={"Shri. Rajesh Kumar"}
              post={"President"}
              batch={"1986-1990"}
            />
            <MemberCard
              name={"Shri. Rajesh Kumar"}
              post={"President"}
              batch={"1986-1990"}
            />
            <MemberCard
              name={"Shri. Rajesh Kumar"}
              post={"President"}
              batch={"1986-1990"}
            />
            <MemberCard
              name={"Shri. Rajesh Kumar"}
              post={"President"}
              batch={"1986-1990"}
            />
            <MemberCard
              name={"Shri. Rajesh Kumar"}
              post={"President"}
              batch={"1986-1990"}
            />
            <MemberCard
              name={"Shri. Rajesh Kumar"}
              post={"President"}
              batch={"1986-1990"}
            />
            <MemberCard
              name={"Shri. Rajesh Kumar"}
              post={"President"}
              batch={"1986-1990"}
            />
            <MemberCard
              name={"Shri. Rajesh Kumar"}
              post={"President"}
              batch={"1986-1990"}
            />
            <MemberCard
              name={"Shri. Rajesh Kumar"}
              post={"President"}
              batch={"1986-1990"}
            />
          </div>
        </div>
        <div className="member_container">
          <h2 className="member_container_title">Development Team</h2>
          <div className="members">
            <MemberCard
              name={"Dipesh Yadav"}
              post={"Frontend Developer"}
              batch={"2020-2025"}
            />
            <MemberCard
              name={"Dipesh Yadav"}
              post={"Frontend Developer"}
              batch={"2020-2025"}
            />
            <MemberCard
              name={"Dipesh Yadav"}
              post={"Frontend Developer"}
              batch={"2020-2025"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default About;
const Container = styled.div`
  .main {
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    padding: 1rem 4rem 2rem;
    margin: 0 0 2rem;
    .columns {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      align-items: center;
      margin: 1rem 0 3rem;
      .column {
        flex: 1;
        p.text {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 300;
          font-size: 22px;
          line-height: 35px;
          display: flex;
          align-items: center;
          text-align: justify;
          color: #000000;
          margin-bottom: 1rem;
        }
      }
    }
    .member_container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 5rem;
      .member_container_title {
        font-family: "Libre Baskerville";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 50px;
        text-align: center;
        color: #000000;
        margin: 1rem 0 2rem;
      }
      .members {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .main {
      padding: 1rem 3rem 2rem;
      margin: 0 0 2rem;
      .columns {
        gap: 1rem;
        margin: 1rem 0 2rem;
        flex-direction: column;
        .column {
          p.text {
            font-size: 18px;
          }
        }
      }
      .member_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 3rem;
        .member_container_title {
          font-size: 30px;
          line-height: 40px;
        }
        .members {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
      }
    }
  }
  @media screen and (max-width: 668px) {
    .main {
      padding: 1rem 2rem 2rem;
      margin: 0 0 2rem;
      .columns {
        gap: 0.5rem;
        margin: 1rem 0 2rem;
        flex-direction: column;
        .column {
          p.text {
            font-size: 16px;
            line-height: normal;
          }
        }
      }
      .member_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
        .member_container_title {
          font-size: 25px;
          line-height: normal;
        }
        .members {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
      }
    }
  }
  @media screen and (max-width: 368px) {
    .main {
      padding: 1rem 1rem 2rem;
      margin: 0 0 2rem;
      .columns {
        gap: 0.25rem;
        margin: 1rem 0 1rem;
        flex-direction: column;
        .column {
          p.text {
            font-size: 15px;
            line-height: normal;
          }
        }
      }
      .member_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
        .member_container_title {
          font-size: 20px;
          line-height: normal;
        }
        .members {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
      }
    }
  }
`;
