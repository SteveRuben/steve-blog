import React, { useState, Component } from "react"
import Navbar from "./Navbar/Navbar"
import Hamburger from "./Hamburger/Hamburger"
import Sidebar from "./Sidebar/Sidebar"
import { Wrapper, Overlay } from "./styles"

export const Header = menu => {
  const [sidebar, toggle] = useState(false)
  return (
    <Wrapper>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar menu={menu.menu} />
      <Hamburger menu={menu.menu} sidebar={sidebar} toggle={toggle} />
      <Sidebar menu={menu.menu} sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  )
}
