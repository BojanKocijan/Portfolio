import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div`
    background: rgb(27,40,83);
    background: linear-gradient(50deg, rgba(27,40,83,1) 0%, rgba(10,15,32,1) 94%);
    margin-bottom: 0;
    background-size: cover;
    min-height: auto;
    display: grid;
    grid-template-rows: 50px auto;
    position: relative;
    background-size: cover;
    background-position: center;
    margin-top: 40px;
    @media (max-width: 860px){
        margin-top: 20px;
    }
    @media (max-width: 720px){
        margin-top: 20px;
    }
`
// background: url(${props => props.image});


const SectionTitleGroup = styled.div`
    height: auto;
`


const SectionTitle = styled.h3`
    color: white;
    font-size: 40px;
    line-height: 1.2;
    font-family: 'Merriweather', serif;
    display: flex;
    font-weight: 300;
    justify-content: center;
    margin: 30px auto 20px auto;
    @media (max-width: 720px){
        margin-top: 20px;
    }
`


const SectionText = styled.p`
    color: white;
    margin-bottom: 30px;
    font-size: 18px;
    margin: 0 24px 40px 24px;
    display: flex;
    justify-content: center;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    @media (max-width: 720px){
        margin: 10px 16px 5px 16px;
        text-align: center;
    }
`

const ToolsHolder= styled.div`
    max-width: 500px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
    padding-bottom: 120px;
    justify-items: center;
    @media (max-width: 720px){
        margin-top: 20px;
    }
`

const SectionStyled = props => (
    <SectionGroup image={props.image}>
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
        <ToolsHolder image={props.tools}/>
        {props.children}
    </SectionGroup>
)


export default SectionStyled