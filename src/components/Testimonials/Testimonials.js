import React from 'react'
import styled from 'styled-components'

const Testimonial = styled.div`
    background: rgb(27,40,83);
    background: linear-gradient(50deg, rgba(27,40,83,1) 0%, rgba(10,15,32,1) 94%);
    width: 350px;
    height: 600px;
    margin-top: 40px;

    /*--- Media quiery ---*/
    @media (max-width: 860px){
        margin-top: 20px;
    }
    @media (max-width: 720px){
        margin-top: 20px;
    } 
`
const PersonImage = styled.div`
    background: url(${props => props.image});
    display: block;
    align-self: center;
    max-width: 450px;
    height: auto;
    position: relative;
    transition: 0.8s cubic-bezier(0.2, 0.82, 0.2, 1);
    margin: 0 auto;
`

const CompanyIcon = styled.div`
    background: url(${props => props.image});
    display: block;
    align-self: center;
    max-width: 450px;
    height: auto;
    position: relative;
    transition: 0.8s cubic-bezier(0.2, 0.82, 0.2, 1);
    margin: 0 auto;
`

const TitleGroup = styled.div`
`
const TestimonialTitle = styled.h3`
    font-size: 42px;
    color: black;
`

const TestimonialTitle = styled.p`
`
const LinkToLinkeIn = styled.button`
`


const Testimonials = props => (
    <Testimonial>
         <PersonImage img={props.image}/>
         <CompanyIcon image={props.image}/>
            <TitleGroup>
                <TestimonialTitle></TestimonialTitle>
                <TestimonialText></TestimonialText>
            </TitleGroup>
            <LinkToLinkeIn button={props.button}></LinkToLinkeIn>
    </Testimonial>
)

export default Testimonials