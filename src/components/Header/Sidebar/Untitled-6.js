<Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar name={menu}/>
      <Hamburger menu={menu} sidebar={sidebar} toggle={toggle} />
      <Sidebar menu={menu} sidebar={sidebar} toggle={toggle} />