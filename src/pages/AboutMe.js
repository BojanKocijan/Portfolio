import React from 'react'
import Link from 'gatsby-link'
import SectionStyled from '../components/sections/Section-bckg-img'
import Header from '../components/header/Header'

const AboutMe = () => (
  <div id="Home">
    <Header />
    <div className="About">
    <div className="AboutHeaderHolder">
      <div className="AboutLeftImage"></div>
      <div className="AboutRightText">
        <h1>Husband, father, UX/UI, and Interaction Designer</h1>
        <p>As you can guess from the first page, I am not the one in the middle. I am the one on the bottom: funny and optimistic Serbian guy. I lived in Belgrade, Serbia, which I highly recommend visiting because the food is amazing, people are friendly, and nature is beautiful.</p> 
        <p>I have been living in Hilversum, the Netherlands, for the past two years.</p>
       </div>
    </div>
    <h2>Work experience</h2>
    <h3>During the last 15 years, I went through a journey of "make it pretty" and serving developers with assets, to the many opportunities that lead me to be a part of teams responsible for solving complex business problems through innovation, design thinking, and applying Agile methodologies.</h3>
    <h4>XebiaLabs</h4>
    <p><strong>Senior interaction designer, DevOps at scale @XebiaLabs.</strong> <br />March 2018 - now | Hilversum, The Netherlands</p>

    <h4>CityExpert</h4>
    <p><strong>UX lead and advisor, @CityExpert online Real-state agency.</strong> <br />October 2017 - March 2018 | Belgrade, Serbia</p>

    <h4>CONDA</h4>
    <p><strong>UI/UX designer, @CONDA. CrowdInvesting platform, FinTech</strong> <br />October 2016 - January 2018 | Belgrade, Serbia</p>

    <h4>Mercator Serbia</h4>
    <p className="About"><strong>Senior graphic and web designer, @Mercator Serbia. Retail FMCG</strong> <br />June 2008 - October 2016 | Belgrade, Serbia</p>

    <h4 className="About">OT Visual</h4>
    <p className="About"><strong>Web designer, @OT Visual. Web Agency</strong> <br />June 2007 - June 2008 | Belgrade, Serbia</p>

    <h4 className="About">PGP-RTS</h4>
    <p className="About"><strong>Graphic and prepress designer, @PGP-RTS. National Music Company</strong> <br />March 2005 - June 2007 | Belgrade, Serbia</p>
  
    <h4 className="About">Certifications</h4>
    <p className="About"><strong>Complete React JS web developer with ES6 - Build 10 projects</strong> <br />April 2020</p>
    <p className="About"><strong>Web Accessibility: Learn Best Practices, Tools & Techniques</strong> <br />March 2019</p>
    <p className="About"><strong>Interactive Prototypes with Framer</strong> <br />Aug 2018</p>
    <p className="About"><strong>Principle App - UI Prototyping </strong> <br />Apr 2018</p>
    <a href="https://drive.google.com/file/d/1OS1oqg8mV8-XL9ccnZFKTXri-2jCOVtY/view?usp=sharing" target="_blank"><button>Download CV</button></a>
  </div>
  

  <SectionStyled
    image= {require ('../images/Footer.jpg')}
    text="Feel free to use my website and my projects as an inspiration. Knowledge-sharing and helping others is something that fills your heart. I made my portfolio with Gatsby react.">
      <div className="Contacts">
        <a href="https://www.linkedin.com/in/bojankocijan/" title="Linked in profile"  target="_blank"><img src={require('../images/ln.svg')} width="36px" /></a>
        <a href="https://github.com/BojanKocijan" title="GitHub" target="_blank"><img src={require('../images/gitHub.svg')} width="36px" /></a> 
        <a href="https://www.behance.net/KOCIJAN" title="Behance" target="_blank"><img src={require('../images/behance.svg')} width="36px" /></a>
        <a href="https://dribbble.com/bojankocijan82" title="Dribbble" target="_blank"><img src={require('../images/dribbble-ball-mark.svg')} width="36px" /></a>
        <a href="https://twitter.com/bojankocijan" title="Twitter" target="_blank"><img src={require('../images/twitter.svg')} width="36px" /></a>
        <a href="https://www.instagram.com/bojan_kocijan/?hl=nl" title="Connect with me on Instagram" target="_blank"><img src={require('../images/instagram.svg')} width="36px" /></a>
      </div>
  </SectionStyled>
  </div>
)

export default AboutMe
