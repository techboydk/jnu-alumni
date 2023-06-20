import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import backgroundImage from "../assets/img/donate_bg.png";
import Input from "../components/Input";
import Button from "../components/Button";

const Donate = () => {
  const [amount, setAmount] = useState();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    //save input value here before vanish

    setAmount("");
  };
  return (
    <Container>
      <Header />
      <div className="main">
        <div className="box">
          <h2 className="title">Donate</h2>
          <form onSubmit={handleSubmitForm}>
            <Input
              type={"number"}
              name={"amount"}
              placehodler="Enter amount"
              inputValue={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button name={"Donate!"} bgc={"#33367f"} />
          </form>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Donate;
const Container = styled.div`
  .main {
    min-height: 85vh;
    background-image: url(${backgroundImage});
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
      background: #f5f5f5;
      border-radius: 25.51px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 70px;
      gap: 2rem;
      .title {
        font-family: "Libre Baskerville";
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 50px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
    }
  }
  @media screen and (max-width: 668px) {
    .main {
        background-size: 250% 100%;
      .box {
        padding: 55px 35px;
        margin: 2rem 3rem;
        .title {
          font-size: 30px !important;
          line-height: 30px !important;
        }
      }
    }
  }
  @media screen and (max-width: 368px) {
    .main {

    }
  }
`;
