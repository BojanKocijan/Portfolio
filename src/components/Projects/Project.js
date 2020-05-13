import React from 'react'
import './Project.css'


const Project = props => (
    <div className="Project">
        <div className="Overlay">
         
         <a href={props.link} target={props.target}><img src={props.image}/></a>
         </div>
         <div className="ProjectHolder">
            <h4>{props.title}</h4>
            <p>{props.subtitle}</p>
            <button><a href={props.link} target={props.target}>{props.button}</a></button>  
        </div>
    </div>
)

export default Project