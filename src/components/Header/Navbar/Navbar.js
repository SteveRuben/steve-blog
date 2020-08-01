import React from "react"
import { Link } from "gatsby"
import NavbarLinks from "../NavbarLinks/NavbarLinks"
import Container from "../../Container"
import { Wrapper } from "./styles"

const Navbar = menu => (
  <Wrapper as={Container}>
    <Link to="/">{menu.siteTitle}</Link>
    <NavbarLinks links={menu.menuLinks}/>
  </Wrapper>
)

export default Navbar
