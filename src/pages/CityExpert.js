import React from 'react'
import SectionStyled from '../components/sections/Section-bckg-img'
import Header from '../components/header/Header'
import Testimonials from '../components/testimonial/Testimonials'


const CityExper = () => (
  <div id="Home">
    <Header />
    <div className="HeroProjHeaderCE"> 
      <div className="ProjectHeroBody">
        <div className="TextAndImage">
          <h1>City Expert</h1>
          <p>For about seven months, I was working with CityExpert, the online real-estate agency from Belgrade. It was a great experience to use a data-driven approach in user testing and feature designing.</p>
          <p>We would feature flag features, and we would test it with the pool of users. After collecting the feedback, we would iterate it, then redesign, develop again, and push to production.</p>
        </div>
        <img className="HeroImages" src={require('../images/CityExpertHero.png')}/>
      </div>
    </div>     
    <div className="CE">   
    <h2>Work process</h2>
    <h3>Working for a start-up in Serbia is a great opportunity to help them and be the part of the team that will shape the business. As most of the companies that are in the early stage of building their product, there is not a lot of space for User Testing as we know it. Fast-growing start-up such as CityExpert has decided to use a data-driven approach in building their web app.<br /> <br /> Build fast -> Send survey -> Analyze survey -> Rebuild -> Deploy</h3>
    
    <h2>User verification process</h2>
    <h4>The challenge</h4> 
    <p>To comply and work by law and to be able to identify frauds or misuse of City Expert booking system. City expert implemented a feature called "User verification process". The current implementation of the user verification process was an MVI of the feature. After sending the survey and asking some questions about the understanding of the feature, we redesigned this process and analyzed the responses and screen recordings. We planned a redesign with the next major version of the application.</p>

    <h4>The solution</h4>
    <p>We took into consideration the responses we received from users and split verification into 2 simple steps. Choosing the country and based on the country provided by users, uploader with specific documents would be rendered by country. Every step is guiding a user with a short explanation of what is necessary actions to complete the step.</p>
    <div id="Images"><img src={require('../images/CE-Verifikacion.png')}/></div>
    <div id="ImagesFull"><img src={require('../images/VerificationProcessEndResult.png')}/></div>

    <h2>Consistancy accross the portals</h2>
    <h4>The challenge</h4>
    <p>We needed to work fast, so I have set up the design system inside of Sketch.</p>
    <div id="Images"><img src={require('../images/CEcolors.png')}/></div>
    <div id="Images"><img src={require('../images/CE_Design_System.png')}/></div>
    <div id="Images"><img src={require('../images/CEusers.png')}/></div>

    <h4>The solution</h4>
    <p>Think about posible scenarios and design component to respond and adopt.</p>
    <div id="Images"><img src={require('../images/CEMaps1.png')}/></div>
    <div id="Images"><img src={require('../images/CEMaps2.png')}/></div>

    <h2>Redesigning frontend</h2>
    <h4>The challenge</h4>
    <p>Once with the new "Design system" in place, I redesigned other pages, in order to remove clutter adn make them more cleaner, while keeping old and new features in mind and also trying to understand the problem that users were facing.</p>
    <h4>The solution</h4>
    <p>We noticed that users looks at the bottom part less often for example exact location of real-estate even if they said in survey that location is very important to them, we added fast navigation links on the left.</p>
    <div id="Images"><img src={require('../images/CE_nekretnina.png')}/></div>
    

  </div>

  <h2>Testimonials</h2>
    <div className="CardGroup">
      <Testimonials
        image={require('../images/Darko.png')}
        title="Darko Luković"
        position="Senior Product Manager at Smallpdf"
        subtitle="Bojan is an outstanding UX designer. He exceptionally well communicates his ideas while meeting clients' needs. He is an extremely responsible person and passionate about what he does. He makes data-driven decisions and creates an impressive user interface. I would be very happy if I would have the opportunity to work with him again."/>

  </div>

  <SectionStyled
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

export default CityExper
