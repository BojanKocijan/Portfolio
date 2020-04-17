import React from './node_modules/react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: url(${props => props.image});
    margin-bottom: 20px;
    background-size: cover;
    min-height: 150px;
    display: grid;
    grid-template-rows: 50px auto;
    position: relative;
`


const FooterTitleGroup = styled.div`
    height: auto;
`



const FooterDisclaimer = styled.p`
    color: white;
    margin-bottom: 10px;
    font-size: 16px;
    margin: 0 100px 60px 100px;
    display: flex;
    justify-content: left;
    text-align: left;
`

const Connect= styled.div`
    max-width: 500px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
    padding-bottom: 90px;
    justify-items: center;
`

const Footer = props => (
    <FooterGroup image={props.image}>
        <FooterTitleGroup>
            <FooterDisclaimer>{props.title}</FooterDisclaimer>
            <Connect image={props.tools}/>
            {props.children}
        </FooterTitleGroup>
    </FooterGroup>
)


export default Footer