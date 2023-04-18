import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram,AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import myimg from './banner.png'

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Manvendra Singh</h1>
          <h3>Full-stack Developer</h3>
          <p>
          "I'm a full-stack developer bursting with passion! With over a year of industry experience working in the <span className="green">MERN stack</span>,
           I'm constantly fueled by the thrill of programming. From tinkering with personal projects to collaborating with the industry's finest minds,
          I count myself extremely fortunate to be a part of this dynamic community. Take a look at my impressive body of work and I'm confident you'll agree
          that I'm one of the top candidates for this position. Please don't miss the opportunity to <span className="green">interview me and discover</span> what I can bring to the table!"
          </p>
          <a href="#footer" style={{textDecoration:'none',color:'white'}}>
            <button>Interview me</button>
          </a>
          <a href="https://drive.google.com/file/d/1fg7zN0b-NZLWvtHN-Ha4crrjljjvR_Gf/view?usp=share_link" download='Resume'
            style={{textDecoration:'none',color:'#01be96'}}
            target="_blank"
            rel="noreferrer">
             <span className="resume">Resume</span> 
          </a>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="/">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="/">
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a href="/">
                  <AiFillGithub />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={myimg}
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }

  .resume{
    padding: 0.6rem 1.5rem;
    margin-top: 3rem;
    margin-left:2rem;
    border: 1px solid #01be96;
    cursor:pointer;
    font-weight: 700;
    background-color: none;
    box-shadow: 0 0 10px 3px #01be9570;
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 27rem;
    transform: scale(1.2);
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: scale(1.1);
  }
`;
