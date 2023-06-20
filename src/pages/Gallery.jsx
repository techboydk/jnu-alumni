import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import galleryImg1 from "../assets/img/gallery/img1.png";
import galleryImg2 from "../assets/img/gallery/img2.png";
import PageHeading from "../components/PageHeading";

const Gallery = () => {
  const images = [
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
    galleryImg2,
  ];

  return (
    <Container>
      <Header />
      <div className="main">
        <PageHeading title={"Gallery"}/>
        <div className="images_container">
          <div className="row row1">
            <div className="img">
              <img src={galleryImg1} alt="" />
            </div>
            <div className="img">
              <img src={galleryImg1} alt="" />
            </div>
          </div>
          <div className="row row2">
            {images.map((img, index) => {
              return (
                <div className="img" key={index}>
                  <img src={galleryImg2} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Gallery;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  .main {
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    padding: 1rem 4rem 2rem;
    margin: 0 0 2rem;
    .images_container {
      display: flex;
      gap: 2rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .row {
        display: flex;
        gap: 2rem;
        .img {
          overflow: hidden;
          cursor: pointer;
        }
      }
      .row1 {
        overflow: auto;
        padding: 0px 0.75rem 1rem;
        -webkit-box-pack: start;
        justify-content: flex-start;
        position: relative;
        left: 0;
        //width: calc(100% + 8rem);
        .img {
          flex: 1;
          border-radius: 25px;
          cursor: auto;
        }
      }
      .row2 {
        flex-wrap: wrap;
        //justify-content: space-between;
        .img {
          min-width: 250px;
          flex: 1;
          border-radius: 15px;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .main {
      .images_container {
        .row2 {
          .img {
            min-width: 150px !important;
          }
        }
      }
    }
  }
  @media screen and (max-width: 668px) {
    .main {
      padding: 1rem 2rem 2rem;
      .images_container {
        .row1 {
            width: calc(100% + 4rem);
          .img {
            width: 100%;
            flex-shrink: 0;
            flex: none;
          }
        }
        .row2 {
          gap: 1rem;
          .img {
            min-width: 100px !important;
          }
        }
      }
    }
  }
`;
