import React from "react";
import styled from "styled-components";
import likeIcon from "../assets/svg/Like icon.svg";
import commentIcon from "../assets/svg/Comment icon.svg";

const ContentContainer = ({ children, title, text }) => {
  return (
    <Container className="box">
      {children}
      {title && (
        <React.Fragment>
          <div className="content">
            {title && <h3 className="title">{title}</h3>}
            {text && <p className="text">{text}</p>}
          </div>
          <div className="buttons">
            <div className="like">
              <div className="img">
                <img src={likeIcon} alt="" />
              </div>
              <p>Like</p>
            </div>
            <div className="comment">
              <div className="img">
                <img src={commentIcon} alt="" />
              </div>
              <p>Comment</p>
            </div>
          </div>
        </React.Fragment>
      )}
    </Container>
  );
};

export default ContentContainer;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  border-radius: 25.51px;
  padding: 1rem 1.25rem;
  margin-bottom: 1rem;
  position: relative;

  .user_card {
    align-items: flex-start;
    margin-bottom: 0.75rem;
    .img {
      width: 4rem;
      height: 4rem;
    }
    h5.name {
      font-weight: 600;
      font-size: 20px;
    }
  }
  .content {
    margin-bottom: 1.5rem;
    p.text,
    h3.title {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 26px;
      color: #413f3f;
    }
    h3.title {
      font-weight: 600;
      font-size: 20px;
      line-height: 38px;

      color: #212121;
    }
  }
  .buttons {
    display: flex;
    justify-content: flex-end !important;
    align-items: center;
    gap: 1.5rem;
    padding: 0.25rem 0.5rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 31px;
    color: #575050;
    .like,
    .comment {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      cursor: pointer;
      .img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    .comment {
      align-items: flex-end;
    }
  }
  @media screen and (max-width: 1024px) {
    .user_card {
      margin-bottom: 0.5rem;
      h3.name {
        font-size: 18px;
      }
    }
    .content {
      p.text,
      h3.title {
      }
      h3.title {
        font-size: 22px;
      }
    }
    .buttons {
      font-size: 20px;
      gap: 1rem;
      .like,
      .comment {
        gap: 0.5rem;
        cursor: pointer;
        .img {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
      .comment {
      }
    }
  }
  @media screen and (max-width: 668px) {
    .user_card {
      margin-bottom: 0.5rem;
      h3.name {
        font-size: 15px;
      }
      .img {
        width: 3rem;
        height: 3rem;
      }
      .details {
      }
    }
    .content {
      h3.title {
        font-size: 16px;
        line-height: normal;
      }
      p.text {
        line-height: 21px;
        margin-top: 0.5rem;
        font-size: 15px;
      }
    }
    .buttons {
      font-size: 16px;
      gap: 1rem;
      margin: 0 !important;
      .like,
      .comment {
        gap: 0.5rem;
        cursor: pointer;
        .img {
          width: 1.25rem;
          width: 1.25rem;
        }
      }
      .comment {
      }
    }
  }
  @media screen and (max-width: 368px) {
    padding: 1rem;
    .user_card {
      margin-bottom: 0.5rem;
      h3.name {
        font-size: 16px;
      }
      .img {
        width: 3rem;
        height: 3rem;
      }
      .details {
      }
    }
    .content {
      h3.title {
        font-size: 16px;
        line-height: normal;
      }
      p.text {
        line-height: 21px;
        margin-top: 0.5rem;
        font-size: 15px;
      }
    }
    .buttons {
      font-size: 14px;
      gap: 1rem;
      margin: 0 !important;
      .like,
      .comment {
        gap: 0.5rem;
        cursor: pointer;
        .img {
          width: 1.25rem;
          width: 1.25rem;
        }
      }
      .comment {
      }
    }
  }
`;
