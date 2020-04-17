import React from 'react'
import Link from 'gatsby-link'
import SectionStyled from '../components/sections/Section-bckg-img'

const CityExper = () => (
  <div>
    <div className="CE">
    <div className="CEHeaderHolder">
      <div className="CELeftImage"></div>
      <div className="CERightText">
        <h1>City Expert</h1>
        <p>For about seven months, I was working with CityExpert, the online real-estate agency from Belgrade. It was a great experience to use a data-driven approach in user testing and feature designing.</p>
        <p>We would feature flag features, and we would test it with the pool of users. After collecting the feedback, we would iterate it, then redesign, develop again, and push to production.</p> 
       </div>
    </div>
    <h2>Work process</h2>
    <h3>Working for a start-up in Serbia is a great opportunity to be very proactive and shape the business. As most of the companies that are in the early stage of building their product, there is not a lot of space for User Testing as we know it. Fast-growing start-up such as CityExpert has decided to use a data-driven approach in building their web app.<br /> <br /> Build fast -> Send survey -> Analyze survey -> Rebuild -> Deploy</h3>
    
    <h2>User verification process</h2>
    <h4>1. User verification - KYC - flow</h4> 
    <p>To comply and work by law and to be able to identify frauds or misuse of City Expert booking system. City expert implemented a feature called "User verification process". The current implementation of the user verification process was an MVI of the feature. After sending the survey and asking some questions about the understanding of the feature, we redesigned this process and analyzed the responses and screen recordings. We planned a redesign with the next major version of the application.</p>

    <h4>2. Redesigned user verification - KYC - flow</h4>
    <div id="Images"><img src={require('../images/CE-Verifikacion.png')}/></div>
    <h4>3. New verification KYC flow</h4>
    <p>We took into consideration the responses we received from users and split verification into 2 simple steps. Choosing the country and based on the country provided by users, uploader with specific documents would be rendered by country. Every step is guiding a user with a short explanation of what is necessary actions to complete the step.</p>
    <div id="Images"><img src={require('../images/CEnewVerification.png')}/></div>
    <a href="https://invis.io/DAWQC47PJNT#/412316624_Verifikacija" target="_blank"><button>View flow in InVIision</button></a>

    <h2>Set up the "Design system"</h2>
    <h4>1. Redesign and update Design system</h4>
    <p>We needed to work fast, so I have set up the design system (correct name is Pattern library inside of Sketch).</p>
    <div id="Images"><img src={require('../images/CE_Design_System.png')}/></div>
    <h4>Font pairings</h4>
    <div id="Images"><img src={require('../images/CEFontPairings.png')}/></div>
    
    <h2>Redesigning pages by using new "Design system"</h2>
    <h4>1. Redesign real-estate page</h4>
    <p>Once with the new "Design system" in place, I redesigned other pages, keeping old and new features in mind and while also trying to understand the problem that users were facing.</p>
    <div id="Images"><img src={require('../images/CE_nekretnina.png')}/></div>
    <h4>2. Adding a listing to Favorites</h4>
    <div id="Images"><img src={require('../images/CE_Favoriti.png')}/></div>
    <h4>3. Scrolling down the listing</h4>
    <div id="Images"><img src={require('../images/CESerpSrcoll.png')}/></div>

    <h2>Working fast and agile</h2>
    <h4>1. Using Bootstrap grid and Angular</h4>
    <p>We decided that we will implement Bootstrap and Angular (already used in aplication) in order to be able to deliver faster.</p>
    <div id="Images"><img src={require('../images/CE_Grid.png')}/></div>

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

export default CityExper
