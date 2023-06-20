import React from "react";
import styled from "styled-components";
import UserCard from "./UserCard";
import user1 from "../assets/img/user1.png";
import user2 from "../assets/img/user2.png";

const UsersContainer = ({ title }) => {
  return (
    <Container>
      <h2 className="con_title">{title}</h2>
      <div className="users">
        <UserCard
          img={user1}
          name={"Ankita Rawat"}
          course={"M. Tech"}
          batch={"2024"}
          profession={"student"}
        />
        <UserCard
          img={user2}
          name={"satya prakash"}
          course={"M. Tech"}
          batch={"2024"}
          profession={"student"}
        />
      </div>
    </Container>
  );
};

export default UsersContainer;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.15rem 2rem;
  border-radius: 25px;
  .con_title {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 38px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
  .users {
    display: flex;
    flex-direction: column;
    .user_card {
      h5.name {
        font-size: 15px;
        font-weight: 600;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 1.15rem 1rem;
    border-radius: 25px;
    .con_title {
      font-size: 20px;
      font-weight: 500;

      margin-bottom: 1rem;
    }
    .users {
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 668px) {
  }
  @media screen and (max-width: 368px) {
  }
`;
