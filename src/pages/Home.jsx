import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import bgImg1 from "../assets/img/bg_img1.png";
import bgImg2 from "../assets/img/bg_img2.png";
import Nirmala from "../assets/img/nirmala_sitaraman.png";
import jaishankar from "../assets/img/S. Jaishankar.png";
import abhijit from "../assets/img/Abhijit Banerjee.png";
import MeetEvent from "../components/MeetEvent";
import FameCard from "../components/FameCard";
import HorizontalCarousel from "../components/HorizontalCarousel";
import NavigationLink from "../components/NavigationLink";

const Home = () => {
  return (
    <Container>
      <Header />
      <div className="main">
        <div className="main_top">
          <div className="content">
            <h2 className="title">JNU Alumni Platform</h2>
            <p className="text">
              JAA strives to create a robust network and a sense of community
              among JNU alumni. It serves as a platform for graduates to
              connect, collaborate, and extend support to one another in diverse
              spheres of life.
            </p>
          </div>
          <div className="img_boxes">
            <div className="box">
              <div className="img">
                <img src={img1} alt="" />
              </div>
              <p>GALLERY</p>
            </div>
            <div className="box">
              <div className="img">
                <img src={img2} alt="" />
              </div>
              <p>FEED</p>
            </div>
            <div className="box">
              <div className="img">
                <img src={img3} alt="" />
              </div>
              <p>NETWORKS</p>
            </div>
            <div className="box">
              <div className="img">
                <img src={img4} alt="" />
              </div>
              <p>MEMBERSHIP</p>
            </div>
          </div>
        </div>
        <div className="main_middle">
          <HorizontalCarousel />
        </div>
        <div className="main_bottom">
          <div className="top">
            <div className="column">
              <div className="meet_box">
                <MeetEvent
                  title="ALUMNI MEET 2024"
                  date="May 25, 2022"
                  EventName="Prospective Event"
                />
                <MeetEvent
                  title="ALUMNI MEET 2024"
                  date="May 25, 2022"
                  EventName="Prospective Event"
                />
                <MeetEvent
                  title="ALUMNI MEET 2024"
                  date="May 25, 2022"
                  EventName="Prospective Event"
                />
              </div>
            </div>
            <div className="column">
              <NavigationLink />
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">gallery of fame</h1>
            <div className="card_container">
              <FameCard
                img={Nirmala}
                name={"Nirmala Sitharaman"}
                profession={"Minister of Finance & Corporate Affairs"}
                href={"https://en.wikipedia.org/wiki/Nirmala_Sitharaman"}
              />
              <FameCard
                img={jaishankar}
                name={"S. Jaishankar"}
                profession={"Minister of External Affairs"}
                href={"https://en.wikipedia.org/wiki/S._Jaishankar"}
              />
              <FameCard
                img={abhijit}
                name={"Abhijit Banerjee"}
                profession={"Nobel Laureate in Economics (2019)"}
                href={"https://en.wikipedia.org/wiki/Abhijit_Banerjee"}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  .main {
    display: flex;
    flex-direction: column;
    .main_top {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 50px;
      margin-bottom: 6rem;
      background-image: url(${bgImg1});
      background-size: 100% 100%;
      height: 65vh;
      position: relative;
      .content {
        padding: 0 50px;
        .title {
          font-family: "Libre Baskerville";
          font-style: normal;
          font-weight: 700;
          font-size: 45px;
          line-height: 50px;
          color: #000000;
        }
        p.text {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 300;
          font-size: 25px;
          line-height: 35px;
          color: #000000;
          margin-top: 15px;
        }
      }
      .img_boxes {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        position: absolute;
        bottom: -7rem;
        .box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          .img {
            width: 10rem;
            height: 10rem;
          }
          p {
            font-family: "Open Sans";
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            line-height: 41px;
            color: #000000;
          }
        }
      }
    }
    .main_middle {
      margin: 1rem 0 5rem;
      width: 100%;
      overflow: hidden;
      .carousel_container {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 2rem;
        position: relative;
        .carousel_item {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 30px;
          overflow: hidden;
          flex-shrink: 0;
          aspect-ratio: 2/1.35;
          min-width: 200px;
          position: absolute;
          transform: translateX(-50%) scale(1.2);
          left: 50%;
          transition: 1s ease-out;

          &:first-child {
            left: 0;
            transform: translateX(-50%) scale(1);
          }
          &:last-child {
            transform: translateX(-50%) scale(1);
            left: 100%;
            transition: 1s ease-out;
            z-index: -1;
          }
        }
        img {
          object-fit: cover;
        }
      }
    }
  }
  .main_bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5rem;
    background-image: url(${bgImg2});
    .top {
      display: flex;
      justify-content: center;
      .column {
        display: flex;
        flex: 1;
        justify-content: center;
        .meet_box {
          background: #575050;
          border: 3.38px solid rgba(255, 255, 255, 0.3);
          border-radius: 33.124px;
          padding: 45px 35px;
        }
      }
    }
    .bottom {
      margin-top: 45px;
      .title {
        font-family: "Libre Baskerville";
        font-style: normal;
        font-weight: 400;
        font-size: 45px;
        text-align: center;
        text-transform: uppercase;
        color: #000000;
      }
      .card_container {
        display: flex;
        justify-content: center;
        margin-top: 15px;
        width: calc(100% + 10rem);
        overflow-x: auto;
        justify-content: center;
        padding: 1rem;
        position: relative;
        left: -5rem;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .main {
      .main_top {
        padding: 35px 25px 50px;
        margin-bottom: 5rem;
        .content {
          padding: 0 25px;
          .title {
            font-size: 30px;
            line-height: normal;
          }
          p.text {
            font-size: 20px;
            line-height: normal;
          }
        }
        .img_boxes {
          bottom: -5rem;
          .box {
            gap: 0.25rem;
            .img {
              width: 7rem;
              height: 7rem;
            }
            p {
              font-size: 16px;
              line-height: normal;
            }
          }
        }
      }
      .main_middle {
        margin: 0;
      }
      .main_bottom {
        padding: 2.5rem;
        .top {
          .column {
            .meet_box {
              padding: 30px 20px;
            }
          }
        }
        .bottom {
          .title {
            font-size: 30px;
            line-height: normal;
          }
          .card_container {
            width: calc(100% + 5rem) !important;
            left: -2.5rem;
            gap: none;
          }
        }
      }
    }
  }
  @media screen and (max-width: 668px) {
    .main {
      .main_top {
        padding: 25px;
        margin-bottom: 3rem;
        .content {
          padding: 0 10px;
          .title {
            font-size: 25px;
            line-height: normal;
          }
          p.text {
            font-size: 18px;
            line-height: normal;
          }
        }
        .img_boxes {
          bottom: -3rem;
          gap: 1rem;
          .box {
            gap: 0.25rem;
            .img {
              width: 4.5rem;
              height: 4.5rem;
            }
            p {
              font-size: 12px;
              line-height: normal;
            }
          }
        }
      }
      .main_middle {
        .carousel_container {
          margin: 3rem 0;
          .carousel_item {
            border-radius: 20px;
            &:first-child {
              left: -50%;
            }
            &:last-child {
              left: 150%;
            }
          }
        }
      }
      .main_bottom {
        .top {
          flex-direction: column;
          gap: 2rem;
          .column {
            .meet_box {
              flex: 1;
            }
          }
        }
        .bottom {
          .title {
            font-size: 25px;
          }
          .card_container {
            justify-content: flex-start;
            &::-webkit-scrollbar {
              display: none;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 368px) {
    .main {
      .main_top {
        padding: 15px;
        margin-bottom: 2rem;
        .content {
          padding: 0 5px;
          .title {
            font-size: 20px;
          }
          p.text {
            font-size: 16px;
          }
        }
        .img_boxes {
          bottom: -2rem;
          gap: 0.5rem;
          .box {
            gap: 0.25rem;
            .img {
              width: 3rem;
              height: 3rem;
            }
            p {
              font-size: 8px;
              font-weight: 900;
            }
          }
        }
      }
      .main_middle {
        .carousel_container {
          margin: 2rem 0;
          height: 15rem;
          .carousel_item {
            border-radius: 15px;
          }
        }
      }
      .main_bottom {
        padding: 0.75rem;
        .top {
          .column {
            .meet_box {
            }
          }
        }
        .bottom {
          .title {
            font-size: 20px;
          }
          .card_container {
            width: calc(100% + 1.5rem) !important;
            left: -0.75rem;
          }
        }
      }
    }
  }
`;
