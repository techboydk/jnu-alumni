import React from "react";
import styled from "styled-components";

const UserCard = ({ img, name, course, batch, profession }) => {
  return (
    <Container className="user_card">
      <div className="img">{img && <img src={img} alt="" />}</div>
      <div className="details">
        <h5 className="name">{name}</h5>
        {batch && profession && (
          <p className="profession_batch">
            {profession}, Class of {batch}
          </p>
        )}
        {course && profession ? (
          <div className="course">{course}</div>
        ) : (
          <div className="course_batch">
            {course} {batch}
          </div>
        )}
      </div>
    </Container>
  );
};

export default UserCard;
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
  .img {
    width: 4rem;
    height: 4rem;
  }
  .details {
    margin-left: 1rem;
    h5,
    .profession_batch,
    .course,
    .course_batch {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      line-height: 32px;
      text-transform: capitalize;
      color: #000000;
      white-space: nowrap;

    }
    .profession_batch,
    .course {
      font-weight: 600;
      font-size: 12.7564px;
      line-height: 19px;
      color: #828282;
    }
    .course_batch {
      font-weight: 600;
      font-size: 20.4103px;
      line-height: 31px;
      color: #413f3f;
    }
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 1rem;
    .img {
      width: 3.5rem;
      height: 3.5rem;
    }
    .details {
      margin-left: 1rem;
      h3,
      .profession_batch,
      .course,
      .course_batch {
        font-size: 18px;
        line-height: normal;
      }
      .profession_batch,
      .course {
        font-size: 12px;
        line-height: normal;
      }
      .course_batch {
        font-size: 18px;
        line-height: normal;
      }
    }
  }
  @media screen and (max-width: 668px) {
    .img {
      width: 3.5rem;
      height: 3.5rem;
    }
    .details {
      margin-left: 1rem;
      h3,
      .profession_batch,
      .course,
      .course_batch {
        font-size: 18px;
        line-height: normal;
      }
      .profession_batch,
      .course {
        font-size: 12px;
        line-height: normal;
      }
      .course_batch {
        font-size: 18px;
        line-height: normal;
      }
    }
  }
  @media screen and (max-width: 368px) {
  }
  .img {
    width: 3rem;
    height: 3rem;
  }
  .details {
    h5,
    .profession_batch,
    .course,
    .course_batch {
      font-size: 16px;
      line-height: normal;
    }
    .profession_batch,
    .course {
      font-size: 12px;
      line-height: normal;
    }
    .course_batch {
      font-size: 14px;
      line-height: normal;
    }
  }
`;
