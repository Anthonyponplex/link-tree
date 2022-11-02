import React from "react";
import { FooterContainer, FooterText, FooterWrapper } from "./FooterStyle";
import Vector from "../assets/Vector.svg";
import I4G from "../assets/I4G.svg";
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <img src={Vector} id="zuri" alt="zuri" />
        <FooterText>HNG Internship 9 Frontend Task</FooterText>
        <img src={I4G} id="I4G" alt="I4G" />
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
