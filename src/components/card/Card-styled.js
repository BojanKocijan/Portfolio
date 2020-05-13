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
    grid-gap: 10px;
    justify-items: center;
    margin: 0 40px 0 40px;
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