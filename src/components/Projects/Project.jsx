import React from "react";
import styled from "styled-components";

const Project = (props) => {
  const { img, disc, link } = props.item;
  return (
    <Container className="project">
      <img src={img} alt="project" />
      <div className="disc">
        <h1>Description</h1>
        <p>
          {disc}
          <a href={link} target="_blank">
            link
          </a>
        </p>
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  height: 15rem;
  width: 100%;
  // background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.7rem;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    transition: all 400ms ease-in-out;
    h1 {
      font-size: 1rem;
    }

    p {
      width: 90%;
      font-size: 0.7rem;
      a {
        margin-left: 0.4rem;
        color: red;
      }
    }
  }

  :hover > img {
    transform: scale(1.1);
  }

  :hover > .disc {
    bottom: 0;
  }
`;
