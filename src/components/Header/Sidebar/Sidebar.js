import React from 'react'
import NavbarLinks from '../NavbarLinks/NavbarLinks';
import { Wrapper } from './styles';

const Sidebar = ({ menu, sidebar, toggle }) => (
    <Wrapper active={sidebar} onClick={toggle}>
      <NavbarLinks menuLinks={menu.menuLinks} />
    </Wrapper>
  );
  
  export default Sidebar;

 // https://gatsby-theme-portfolio.netlify.app/
 // https://github.com/smakosh/gatsby-portfolio-dev
 // https://github.com/smakosh/gatsby-portfolio-dev/tree/master/src/components 