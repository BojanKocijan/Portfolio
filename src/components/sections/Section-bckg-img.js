import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div`
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(34,82,124,1) 61%, rgba(13,14,31,1) 100%);
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
    margin: 60px auto 10px auto;
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
    @media (max-width: 720px){
        margin: 10px 16px 5px 16px;
        text-align: left;
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