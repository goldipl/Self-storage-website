import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import 'boxicons'

const Header = () => {
    const [open, setOpen] = useState(false);

  return (
    <Navbar>
      <NavbarContainer>
        <TopNav>
            <Logo>
                <Link to={`#home`}>SELF<span>STORAGE</span></Link>
            </Logo>
            <Hamburger onClick={() => setOpen(!open)}>
                <MenuIcon open={open}>
                    <box-icon name='menu-alt-right'></box-icon>
                </MenuIcon>
                <XIcon open={!open}> 
                    <box-icon name='x'></box-icon>
                </XIcon>
            </Hamburger>
        </TopNav>
        <List open={!open}>
            <Li>
                <Link to={`#home`}>Strona główna</Link>
            </Li>
            <Li>
                <Link to={`#about`}>O firmie</Link>
            </Li>
            <Li>
                <Link to={`#gallery`}>Galeria</Link>
            </Li>
            <Li>
                <Link to={`#pricelist`}>Cennik</Link>
            </Li>
            <Li>
                <Link to={`#contact`}>Kontakt</Link>
            </Li>
        </List>
      </NavbarContainer>
    </Navbar>
  )
}

const Navbar = styled.div `
    width: 100vw;
    height: 60px;
    background-color: #FFFFFF;
    @media (max-width: 800px) {
        height: auto;
    }
`;

const NavbarContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 70vw;
    height: 60px;
    margin: 0 auto;
    @media (max-width: 800px) {
        flex-direction: column;
        height: auto;
        width: 100vw;
    }
`;

const Logo = styled.div `
    font-size: 32px;
    font-weight: 700;
    color: #000000;
    margin-right: 16px;
    a {
        text-decoration: none;
        color: #000000;
        span {
          font-size: 16px;
          font-weight: 300;
          color: #ED0F04;
        }
    }
`;

const TopNav = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
`;

const Hamburger = styled.div `
    display: block;
`;

const MenuIcon = styled.div `
    display: none;
    @media (max-width: 800px) {
        display: ${({ open }) => open ? 'none' : 'block'};
    }
`

const XIcon = styled.div `
display: none;
@media (max-width: 800px) {
    display: ${({ open }) => open ? 'none' : 'block'};
}
`

const List = styled.ul `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 60px;
    @media (max-width: 800px) {
        display: ${({ open }) => open ? 'none' : 'block'};
        flex-direction: column;
        height: auto;
        padding: 0;
    }
`;

const Li = styled.li `
    margin-right: 32px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    &:hover {
      border-bottom: 6px solid #ED0F04;
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: max-content;
        text-decoration: none;
        color: #ED0F04;
    }
    @media (max-width: 800px) {
        height: 40px;
        margin-right: 0;
    }
`;

export default Header