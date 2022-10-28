import React from "react";
import { SocialIconContainer } from "./SocialIconStyle";
import Slack from "../assets/slack.svg";
import Icon from "../assets/Icon.svg";

const SocialIcon = () => {
  return (
    <SocialIconContainer>
      <img src={Slack} alt="vector" />
      <img src={Icon} alt="icon" />
    </SocialIconContainer>
  );
};

export default SocialIcon;
