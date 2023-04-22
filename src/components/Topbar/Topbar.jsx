import React from 'react'
import styled from 'styled-components'
import 'boxicons'

const Topbar = () => {
  return (
    <TopbarBox>
        <TopbarContainer>
            <Text>Najnowocześniejsze magazyny w Polsce. Unikat na skalę światową.</Text>
            <SocialsContainer>
                <SocialsIconLinks>
                    <a href="http://www.facebook.com">
                        <box-icon type='logo' name='facebook-square'></box-icon>
                    </a>
                    <a href="http://www.instagram.com">
                        <box-icon type='logo' name='instagram'></box-icon>
                    </a>
                </SocialsIconLinks>
                <ActionButton href='tel:+48600600600'>Tel. +48 600 600 600</ActionButton>
            </SocialsContainer>
        </TopbarContainer>
    </TopbarBox>
  )
}

const TopbarBox = styled.div `
    width: 100vw;
    background-color: #112F5E;
`;

const TopbarContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70vw;
    height: 40px;
    margin: 0 auto;
    @media (max-width: 800px) {
        flex-direction: column;
        height: auto;
        width: 100vw;
    }
`;

const Text = styled.p `
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    @media (max-width: 800px) {
        text-align: center;
        font-size: 12px;
    }
`;

const ActionButton = styled.a `
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
    filter: none !important;
    &:hover {
        background-color: #FFFFFF;
        color: #ED0F04; 
        filter: none !important;
    }
`;

const SocialsContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        margin-right: 16px;
        filter: invert(100%);
        &:hover {
            filter: invert(0%);
        }
        @media (max-width: 800px) {
            margin-right: 0;
        }
    }
    @media (max-width: 800px) {
        justify-content: flex-end;
        width: 100vw;
    }
`;

const SocialsIconLinks = styled.div `
    display: flex;
    a {
        margin-right: 16px;
    }
`;

export default Topbar