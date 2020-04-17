import React from 'react'
import './Section.css'

const Section = props => (
    <div className="SectionGroup">
        <img src={props.logo} />
        <div className="SectionTitleGroup">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    </div>
)

export default Section