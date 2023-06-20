import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import GoogleIcon from "../assets/svg/google.svg";
import twitterIcon from "../assets/svg/twitter.svg";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    //save input value here before vanish

    setPassword("");
    setUsername("");
  };

  return (
    <Container>
      <Header />
      <div className="main">
        <div className="main_box">
          <div className="main_left">
            <div className="title">
              <span>Welcome to</span> JNU Alumni Association
            </div>
            <p className="content">
              JAA strives to create a robust network and a sense of community
              among JNU alumni. It serves as a platform for graduates to
              connect, collaborate, and extend support to one another in diverse
              spheres of life.
            </p>
          </div>
          <div className="main_right">
            <p className="title">User Login</p>
            <form action="" onSubmit={handleSubmitForm}>
              <div className="form_container">
                <Input
                  type={"text"}
                  name={"username"}
                  placehodler="Username"
                  inputValue={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                  type={"password"}
                  name={"password"}
                  placehodler="Password"
                  inputValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="row">
                  <label htmlFor="remeber">
                    <input type="checkbox" name="remeber" id="remeber" />
                    Remember me
                  </label>
                  <p className="link">Forgot password</p>
                </div>
              </div>
              <Button name={"login"} bgc={"#33367f"} />
            </form>
            <div className="text">
              Don’t have an account?{" "}
              <Link to="/register" className="link">
                Register
              </Link>
            </div>
            <div className="icons">
              <div className="icon link">
                <img src={GoogleIcon} alt="google" />
              </div>
              <div className="icon link">
                <img src={twitterIcon} alt="twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .main {
    display: flex;
    justify-content: center;
    .main_box {
      margin: 45px;
      background: #f5f5f5;
      display: flex;
      flex: 0.75;
      border-radius: 20px;
      overflow: hidden;
      .main_left,
      .main_right {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px 33px 50px;
      }
      .main_left {
        background: #33367f;
        align-items: flex-start;
        .title {
          font-family: "Libre Baskerville";
          font-style: normal;
          font-weight: 400;
          font-size: 25px;
          line-height: 31px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          span {
            font-size: 18px;
            height: 25px;
          }
        }
        .content {
          flex: 1 1 0%;
          justify-content: center;
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 300;
          font-size: 18px;
          line-height: 30px;
          display: flex;
          -webkit-box-align: center;
          text-align: justify;
          margin: 25px 10px;
          color: rgb(255, 255, 255);
        }
      }
      .main_right {
        p.title {
          font-family: "Libre Baskerville";
          font-style: normal;
          font-weight: 400;
          font-size: 25px;
          line-height: 50px;
          display: flex;
          align-items: center;
          text-align: center;

          color: #000000;
        }
        .form_container {
          width: 100%;
          padding: 25px 0;
        }
        .row {
          display: flex;
          justify-content: space-between;
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          color: #9a9797;
          p.link {
            text-decoration: underline;
          }
          label {
            display: flex;
            gap: 0.5rem;
            cursor: pointer;
          }
        }
        div.text {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 34px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #000000;
          margin: 17px 0;
          flex-wrap: wrap;
          gap: 10px;
          a.link {
            text-decoration-line: underline;
            color: #0066ff;
          }
        }
        .icons {
          display: flex;
          gap: 3rem;
          margin: 25px 0;
          .icon {
            width: 2.25rem;
            height: 2.25rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .main {
      .main_box {
        flex: 1 !important;
        .main_left,
        .main_right {
          padding: 25px 25px 50px !important;
          .title {
            font-size: 20px !important;
          }
          .content {
            font-size: 15px !important;
            line-height: 25px !important;
            margin-top: 20px;
          }
        }
        .main_right {
          .form_container {
            padding: 20px 0 !important;
            .row {
              flex-wrap: wrap !important;
              gap: 0.25rem;
              input {
                margin-bottom: 0 !important;
              }
            }
          }
          div.text {
            font-size: 18px !important;
            line-height: 25px !important;
          }
          .icons {
            gap: 2.5rem;
            .icon {
              width: 1.75rem;
              height: 1.75rem;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 668px) {
    .main {
      .main_box {
        flex-direction: column !important;
        .main_left,
        .main_right {
          padding: 25px 25px 50px !important;
          .title {
            font-size: 18px !important;
            span {
              font-size: 16px !important;
            }
          }
        }
        .main_right {
          .form_container {
            .row {
              flex-wrap: wrap !important;
              gap: 0.25rem;
              font-size: 15px;
              input {
                margin-bottom: 0 !important;
              }
            }
          }
          div.text {
            font-size: 15px !important;
            line-height: 20px !important;
          }
          .icons {
            gap: 2rem;
            .icon {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 368px) {
    .main {
      .main_box {
        flex: 1 !important;
        margin: 15px !important;
        .main_left,
        .main_right {
          padding: 15px 15px 30px !important;
          .title {
            font-size: 16px !important;
            span {
              font-size: 12px;
            }
          }
          .content {
            font-size: 15px !important;
            line-height: 25px !important;
            margin-top: 15px;
          }
        }
        .main_right {
          .form_container {
            padding: 15px 0 !important;
            .row {
              flex-wrap: wrap !important;
              gap: 0.25rem;
              input {
                margin-bottom: 0 !important;
              }
            }
          }
          div.text {
            font-size: 15px !important;
            line-height: 25px !important;
          }
          .icons {
            gap: 2rem;
            .icon {
              width: 1.25rem;
              height: 1.25rem;
            }
          }
        }
      }
    }
  }
`;
