import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Wrapper } from "./styles"

const NavbarLinks = (desktop, links) => (
  <Wrapper desktop={desktop}>
    {links.map(link => (
      <AnchorLink
        href="{link.link}"
        key={link.name}
        to={link.link}
        activeClassName="active"
      >
        {link.name}
      </AnchorLink>
    ))}
  </Wrapper>
)

export default NavbarLinks
