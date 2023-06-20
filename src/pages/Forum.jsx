import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import searchIcon from "../assets/svg/searchIcon.svg";
import Button from "../components/Button";
import ContentContainer from "../components/ContentContainer";
import UsersContainer from "../components/UsersContainer";
import UserCard from "../components/UserCard";
import user1 from "../assets/img/user1.png";

const Forum = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [isActive, setActive] = useState(false);
  const [isMobile, setMobile] = useState(false);

  const content = {
    title: "Some exciting news!",
    text: "Jawaharlal Nehru University School of Computer & Systems Sciences (SC&SS) M. Tech, School of Computer & Systems Sciences (SC&SSS) 2020 - 2024",
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 668) {
        setActive(false);
        setMobile(false);
      } else {
        setMobile(true);
      }

      console.log(window.innerWidth > 668);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleActive = () => {
    isActive ? setActive(false) : setActive(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    //save input value here before vanish

    setSearchQuery("");
  };
  return (
    <Container>
      <Header />
      <div className="main">
        <div className="columns">
          {isMobile ? (
            !isActive ? (
              <div className="column left">
                <div className="searchbox">
                  <Input
                    type={"text"}
                    name={"search"}
                    placehodler={"Type here to search post"}
                    inputValue={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="img" onClick={handleSearch}>
                    <img src={searchIcon} alt="" />
                  </div>
                </div>

                {window.innerWidth < 668 && (
                  <div className="buttons">
                    <Button name={"Create Post"} bgc={"#33367f"} />
                    <h4 className="friends" onClick={handleActive}>
                      Friends
                    </h4>
                  </div>
                )}
                <ContentContainer title={content.title} text={content.text}>
                  <UserCard
                    img={user1}
                    name={"Ankita Rawat"}
                    course={"M. Tech"}
                    batch={"2024"}
                  />
                </ContentContainer>
                <ContentContainer title={content.title} text={content.text}>
                  <UserCard
                    img={user1}
                    name={"Ankita Rawat"}
                    course={"M. Tech"}
                    batch={"2024"}
                  />
                </ContentContainer>
                <ContentContainer title={content.title} text={content.text}>
                  <UserCard
                    img={user1}
                    name={"Ankita Rawat"}
                    course={"M. Tech"}
                    batch={"2024"}
                  />
                </ContentContainer>
              </div>
            ) : (
              <div className={`column right ${module ? "mobile" : ""}`}>
                <Button
                  name={"back"}
                  bgc={"#33367f"}
                  onclickFuction={handleActive}
                />
                <UsersContainer title={"Friends"} />
                <UsersContainer title={"Top Posters"} />
              </div>
            )
          ) : (
            <React.Fragment>
              <div className="column left">
                <div className="searchbox">
                  <Input
                    type={"text"}
                    name={"search"}
                    placehodler={"Type here to search post"}
                    inputValue={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="img" onClick={handleSearch}>
                    <img src={searchIcon} alt="" />
                  </div>
                </div>

                <ContentContainer title={content.title} text={content.text}>
                  <UserCard
                    img={user1}
                    name={"Ankita Rawat"}
                    course={"M. Tech"}
                    batch={"2024"}
                  />
                </ContentContainer>
                <ContentContainer title={content.title} text={content.text}>
                  <UserCard
                    img={user1}
                    name={"Ankita Rawat"}
                    course={"M. Tech"}
                    batch={"2024"}
                  />
                </ContentContainer>
                <ContentContainer title={content.title} text={content.text}>
                  <UserCard
                    img={user1}
                    name={"Ankita Rawat"}
                    course={"M. Tech"}
                    batch={"2024"}
                  />
                </ContentContainer>
              </div>
              <div className={`column right`}>
                <Button name={"Create Post"} bgc={"#33367f"} />
                <UsersContainer title={"Friends"} />
                <UsersContainer title={"Top Posters"} />
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Forum;
const Container = styled.div`
  .main {
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    padding: 1rem 4rem 2rem;
    margin: 0 0 2rem;
    .columns {
      display: flex;
      gap: 2.25rem;
      margin-top: 2.25rem;
      .column {
        display: flex;
        flex-direction: column;
        &.left {
          flex: 0.7;
          .box {
            aspect-ratio: 1/0.2;
          }
          .searchbox {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            background: #f5f5f5;
            border-radius: 25px;
            padding: 0.5rem 1.25rem;
            overflow: hidden;
            margin-bottom: 1rem;

            label {
              flex: 1;
              input {
                margin: 0;
                background: none;
                margin: 0 !important;
              }
            }
            .img {
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
            }
          }
          .buttons {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 1rem 0;
            h4 {
            }
            button {
              height: 0.75rem;
              font-size: 12px;
              font-weight: 500;
              padding: 0.5rem 0.75rem;
              line-height: normal;
              white-space: nowrap;
            }
          }
        }
        &.right {
          flex: 0.3;
          button {
            border-radius: 999px;
            font-weight: 500;
            font-size: 22px;
            padding: 0.5rem;
            
          }
          &.mobile {
            .con_title {
              text-align: left;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .main {
      padding: 1rem 2rem 2rem;
      .columns {
        gap: 1rem;
        margin-top: 0;
        .column {
          gap: 0;
          &.left {
            .searchbox {
              margin-bottom: 1rem;
              label {
                input {
                }
              }
              .img {
              }
            }
          }
          &.right {
            button {
              font-weight: 500;
              font-size: 18px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 668px) {
    .main {
      .columns {
        flex-direction: column-reverse;
      }
    }
  }
  @media screen and (max-width: 368px) {
    .main {
      padding: 1rem 0.75rem;
      .columns {
        gap: 1rem;
        margin-top: 0;
        .column {
          gap: 0;
          &.left {
            .searchbox {
              margin-bottom: 0.75rem;
              padding: 0.15rem .5rem 0.15rem  0;
              label {
                input {
                }
              }
              .img {
              }
            }
            .buttons{
              margin: .5rem 0 1rem;
            }
          }
          &.right {
            button {
              font-weight: 500;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
`;
