import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar>
      <NavbarContainer>
        <Logo>
            <Link to={`#home`}>SELF<span>STORAGE</span></Link>
        </Logo>
        <List>
            <Li>
                <Link to={`#home`}>Strona główna</Link>
            </Li>
            <Li>
                <Link to={`#about`}>O firmie</Link>
            </Li>
            <Li>
                <Link to={`#article`}>Galeria</Link>
            </Li>
            <Li>
                <Link to={`#gallery`}>Cennik</Link>
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

const List = styled.ul `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 60px;
    @media (max-width: 800px) {
        flex-direction: column;
        height: auto;
    }
`;

const Li = styled.li `
    margin-right: 32px;
    list-style: none;
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
    }
`;

export default Header