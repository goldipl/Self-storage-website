import React from 'react'
import styled from 'styled-components'
import selfstorageimg from './../../../src/assets/img/selfstorage.jpg'

const Hero = () => {

  return (
    <HeroContainer>
      <Image src={selfstorageimg} alt="self-storage"/>
      <HeroBoxContainer>
        <TextContainer data-aos="fade-up" data-aos-duration="3000">
          <H1>Szukasz dodatkowego miejsca do przechowywania?</H1>
        </TextContainer>
        <ButtonsContainer data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">
          <CheckButton>Sprawdź cenę</CheckButton>
        </ButtonsContainer>
      </HeroBoxContainer>
    </HeroContainer>
  )
}

const HeroContainer = styled.div `
  position: relative;
  width: 100%;
  height: calc(80vh - 100px);
  &::before {
    content: '';
    position: absolute;
    left: 0; 
    top: 0;
    width: 100%; 
    height: 100%;
    background: linear-gradient(#07073a80, #112f5e);
  }
`;

const Image = styled.img `
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div `
  display: flex;
`;

const H1 = styled.h1 `
  font-size: 42px;
  color: #FFFFFF;
  margin-top: 0;
  text-align: center;
  @media (max-width: 800px) {
    font-size: 32px;
  }
`;

const HeroBoxContainer = styled.div `
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  @media (max-width: 800px) {
    width: 80%;
  }
`

const ButtonsContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`

const CheckButton = styled.a `
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: #FFFFFF;
  border: 1px solid #ED0F04;
  border-radius: 2px;
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.8s;
  &:hover {
    color: #ED0F04;
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
  }
`
export default Hero