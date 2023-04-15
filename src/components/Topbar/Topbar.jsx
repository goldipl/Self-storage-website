import React from 'react'
import styled from 'styled-components'

const Topbar = () => {
  return (
    <TopbarBox>
        <TopbarContainer>
            <Text>Najnowocześniejsze magazyny w Polsce. Unikat na skalę świątową.</Text>
            <ActionButton>Kliknij</ActionButton>
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
    height: 24px;
    padding: 0 16px;
    border-radius: 4px;
    background-color: #FFFFFF;
    color: #000000;
    font-size: 16px;
    line-height: 18px;
    transition: 0.6s;
    cursor: pointer;
    &:hover {
        background-color: #000000;
        color: #FFFFFF; 
    }
`;

export default Topbar