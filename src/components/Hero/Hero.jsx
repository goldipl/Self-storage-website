import React from 'react'
import styled from 'styled-components'
import selfstorageimg from './../../../src/assets/img/selfstorage.jpg'

const Hero = () => {
  return (
    <HeroContainer>
      <Image src={selfstorageimg} alt="self-storage"/>
    </HeroContainer>
  )
}

export const HeroContainer = styled.div `
  position: relative;
  width: 100%;
  height: calc(70vh - 100px);
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

export const Image = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export default Hero