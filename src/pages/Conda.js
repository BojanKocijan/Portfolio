import React from 'react'
import Link from 'gatsby-link'
import SectionStyled from '../components/sections/Section-bckg-img'
import Header from '../components/header/Header'

const Conda = () => (
  <div id="Home">
    <Header />
    <div className="CE">
    <div className="CEHeaderHolder">
      <div className="CONDALeftImage"></div>
      <div className="CONDARightText">
        <h1>CONDA Crowd-Investing</h1>
        <p>I worked with CONDA for almost two years. Working with CONDA made me feel excited about cryptocurrencies, and helped me learn a lot about FinTech. Implementing UX in strict multi-country laws environment was exciting and challenging at the same time.</p>
        <p>If you asked me to criticize designs that I have made for CONDA, for sure it would be the choice of the color palette. If I had the chance now, I would provide feedback to update colors to meet WCAG AA, at least.</p>
        <p>While working for CONDA, I used Figma. It turned out to be a great tool.</p>
       </div>
    </div>
    <h2>Work process</h2>
    <h3>CONDA is an Austrian FinTech startup. Their product was a white-label platform for Crowd-Investing. User testing, as such, was done more by validating the designs with B2B users, together with all stakeholders and platform owners.</h3>
    <h2>Setting up the "Design system"</h2>
    <h4>1. Using Figma</h4>
    <p>It all started with long meetings and knowledge-sharing sessions. I was working on setting up the base design system in Figma, based on Material design library, since the developers were using Angular 4 for development. For the front-end, the platform itself was WordPress, with specially written plugins by our development team.</p>
    <div id="Images"><img src={require('../images/CONDA-Colors.png')}/></div>
    <div id="Images"><img src={require('../images/Conda-ButtonsAndFOnts.png')}/></div>

    <h2>Put the "Design system" in action</h2>
    <h4>1. Redesigning the front-end</h4>
    <p>The biggest challenge was to design the investment user flow that needs to be scalable and modular. It had to be the same, but also different, depending on the country and its laws.</p>
    <div id="Images"><img src={require('../images/CONDA_investment.png')}/></div>
    <h4>2. Investment step 2</h4>
    <div id="Images"><img src={require('../images/CONDA_Investment2.png')}/></div>

    <h2>Wordpress for front-end</h2>
    <h4>1. Redesign project details pages</h4>
    <p>The project details page is slightly customizable, but in general, from platform to platform, it needs to have the same components.</p>
    <div id="Images"><img src={require('../images/CONDA_campaign.png')}/></div>
    <h4>2. Campaign details page</h4>
    <div id="Images"><img src={require('../images/CONDA_Details.png')}/></div>
    <h4>3. Q&A page</h4>
    <div id="Images"><img src={require('../images/CONDA_QA.png')}/></div>

    <h2>CMS system for platform owners</h2>
    <h4>1. Designing the Platform CMS</h4>
    <p>Platform CMS was developed in Angular 4. Options like KYC (Know Your Customer) and AML (Anti Money Laundry) were one of the musts on the B2B part of the platform. We used a light theme for WordPress and Dark theme for B2B from our library.</p>
    <div id="Images"><img src={require('../images/CONDA_private.png')}/></div>
    <h4>2. Personal account</h4>
    <div id="Images"><img src={require('../images/Conda_personal.png')}/></div>
    <h4>3. Legal or company account</h4>
    <div id="Images"><img src={require('../images/CONDA_Company_Verify.png')}/></div>

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

export default Conda
