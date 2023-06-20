import React, { useState } from "react";
import styled from "styled-components";
import jnuLogo from "../assets/svg/logo.svg";
import burgerIcon from "../assets/svg/Burger.svg";
import cancelIcon from "../assets/svg/cancel.svg";

import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);
  const activeSideBar = () => {
    active ? setActive(false) : setActive(true);
  };
  return (
    <Container>
      <div className="header_top">
        <Link to="/login" className="header_link link">
          Login
        </Link>
        <Link to="/register" className="header_link link">
          Register
        </Link>
      </div>
      <div className="header_bottom">
        <div className="header_bottom_left">
          <div className="logo">
            <img src={jnuLogo} alt="" />
          </div>
          <div className="content">
            <p className="txt_title">JNU Alumni Association (Rtd.)</p>
            <p className="name">Jawaharlal Nehru University</p>
          </div>
        </div>
        <div className={"header_bottom_middle"}>
          <p className="menu_item link">ABOUT</p>
          <p className="menu_item link">JOIN</p>
          <p className="menu_item link">NOTICES</p>
          <p className="menu_item link">OPPORTUNITIES</p>
          <p className="menu_item link">SERVICES</p>
        </div>
        <div className={active ? "mobile_menu active" : "mobile_menu"}>
          <div
            className="close"
            style={{ backgroundImage: `url(${cancelIcon})` }}
            onClick={activeSideBar}
          ></div>
          <p className="menu_item link">ABOUT</p>
          <p className="menu_item link">JOIN</p>
          <p className="menu_item link">NOTICES</p>
          <p className="menu_item link">OPPORTUNITIES</p>
          <p className="menu_item link">SERVICES</p>
        </div>
        <div className="header_bottom_right">
          <div className="menu_btn btn" onClick={activeSideBar}>
            <img src={burgerIcon} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .header_top {
    display: flex;
    justify-content: flex-end;
    height: 70px;
    background: #33367f;
    align-items: center;
    padding-right: 70px;
    .header_link {
      all: unset;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 34px;
      text-align: center;
      color: #ffffff;
      margin-right: 34px;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
  .header_bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 22px;
    .header_bottom_left {
      display: flex;
      justify-content: center;
      gap: 22px;
      .logo {
        width: 4rem;
        height: 4rem;
      }
      .content {
        font-family: "Open Sans";
        font-style: normal;
        .txt_title {
          font-weight: 600;
          font-size: 20px;
          color: rgb(29, 31, 90);
        }
        .name {
          font-weight: 400;
          font-size: 18px;
          color: rgb(29, 31, 90);
        }
      }
    }
    .header_bottom_middle {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 26px;
      p.menu_item {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 34px;
        color: #000000;
      }
    }
    .mobile_menu {
      position: fixed;
      right: -100%;
      width: 50%;
      max-width: 350px;
      background: #fff;
      height: 100%;
      display: flex;
      flex-direction: column;
      top: 0;
      align-items: center;
      padding: 1rem;
      transition: 1s ease;
      z-index: 99;
      &.active {
        right: 0;
      }
      .menu_item {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        border-bottom: 1px solid #ccc;
        margin-bottom: 1.25rem;
      }
      .close {
        display: flex;
        position: absolute;
        top: 0;
        left: -24px;
        width: 25px;
        aspect-ratio: 1;
        z-index: 99;
        background-size: cover;
        background-color: #fff;
        border: 4px solid #fff;
      }
    }
    .header_bottom_right {
      display: none;
      .menu_btn {
        margin-left: 2rem;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .header_top {
      padding-right: 20px !important;
      .header_link {
        font-size: 20px !important;
      }
    }
    .header_bottom_middle {
      display: none !important;
      &.active {
        position: absolute;
      }
    }
    .header_bottom_right {
      display: flex !important;
    }
  }
  @media screen and (max-width: 668px) {
    .header_top {
      padding-right: 15px !important;
      .header_link {
        font-size: 18px !important;
      }
    }
    .header_bottom {
      gap: 10px !important;
      padding: 15px !important;
      .header_bottom_left {
        gap: 10px !important;
        .logo {
          width: 3rem;
        }
        .content {
          .txt_title {
            font-size: 18px;
          }
          .name {
            font-size: 16px;
          }
        }
      }
    }
    .header_bottom_right {
      .menu_btn {
        margin-left: 0 !important;
      }
    }
  }
  @media screen and (max-width: 368px) {
    .header_top {
      padding-right: 15px !important;
      .header_link {
        font-size: 16px !important;
        margin-right: 10px;
      }
    }
    .header_bottom {
      flex-direction: column-reverse;
      .header_bottom_left {
        gap: 10px !important;
        .logo {
          width: 2.75rem;
          height: 3rem;
        }
        .content {
          .txt_title {
            font-size: 15px;
          }
          .name {
            font-size: 13px;
          }
        }
      }
      .header_bottom_right {
        width: 100%;
        justify-content: flex-end;
      }
    }
    .header_bottom_right {
      .menu_btn {
        margin-left: 0 !important;
      }
    }
  }
`;
