import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <Text>Footer</Text>
    </FooterContainer>
  )
}

const FooterContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.p `
  font-size: 16px;
`

export default Footer