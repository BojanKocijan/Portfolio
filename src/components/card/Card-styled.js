import React from 'react'
import styled from 'styled-components'


const CardLeft = props => {
    <CardGroup>
        <CardImage image={props.image} />
        <CardTextHolder>
            <CardTitle>{props.title}</CardTitle>
            <CardDesc>{props.desc}</CardDesc>
        </CardTextHolder>
    </CardGroup>
}

const CardGroup = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    height: 500px;
    min-width: 320px;
    overflow: hidden;
    position: relative;
    transition: 0.8s cubic-bezier(0.2, 0.82, 0.2, 1);
    width: 100%;
`

const CardImage = styled.img`
`

const CardTextHolder = styled.div`
`
const CardTitle = styled.h3`
`
const CardDesc = styled.p`
`

export default CardLeft