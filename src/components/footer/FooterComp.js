import React from 'react'
import './Footer.css'

const FooterComp = props => (
    <div className="FooterGroup">
        <p className="FooterDisclaimer">{props.text}</p>
        <img src={props.connections}/>
        {props.children}   
    </div>
)

export default FooterComp