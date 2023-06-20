import React from "react";
import styled from "styled-components";
import jnuLogo2 from "../assets/svg/logo2.svg";

const MeetEvent = ({ logo, title, date, EventName }) => {
  return (
    <Container>
      <div className="img">
        <img src={logo ? logo : jnuLogo2} alt="eventimage" />
      </div>
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="date">{date}</p>
        <h3 className="event_name">{EventName}</h3>
      </div>
    </Container>
  );
};

export default MeetEvent;
const Container = styled.div`
  display: flex;
  margin-bottom: 25px;
  .img {
    width: 67.6px;
    height: 67.6px;
    background: #d5d5d5;
    border-radius: 50%;
    padding: 0.75rem;
    flex-shrink: 0;
  }
  .content {
    margin-left: 2rem;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    .title {
      font-size: 20.28px;
      line-height: 30px;
      color: #ffffff;
    }
    .date {
      font-size: 13.52px;
      line-height: 20px;
      color: #cbcbcb;
    }
    .event_name {
      font-size: 16.9px;
      line-height: 25px;
      color: #ffa500;
    }
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
    .img {
      width: 3rem;
      height: 3rem;
    }
    .content {
      margin-left: 1rem;
      .title {
        font-size: 18px;
        line-height: normal;
      }
      .event_name {
        font-size: 15px;
        line-height: normal;
      }
    }
  }
  @media screen and (max-width: 368px) {
    margin-bottom: 20px;
    .img {
      width: 2.5rem;
      height: 2.5rem;
      padding: 0.5rem;
    }
    .content {
      margin-left: .75rem;
      .title {
        font-size: 13px;
        line-height: normal;
      }
      .event_name {
        font-size: 12px;
        line-height: normal;
      }
    }
  }
`;
