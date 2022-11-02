import React from "react";
import { HoverEffectStyle, LinkContainer } from "./LinkSectionStyle";

const LinkSection = () => {
  let links = [
    {
      name: "Twitter Link",
      link: "https://twitter.com/ponplex",
      id: "twitter-link",
      title: "my twitter link",
    },
    {
      name: "Zuri Team",
      link: "https://training.zuri.team/",
      id: "btn__zuri",
      title: "my Zuri Team link",
    },
    {
      name: "Zuri Books",
      link: "https://books.zuri.team",
      id: "books",
      title: "my Zuri Book link",
    },
    {
      name: "Python Books",
      link: "https://books.zuri.team/python-for-beginners?ref_id=anthonyponplex",
      id: "book__python",
      title: "my Zuri Python Book link",
    },
    {
      name: "Background Check for Coders",
      link: "https://background.zuri.team",
      id: "pitch",
      title: "my Zuri Background Check link",
    },
    {
      name: "Design Books",
      link: "https://books.zuri.team/design-rules",
      id: "book__design",
      title: "my Zuri Design Books link",
    },
  ];
  return (
    <HoverEffectStyle>
      {links.map((elem) => (
        <a href={elem.link} title={elem.title}>
          {" "}
          <LinkContainer id={elem.id}>{elem.name}</LinkContainer>{" "}
        </a>
      ))}
    </HoverEffectStyle>
  );
};

export default LinkSection;
