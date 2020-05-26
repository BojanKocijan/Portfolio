import React from 'react'
import './Testimonials.css'


const Testimonials = props => (
    <div className="Testimonials">
         <img src={props.image} />
         <div className="CardHolder">
            <h4>{props.title}</h4>
            <h5>{props.position}</h5>
            <p>{props.subtitle}</p>
        </div>
    </div>
)

export default Testimonials