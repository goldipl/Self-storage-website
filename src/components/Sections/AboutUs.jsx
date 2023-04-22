import React from 'react'
import styled from 'styled-components'

const AboutUs = () => {
  return (
    <SectionContainer>
        <AboutUsContainer>
            <Slot>
                <SlotTitle>Slot</SlotTitle>
                <SlotText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci molestiae dolorum doloribus at sunt corporis repellendus ab nemo aperiam. Tempora esse delectus odio perspiciatis corporis sequi provident saepe rerum?
                    Optio eveniet explicabo accusamus earum provident. Quos cumque ut aut tempore ratione rerum nostrum, consequatur repellendus maiores nihil itaque facere reprehenderit, dicta non tempora nisi vitae molestiae voluptatum voluptates veritatis.
                    Mollitia porro numquam eum dolores? Ullam, eligendi. Vitae magnam nam doloremque deserunt non unde. Sunt vero eius laudantium quis, facere vitae! Nihil facilis, optio soluta fugit autem tempore labore qui?
                </SlotText>
            </Slot>
            <Slot>
                <SlotTitle>Slot</SlotTitle>
                <SlotText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci molestiae dolorum doloribus at sunt corporis repellendus ab nemo aperiam. Tempora esse delectus odio perspiciatis corporis sequi provident saepe rerum?
                    Optio eveniet explicabo accusamus earum provident. Quos cumque ut aut tempore ratione rerum nostrum, consequatur repellendus maiores nihil itaque facere reprehenderit, dicta non tempora nisi vitae molestiae voluptatum voluptates veritatis.
                    Mollitia porro numquam eum dolores? Ullam, eligendi. Vitae magnam nam doloremque deserunt non unde. Sunt vero eius laudantium quis, facere vitae! Nihil facilis, optio soluta fugit autem tempore labore qui?
                </SlotText>
            </Slot>
            <Slot>
                <SlotTitle>Slot</SlotTitle>
                <SlotText>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci molestiae dolorum doloribus at sunt corporis repellendus ab nemo aperiam. Tempora esse delectus odio perspiciatis corporis sequi provident saepe rerum?
                    Optio eveniet explicabo accusamus earum provident. Quos cumque ut aut tempore ratione rerum nostrum, consequatur repellendus maiores nihil itaque facere reprehenderit, dicta non tempora nisi vitae molestiae voluptatum voluptates veritatis.
                    Mollitia porro numquam eum dolores? Ullam, eligendi. Vitae magnam nam doloremque deserunt non unde. Sunt vero eius laudantium quis, facere vitae! Nihil facilis, optio soluta fugit autem tempore labore qui?
                </SlotText>
            </Slot>
        </AboutUsContainer>
    </SectionContainer>
  )
}

const SectionContainer = styled.div `
    position: relative;
    display: flex;
    width: 70vw;
    margin: 0 auto;
`

const AboutUsContainer = styled.div `
    position: absolute;
    top: -40px;
    left: 0;
    right: 0;
    display: flex;
    width: 100%;
    background-color: #FFFFFF;
    @media (max-width: 800px) {
        flex-direction: column;
        padding: 16px;
        left: -16px;
    }
`

const Slot = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 30%;
    height: auto;
    margin: 24px;
    @media (max-width: 800px) {
        width: 100%;
        margin: 0;
    }
`

const SlotTitle = styled.h1 `
    font-size: 24px;
    margin: 0 auto 16px;
`

const SlotText = styled.p `
    font-size: 16px;
    text-align: justify;
`

export default AboutUs