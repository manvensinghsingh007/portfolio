import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="skill">
      <Slide direction="down">
        <h4>
          My <span className="green">skills</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Frontend Developer"}
            disc={`As a skilled frontend developer, I possess expertise in cutting-edge technologies such as React, Redux, and vanilla JavaScript. My hands-on experience in developing various web applications from scratch has honed my abilities in designing efficient and robust frontend architectures.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Back-end Developer"}
            disc={`I have a deep understanding of back-end technologies such as Express for efficient server creation and developing REST APIs. My proficiency in both SQL and NoSQL databases, particularly MongoDB, has allowed me to build powerful and scalable back-end architectures.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"FullStack Developer"}
            disc={`As an advanced frontend developer, I have developed multiple full stack projects using the MERN (MongoDB, Express.js, React, and Node.js) stack from the ground up. My expertise lies in crafting complex logical operations and implementing efficient solutions to create high-performance full stack applications.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
