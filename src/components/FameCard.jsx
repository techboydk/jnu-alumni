import React from "react";
import styled from "styled-components";

const FameCard = ({ img, name, profession, href }) => {
  return (
    <Container>
      <div className="img">
        <img src={img} alt={name} />
      </div>
      <a rel="noreferrer" href={href} target="_blank" className="title_name link">
        {name}
      </a>
      <p className="profession">{profession}</p>
    </Container>
  );
};

export default FameCard;
const Container = styled.div`
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 35px;
  padding: 15px;
  flex-shrink: 0;
  max-width: 250px;
  &:last-child {
    margin-right: 0;
  }
  .img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    img {
      object-fit: cover;
    }
  }

  .title_name {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    text-decoration-line: underline;
    color: #000000;
    margin: 10px 0;
  }
  .profession {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: normal;
    text-align: center;
    color: #828282;
  }

  @media screen and (max-width: 1024px) {
    min-width: auto;
    width: 12rem;
    height: 12rem;
    border-radius: 15px;
    .img {
      height: 5rem;
      width: 5rem;
      flex-shrink: 0;
    }
    .title_name {
      font-size: 16px;
      line-height: normal;
    }
    .profession {
      font-size: 15px;
      line-height: normal;
    }
  }
`;
