import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaTelegram, FaTwitterSquare, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <Wrapper>
      <motion.div
        initial={{ y: "50%", scale: 0.5, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <H1>Get</H1>
        <H1 className="main">In touch</H1>
        <br />
        <H4>
          Please feel free to reach out anytime, we'd love to hear from you!
        </H4>
        <br />
        <H4>
          <IconWrapper>
            <FaMailBulk />
          </IconWrapper>
          <Bold>contact@defind.tech</Bold>
        </H4>
        <br />

        <H4>
          <IconWrapper>
            <FaTwitterSquare />
          </IconWrapper>
          <Bold>@defind_web3</Bold>
        </H4>
        <br />
        <H4>
          <IconWrapper>
            <FaTelegram />
          </IconWrapper>
          <Bold>https://t.me/defind_web3</Bold>
        </H4>
      </motion.div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100vh;
  text-align: left;
  background: #040010;

  transition: all 0.5s linear;
`;

const H1 = styled.div`
  font-family: "Russo One", sans-serif;
  text-transform: uppercase;
  font-size: 5rem;
  padding-left: 1rem;
  color: #daefff;
  &.main {
    color: #31f2e4;
    filter: drop-shadow(0px 0px 14px #31f2e4);

    -webkit-animation: glow 2s ease-in-out infinite alternate;
    -moz-animation: glow 2s ease-in-out infinite alternate;
    animation: glow 2s ease-in-out infinite alternate;
  }
  @keyframes glow {
    from {
      filter: drop-shadow(0px 0px 14px #31f2e4);
      color: #31f2e4;
    }
    to {
      filter: drop-shadow(0px 0px 14px rgb(255, 0, 255));
      color: rgb(255, 0, 255);
    }
  }
  @media screen and (max-width: 1023px) {
    padding-left: 0.5rem;
    font-size: 3.75rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 3.5rem;
  }
`;

const H4 = styled.div`
  display: flex;
  align-items: center;
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 1.25rem;
  padding-left: 1rem;
  width: 35rem;
  color: #daefff;
  @media screen and (max-width: 1023px) {
    padding-left: 0.5rem;
    font-size: 1.15rem;
    width: 27rem;
  }
  @media screen and (max-width: 600px) {
    width: 22rem;
    font-size: 1rem;
  }
`;

const Bold = styled.b`
  background: -webkit-linear-gradient(45deg, #31f2e4, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 1rem;
  @media screen and (max-width: 1023px) {
    margin-left: 0.75rem;
  }
  @media screen and (max-width: 600px) {
    margin-left: 0.5rem;
  }
`;

const IconWrapper = styled.div`
  color: #31f2e4;
  font-size: 1.75rem;
  @media screen and (max-width: 1023px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
