import React from 'react'
import styled from 'styled-components'
import selfstorageimg from './../../../src/assets/img/selfstorage.jpg'

const Hero = () => {

  return (
    <HeroContainer>
      <Image src={selfstorageimg} alt="self-storage"/>
      <div >
      <TextContainer data-aos="fade-in" data-aos-duration="3000">
        <H1>Szukasz dodatkowego miejsca do przechowywania?</H1>
        <H2>Zapraszamy!</H2>
      </TextContainer>
      </div>
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
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 40%;
  left: 15%;
  transform: translateY(-50%);
`;

const H1 = styled.h1 `
  font-size: 40px;
  color: #FFFFFF;
  margin-top: 0;
  width: 600px;
`;

const H2 = styled.h2 `
  font-size: 24px;
  color: #FFFFFF;
  margin-top: 0;
  margin-left: 30vw;
`;

export default Hero