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
  return (
    <Container>
      <Header />
      <div className="main">
        <ContentContainer>
          <div className="create_title">Create Post</div>
          <form action="">
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
              <textarea placeholder="Please enter text" />
            </div>
            <Button name={"Publish"} bgc={"#33367f"} />
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
  }
`;
