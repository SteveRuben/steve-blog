import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Wrapper } from "./styles"

const ConsoleLog = ({ children }) => {
  console.log(children);
  return false;
};

const NavbarLinks = (links = [] ) => (
  <Wrapper>
    { links && links.links >  0 ? 
    links.links.map(link => (
      <AnchorLink
        href="{link.link}"
        key={link.name}
        to={link.link}
        activeClassName="active"
      >
        {link.name}
      </AnchorLink> )) : "Loading" }
  </Wrapper>
)

export default NavbarLinks
