import React, {useEffect } from "react";
import crousel_img1 from "../assets/img/crousel_img1.png";
import crousel_img2 from "../assets/img/crousel_img2.png";
import crousel_img3 from "../assets/img/crousel_img3.png";
import crousel_img4 from "../assets/img/img1.png";
import crousel_img5 from "../assets/img/img2.png";
import styled, { keyframes } from "styled-components";

const images = [
  crousel_img1,
  crousel_img2,
  crousel_img3,
  crousel_img4,
  crousel_img5,
];

const HorizontalCarousel = () => {

  useEffect(() => {
    let index = images.length - 1 >= 3 ? 3 : 0;

    const timer = setInterval(() => {
      handleNext(index);
      if (index >= images.length - 1) {
        index = 0;
      } else {
        index++;
      }
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const slides = document.querySelectorAll(".carousel_item");
      const slidesContainer = document.querySelector(".carousel_container");
      slides.forEach((slide) => {
        if(window.innerWidth<668){
          slide.style.width = `${Math.floor(window.innerWidth/2)}px`;
        }else{
          slide.style.width = `${Math.floor(window.innerWidth / 3)}px`;
        }

        if(window.innerWidth<668){
          slidesContainer.style.height = `${slides[1].clientHeight * 1.2}px`
        }else{
          slidesContainer.style.height = `${slides[1].clientHeight * 1.7}px`
        }
        
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = (index) => {
    const slideContainer = document.querySelector(".carousel_container");
    const slides = document.querySelectorAll(".carousel_item");

    const firstSlide = slides[0].cloneNode(true);
    const img = firstSlide.querySelector("img");
    img.setAttribute("src", `${images[index]}`);

    slideContainer.appendChild(firstSlide);
    slideContainer.removeChild(slides[0]);
  };
  return (
    <Container className="carousel_container">
      <div className="carousel_item">
        <img src={crousel_img1} alt="" />
      </div>
      <div className="carousel_item">
        <img src={crousel_img2} alt="" />
      </div>
      <div className="carousel_item">
        <img src={crousel_img3} alt="" />
      </div>
    </Container>
  );
};

export default HorizontalCarousel;

const enterAnim = keyframes`
  0%{
    left: 150%;
  }
  100%{
    left: 100%;
  }
  
`;

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  .carousel_item {
    &:last-child {
      animation: ${enterAnim} 1s ease-out;
    }
  }
  @media screen and (max-width: 668px) {
    .carousel_item {
      &:last-child {
        animation: none !important;
      }
    }
  }
`;
