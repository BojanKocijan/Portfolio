import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Tooltip, useTooltip, TooltipPopup } from "@reach/tooltip";
import "@reach/tooltip/styles.css";

class Header extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      hasSrcoll: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', 
    this.handleSroll)
  }

  handleSroll=(event)=>{
    const scrollTop = window.pageYOffset

    if (scrollTop >50) {
      this.setState({ hasSrcoll: true})
    }
    else {
      this.setState({hasSrcoll: false})
    }
  }

  render (){
    return (
      <div className={this.state.hasSrcoll ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Tooltip label="Home"><AnchorLink to="/#Home"><img src={require('../../images/bkLogo.svg')} width="33" title="Bojan Kocijan"/></AnchorLink></Tooltip>
          <AnchorLink to="/#Projects">Projects</AnchorLink>
          <Link to="/AboutMe">About me</Link>
          <a href="mailto:kocijan@gmail.com?subject=We love your work, we would like to talk with you"><button>Get in Touch</button></a>
        </div>
      </div>
    )
  }
}

export default Header
