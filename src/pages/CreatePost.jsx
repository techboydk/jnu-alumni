import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentContainer from "../components/ContentContainer";
import Input from "../components/Input";
import Button from "../components/Button";

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //save input value here before vanish

    setContent("");
    setTitle("");
  };
  const handleCancel = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <Container>
      <Header />
      <div className="main">
        <ContentContainer>
          <div className="create_title">Create Post</div>
          <form onSubmit={handleFormSubmit}>
            <div className="input_container">
              <h4 className="title">Title</h4>
              <Input
                type={"text"}
                name={"title"}
                placehodler={"Please provide a title (required)"}
                onChange={(e) => setTitle(e.target.value)}
                inputValue={title}
              />
            </div>
            <div className="input_container">
              <h4 className="title">Content</h4>
              <textarea
                placeholder="Please enter text"
                onChange={(e) => setContent(e.target.value)}
                value={content}
                required
              />
            </div>
            <div className="buttons">
              <span onClick={handleCancel}>
                <Button name={"Cancel"} bgc={"#33367f"} />
              </span>
              <Button name={"Publish"} bgc={"#33367f"} />
            </div>
          </form>
        </ContentContainer>
      </div>
      <Footer />
    </Container>
  );
};

export default CreatePost;
const Container = styled.div`
  display: flex;
  flex-direction: column;

  .main {
    display: flex;
    justify-content: center;
    padding: 1.5rem;
    width: 85%;
    .box {
      flex: 1;
      width: 100%;
      padding: 1.75rem 3rem;
      .create_title {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 47px;
        color: #000000;
        margin-bottom: 2rem;
      }
      form {
        .input_container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          .title {
            font-family: "Open Sans";
            font-style: normal;
            font-weight: 600;
            font-size: 22px;
            line-height: 35px;
            color: #4c4c4c;
            margin-bottom: 0.25rem;
          }
          label {
            width: 100%;
            input {
              font-size: 18px;
            }
          }
          textarea {
            width: 100%;
            aspect-ratio: 1/0.3;
            outline: none;
            border: none;
            background: #ffffff;
            border-radius: 25.6477px;
            padding: 1rem 1.5rem;
            font-family: "Open Sans";
            font-style: normal;
            font-size: 18px;
            line-height: 28px;
            color: #828282;
          }
        }
        button {
          margin: 2rem 0 1rem;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .main {
      .box {
        padding: 1.5rem 2rem;
        .create_title {
          font-size: 22px;
        }
        form {
          .input_container {
            .title {
              font-size: 20px;
              line-height: 30px;
            }
            label {
              input {
                font-size: 18px;
              }
            }
            textarea {
              aspect-ratio: 1/0.4;
              border-radius: 20px;
              font-size: 18px;
              line-height: 28px;
            }
          }
          button {
            margin: 2rem 0 1rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 668px) {
    .main {
      padding: 1rem 0;
      .box {
        padding: 1rem 1.5rem;
        .create_title {
          font-size: 20px;
          line-height: normal;
        }
        form {
          .input_container {
            .title {
              font-size: 18px;
              line-height: normal;
              color: #4c4c4c;
              margin-bottom: 0.5rem;
            }
            label {
              input {
                font-size: 16px !important;
              }
            }
            textarea {
              aspect-ratio: 1/0.75;
              border-radius: 15px;
              padding: 1rem 1.5rem;
              font-size: 16px;
            }
          }
          button {
            margin: 2rem 0 1rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 368px) {
    .main {
      padding: 1rem 0;
      .box {
        padding: 1rem 1.5rem;
        .create_title {
          font-size: 18px;
          line-height: normal;
        }
        form {
          .input_container {
            .title {
              font-size: 16px;
              line-height: normal;
              color: #4c4c4c;
              margin-bottom: 0.5rem;
            }
            label {
              input {
                font-size: 15px !important;
              }
            }
            textarea {
              aspect-ratio: 1/0.75;
              border-radius: 15px;
              padding: 1rem 1.5rem;
              font-size: 15px;
            }
          }
          button {
            margin: 2rem 0 1rem;
            font-size: 15px;
          }
        }
      }
    }
  }
`;
