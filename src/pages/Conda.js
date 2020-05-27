import React from 'react'
import Link from 'gatsby-link'
import SectionStyled from '../components/sections/Section-bckg-img'
import Header from '../components/header/Header'
import Testimonials from '../components/testimonial/Testimonials'

const Conda = () => (
  <div id="Home">
    <Header />
    <div className="HeroProjHeaderCO"> 
      <div className="ProjectHeroBody">
        <div className="TextAndImage">
          <h1>CONDA Crowd-Investing</h1>
          <p>I worked with CONDA for almost two years. Working with CONDA made me feel excited about cryptocurrencies, and helped me learn a lot about FinTech. Implementing UX in strict multi-country laws environment was exciting and challenging at the same time.</p>
          <p>If you asked me to criticize designs, I would provide feedback to update colors to meet WCAG AA, at least.</p>
        </div>
        <img className="HeroImages" src={require('../images/CondaHero.png')}/>
      </div>
    </div> 
    <div className="CE">
    <h2>My Role</h2>
    <h3>Set up Design system, design layout to work with WordPress, design plugins, together with PM and stakeholders design new and redesign existing features.</h3>
    <h2>Setting up the system</h2>
    <h4>The challenge</h4>
    <p>Conda had an issue with consistency across the tools and developers had a problem with consistant look. It all started with long meetings and knowledge-sharing sessions. I was working on setting up the base design system in Figma, based on Material design library, since the developers were using Angular 4 for development. For the front-end, the platform itself was WordPress, with specially written plugins by our development team.</p>
    <h4>The solution</h4>
    <p>Design system is born in Figma</p>
    <div id="Images"><img src={require('../images/CONDADesignSystem.png')}/></div>

    <h4>Redesigning the front-end</h4>
    <p>The biggest challenge was to design the investment user flow that needs to be scalable and modular. It had to be the same, but also different, depending on the country and its laws.</p>
    
    <div id="Images"><img src={require('../images/FontEndCONDA.png')}/></div>

    <h2>Wordpress for front-end</h2>
    <h4>Redesign project details pages</h4>
    <p>The project details page is slightly customizable, but in general, from platform to platform, it needs to have the same components.</p>
    <div id="ImagesFull"><img src={require('../images/CONDAFrontEnd.png')}/></div>

    <h2>CMS system for platform owners</h2>
    <h4>Designing the Platform CMS</h4>
    <p>Platform CMS was developed in Angular 4. Options like KYC (Know Your Customer) and AML (Anti Money Laundry) were one of the musts on the B2B part of the platform. We used a light theme for WordPress and Dark theme for B2B from our library.</p>
    <div id="Images"><img src={require('../images/CondaDashboard.png')}/></div>
    <h4>Learnings</h4>
    <p>When you're communicating your process and solutions to a client who isn't always the key decision maker, it's important to keep your points clear and concise enough for easy re-communication. Seek for more feedback and try to sumorize feedback and understand what users want and not what they say that they want.</p>
    <a href="/XebiaLabs" target="_self"><button>Next project: XebiaLabs</button></a>
  </div>
  

  <h2>Testimonials</h2>
    <div className="CardGroup">
      <Testimonials
        image={require('../images/Igor.png')}
        title="Igor Veličković"
        position="CEO / Founder at Chainapp Technologies"
        subtitle="It is my pleasure to deliver this letter of recommendation for Bojan. I’ve had the opportunity to work with Bojan on a daily basis and he’s done an exemplary job as our UX designer. His organizational skills, along with his friendly personality and professionalism, make him the great asset for any company. I was sorry when Bojan left the company but we kept working together on many projects over the years. Highly recommended designer with a lot of experience."/>

    </div>

  <SectionStyled
    image= {require ('../images/Footer.jpg')}
    text="Feel free to use website and projects as an inspiration. Knowledge-sharing and helping others is something that fills my heart. I made this portfolio with Gatsby react.">
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
