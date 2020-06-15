export const Header = ( { menu }) => {
    const [sidebar, toggle] = useState(false);
   // const = this.props
    return (
      <Wrapper>
        <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
        <Navbar name={menu}/>
        <Hamburger menu={menu} sidebar={sidebar} toggle={toggle} />
        <Sidebar menu={menu} sidebar={sidebar} toggle={toggle} />
      </Wrapper>
    );
  };