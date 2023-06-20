import React from "react";
import styled from "styled-components";
import locationIcon from "../assets/svg/location.svg";
import phoneIcon from "../assets/svg/phone.svg";
import mailIcon from "../assets/svg/mail.svg";

const Footer = () => {
  return (
    <Container>
      <div className="footer_content">
        <div className="column">
          <div className="column_items">
            <div className="column_title">useful links</div>
            <p className="link">Join</p>
            <p className="link">About</p>
          </div>
        </div>
        <div className="column">
          <div className="column_items">
            <div className="column_title">Services</div>
            <p className="link">About Us</p>
            <p className="link">Terms and Conditions</p>
            <p className="link">Opportunities</p>
          </div>
        </div>
        <div className="column">
          <div className="column_items">
            <div className="column_title">CONTACT</div>
            <p className="link">
              <span>
                <img src={locationIcon} alt="" />
              </span>
              Alumni Association of JNU (AAJ) AAJ Office : Room No. 101 JNU
              Convention Centre, JNU, New Delhi-110067, India
            </p>
            <p className="link">
              <span>
                <img src={phoneIcon} alt="" />
              </span>
              Mr Satyendra (Assistant Manager) +917011953096 Dr Maheep (Convenor
              Membership Drive) +919911963456
            </p>
            <p className="link">
              <span>
                <img src={mailIcon} alt="" />
              </span>
              aajjnu1@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="footer_bottom">© 2023 JNU Alumni Association</div>
    </Container>
  );
};

export default Footer;
const Container = styled.div`
  background: #464646;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0 2rem;
  .footer_content {
    display: flex;
    justify-content: center;
    margin: 0 5rem;
    flex-wrap: wrap;
    gap: 1rem;
    .column {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      .column_items {
        .column_title {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 25px;
          line-height: 37px;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 2rem;
        }
        p.link {
          display: flex;
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 27px;
          text-transform: capitalize;
          color: #ffffff;
          margin-bottom: 15px;
          span {
            margin-right: 15px;
            margin-top: 5px;
            width: 30px;
            aspect-ratio: 1;
            height: 30px;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }
      }
    }
  }
  .footer_bottom {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #f6efef;
    margin-top: 25px;
  }
  @media screen and (max-width: 668px) {
    padding: 3rem 0 2rem;
    .footer_content {
      margin: 0 2rem;
      .column {
        align-items: flex-start;
        .column_title {
          line-height: normal !important;
          font-size: 18px !important;
        }
        p.link {
          font-size: 15px !important;
          line-height: normal !important;
        }
      }
    }
    .footer_bottom {
      font-size: 15px !important;
    }
  }
  @media screen and (max-width: 368px) {
    padding: 2rem 0 2rem;
    .footer_content {
      margin: 0 2rem;
      .column {
        .column_title {
          line-height: normal !important;
          font-size: 15px !important;
          margin-bottom: 1rem !important;
        }
        p.link {
          font-size: 12px !important;
          line-height: normal !important;
        }
      }
    }
    .footer_bottom {
      font-size: 12px !important;
    }
  }
`;
