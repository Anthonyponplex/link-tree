import React from "react";
import { HoverEffectStyle, LinkContainer } from "./LinkSectionStyle";

const LinkSection = () => {
  let links = [
    {
      name: "Twitter Link",
      link: "https://twitter.com/ponplex",
      id: "twitter-link",
    },
    { name: "Zuri Team", link: "https://training.zuri.team/", id: "btn__zuri" },
    { name: "Zuri Books", link: "https://books.zuri.team", id: "books" },
    {
      name: "Python Books",
      link: "https://books.zuri.team/python-for-beginners?ref_id=anthonyponplex",
      id: "book__python",
    },
    {
      name: "Background Check for Coders",
      link: "https://background.zuri.team",
      id: "pitch",
    },
    {
      name: "Design Books",
      link: "https://books.zuri.team/design-rules",
      id: "book__design",
    },
  ];
  return (
    <HoverEffectStyle>
      {links.map((elem) => (
        <a href={elem.link}>
          {" "}
          <LinkContainer id={elem.id}>{elem.name}</LinkContainer>{" "}
        </a>
      ))}
    </HoverEffectStyle>
  );
};

export default LinkSection;
