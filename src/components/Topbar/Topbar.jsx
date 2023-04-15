import React from 'react'
import styled from 'styled-components'
import 'boxicons'

const Topbar = () => {
  return (
    <TopbarBox>
        <TopbarContainer>
            <Text>Najnowocześniejsze magazyny w Polsce. Unikat na skalę światową.</Text>
            <SocialsContainer>
                <a href="http://www.facebook.com">
                    <box-icon type='logo' name='facebook-square'></box-icon>
                </a>
                <a href="http://www.instagram.com">
                    <box-icon type='logo' name='instagram'></box-icon>
                </a>
                <ActionButton href='https://www.github.com/goldipl'>Kliknij</ActionButton>
            </SocialsContainer>
        </TopbarContainer>
    </TopbarBox>
  )
}

export const TopbarBox = styled.div `
    width: 100vw;
    background-color: #043A8F;
`;

export const TopbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70vw;
    height: 40px;
    margin: 0 auto;
`;

export const Text = styled.p `
    font-size: 18px;
    line-height: 18px;
    color: #FFFFFF;
`;

export const ActionButton = styled.a `
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: 40px;
    padding: 0 16px;
    background-color: #ED0F04;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 18px;
    transition: 0.6s;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        background-color: #FFFFFF;
        color: #ED0F04; 
        filter: none !important;
    }
`;

export const SocialsContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        margin-right: 16px;
        &:hover {
            filter: invert(100%);
        }
    }
`;

export default Topbar