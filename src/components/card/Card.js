import React from 'react'
import './Card.css'


const Card = props => (
    <div className="Card">
         <img src={props.image} />
         <div className="CardHolder">
            <h4>{props.title}</h4>
            <p>{props.subtitle}</p>
        </div>
    </div>
)

export default Card