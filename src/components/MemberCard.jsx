import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MemberCard = ({ img, name, post, batch }) => {
  return (
    <Container>
      <div className="img">{img && <img src={img} alt="" />}</div>
      <Link to={"#"} target="_blank" className="name text">
        {name}
      </Link>
      <p className="post text">{post}</p>
      <p className="batch text">Class of {batch}</p>
    </Container>
  );
};

export default MemberCard;
const Container = styled.div`
  background: #f5f5f5;
  border-radius: 25px;
  padding: 1rem 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .img {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    background: gray;
    margin-bottom: 1rem;
    overflow: hidden;
  }
  a.text {
    text-decoration-line: underline;
  }
  .text {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16.3763px;
    line-height: 25px;
    letter-spacing: -0.005em;
    color: #000000;
    text-align: left;
    width: 100%;
    &.post,
    &.batch {
      text-decoration: none;
    }
  }
  @media screen and (max-width: 1024px) {
    .img {
      width: 5rem;
      height: 5rem;
    }
    .text {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 668px) {
    border-radius: 15px;
    padding: 0.5rem 0.75rem;
    .img {
      width: 3.5rem;
      height: 3.5rem;
    }
    .text {
      font-size: 10px;
      line-height: normal;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 1024px) {
  }
`;
