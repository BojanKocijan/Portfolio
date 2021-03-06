import Link from 'gatsby-link'
import React from 'react'
import Card from '../components/card/Card'
//import Section from '../components/sections/Section'
import SectionStyled from '../components/sections/Section-bckg-img'
import Project from '../components/Projects/Project'
import Header from '../components/header/Header'
import { Tooltip, useTooltip, TooltipPopup } from "@reach/tooltip";
import "@reach/tooltip/styles.css";
//import FooterComp from '../components/footer/FooterComp update'

const IndexPage = () => (
  <div id="Home">
    <Header />
    <div className="Hero">
     <div className="HeroGroup">
        <div id="profile"></div>
          <h1>Hi, I'm Bojan Kocijan</h1>
          <p><small>I am a Senior UI/UX and interaction designer who is passionate about code.</small><br></br>I help brands to launch new products with a focus on user experience</p>
          
          <a href="https://drive.google.com/file/d/1OS1oqg8mV8-XL9ccnZFKTXri-2jCOVtY/view?usp=sharing" target="_blank"><button>Download CV</button></a>
          <div className="Logos">
            <Tooltip className="BlackTooltip" label="LinkedIn profile" style={{ background: "hsla(0, 0%, 0%, 0.75)", color: "white", border: "none", borderRadius: "4px", padding: "0.5em 1em", possition: "relative", marginLeft:"-50px", }}><a href="https://www.linkedin.com/in/bojankocijan/"  target="_blank"><img src={require('../images/ln.svg')} width="36px" /></a></Tooltip>
            <Tooltip className="BlackTooltip" label="Behance profile" style={{ background: "hsla(0, 0%, 0%, 0.75)", color: "white", border: "none", borderRadius: "4px", padding: "0.5em 1em", possition: "relative", marginLeft: "-40px",}}><a href="https://www.behance.net/KOCIJAN"  target="_blank"><img src={require('../images/behance.svg')} width="36px" /></a></Tooltip>
            <Tooltip className="BlackTooltip" label="Dribbble profile" style={{ background: "hsla(0, 0%, 0%, 0.75)", color: "white", border: "none", borderRadius: "4px", padding: "0.5em 1em", possition: "relative", marginLeft: "-46px",}}><a href="https://dribbble.com/bojankocijan82"  target="_blank"><img src={require('../images/dribbble-ball-mark.svg')} width="36px" /></a></Tooltip>
            <Tooltip className="BlackTooltip" label="GitHub profile" style={{ background: "hsla(0, 0%, 0%, 0.75)", color: "white", border: "none", borderRadius: "4px", padding: "0.5em 1em", possition: "relative", marginLeft: "-40px",}}><a href="https://github.com/BojanKocijan"  target="_blank"><img src={require('../images/gitHub.svg')} width="36px" /></a></Tooltip> 
            <Tooltip className="BlackTooltip" label="Twitter profile" style={{ background: "hsla(0, 0%, 0%, 0.75)", color: "white", border: "none", borderRadius: "4px", padding: "0.5em 1em", possition: "relative", marginLeft: "-40px",}}><a href="https://twitter.com/bojankocijan"  target="_blank"><img src={require('../images/twitter.svg')} width="36px" /></a></Tooltip>
            <Tooltip className="BlackTooltip" label="Instagram profile" style={{ background: "hsla(0, 0%, 0%, 0.75)", color: "white", border: "none", borderRadius: "4px", padding: "0.5em 1em", possition: "relative", marginLeft: "-40px",}}><a href="https://www.instagram.com/bojan_kocijan/?hl=nl" target="_blank"><img src={require('../images/instagram.svg')} width="36px" /></a></Tooltip>
          </div>
    <div className="bckgImage"></div>
            <svg width="100%" height="172" viewBox="0 auto 100% auto" fill="none">
            <path fill="white">
              <animate repeatCount="indefinite" fill="white" attributeName="d" dur="19s"
              values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

               M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

              M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
 
              M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;" />
              </path>
           </svg>
        </div>
    </div>
    <div id="Projects"></div>
    <h2>Projects and contributions</h2>
    <div className="ProjectGroup">
        <Project
          image={require('../images/xebialabs.png')}
          title="XebiaLabs, DevOps"
          subtitle="For the past 2 years, I have been working in XebiaLabs on the XL Release and XL Deploy DevOps products. Take a peek at a couple of the improvements that took place at XebiaLabs and my approach to solving those challenges."
          button="View Case study"
          link="/XebiaLabs"
          target="_self"/>
      
        <Project
          image={require('../images/CityExpert.png')}
          title="CityExpert, Real Estates"
          subtitle="I worked with City Expert, one of top 10 Serbian startups as UI/UX designer and consultant. City Expert is an online real-estate agency from Belgrade. It was great experience to use a data-driven approach in user testing and help define their design language!"
          button="View Case study"
          link="/CityExpert"
          target="_self"/>

        <Project
          image={require('../images/CONDA.png')}
          title="CONDA, FinTech"
          subtitle="In CONDA, I helped standardize components and create two great products, Platform, and B2B CMS. CONDA is the connecting link between entrepreneurs and investors, and is based on block-chain technology. I learned a lot about FinTech in CONDA."
          button="View Case study"
          link="/Conda"
          target="_self"/>

        <Project
          image={require('../images/DSM.png')}
          title="Design System @XebiaLabs, XL BASE"
          subtitle="At XebiaLabs, I used DSM to enable designers and developers to working from the same source of truth. InVision DSM helped me to manage all components and communicate design language."
          button="View Library"
          link="https://projects.invisionapp.com/dsm/xebia-labs/xl-base"
          target="_blank"/>         

          <Project
            image={require('../images/DSinFigma.png')}
            title="Design System now in Figma"
            subtitle="Our team becomes international, spanning 3 continents, and includes 3 more products. We're working on brand new stuff that will serve as a North Star for our other products to follow. I've moved the design system to from DSM to Figma with the organization of the projects and features in the tools."
            button="Coming soon"
            link="/"
            target="_self"/>



          <Project
            image={require('../images/progressBar.gif')}
            title="Contributing to the FramerX store"
            subtitle="I am always keen to learn new things, new tools, and to improve myself. I made this small component to contribute to Framer X store. I am really excited to be a part of this big community. Search for Bojan Kocijan as a contributor."
            button="Go to Framer store"
            link="https://packages.framer.com/?q=Bojan%20Kocijan"
            target="_blank"/>   

          <Project
            image={require('../images/microInteractions.gif')}
            title="The micro-Interactions"
            subtitle="Micro interactions have only one purpose: To enable communication between the user and the application. It will delight the user by providing them with the with human-like interaction response from your product. Take a look at my Dribble profile for more. Mico-interactions page is coming soon."
            button="View on Dribbble"
            link="https://dribbble.com/bojankocijan82"
            target="_blank"/>
      </div>

      <SectionStyled
        image= {require ('../images/Footer.jpg')}
        title="Tools in my toolbelt"
        text="I have more than 15 years of experience as a designer. For me, everything started with playing around with Photoshop, which is probably the same place it started for most designers.">
          <div className="LogosTools">
          <Tooltip className="BlackTooltip" label="Experienced with FramerX" style={{ background: "hsla(0, 0%, 0%, 0.75)", color: "white", border: "none", borderRadius: "4px", padding: "0.5em 1em", possition: "relative", marginLeft:"-80px", }}><a href="https://www.framer.com/" target="_blank"><img src={require('../images/framer.svg')} height="36px" title="Experienced in FramerX" /></a></Tooltip>
          <Tooltip className="BlackTooltip" label="Experienced with Sketch" style={{ background: "hsla(0, 0%, 0%, 0.75)", color: "white", border: "none", borderRadius: "4px", padding: "0.5em 1em", possition: "relative", marginLeft:"-65px", }}><a href="https://www.sketch.com/" target="_blank"><img src={require('../images/sketch.svg')} height="36px" title="Experienced with Sketch"/></a></Tooltip>
          <Tooltip className="BlackTooltip" label="Experienced with Figma" style={{ background: "hsla(0, 0%, 0%, 0.75)", color: "white", border: "none", borderRadius: "4px", padding: "0.5em 1em", possition: "relative", marginLeft:"-80px", }}><a href="https://www.figma.com/" target="_blank"><img src={require('../images/figma.svg')} height="36px" title="Experienced with Figma"/></a></Tooltip>
          <Tooltip className="BlackTooltip" label="Experienced with inVision" style={{ background: "hsla(0, 0%, 0%, 0.75)", color: "white", border: "none", borderRadius: "4px", padding: "0.5em 1em", possition: "relative", marginLeft:"-80px", }}><a href="https://www.invisionapp.com/" target="_blank"><img src={require('../images/invision.svg')} height="29px" title="Experienced with InVision"/></a></Tooltip>
          <Tooltip className="BlackTooltip" label="Experienced with Principle" style={{ background: "hsla(0, 0%, 0%, 0.75)", color: "white", border: "none", borderRadius: "4px", padding: "0.5em 1em", possition: "relative", marginLeft:"-80px", }}><a href="https://principleformac.com/" target="_blank"><img src={require('../images/principle.svg')} height="36px" title="Experienced with Principle"/></a></Tooltip>
          <Tooltip className="BlackTooltip" label="Experienced with Adobe tools" style={{ background: "hsla(0, 0%, 0%, 0.75)", color: "white", border: "none", borderRadius: "4px", padding: "0.5em 1em", possition: "relative", marginLeft:"-80px", }}><a href="https://www.adobe.com/" target="_blank"><img src={require('../images/Creative_Cloud.svg')} height="30px" title="More then 15 years of experiance with Adobe"/></a></Tooltip>
          </div>
      </SectionStyled>
      <h2>My approach</h2>
      <div className="CardGroup">
        <Card
          image={require('../images/understanding.png')}
          title="Understanding the problem"
          subtitle="To help me understand the user's needs, the first step in my thought process is to understand the problem the user is facing. Depending on the scale of the feature or improvement that needs to be taken into account, I organize a work group, or simply talk with people that can give me more information."/>
        <Card
          image={require('../images/taskModal.jpg')}
          title="Design thinking"
          subtitle="Design thinking is a non-linear, iterative process that seeks to understand users, challenge assumptions, redefine problems, and create innovative solutions to prototype and test. Together, with the team, after understanding or thinking that we understand the problem, we would come together with sketches of assumptions that would help the user to solve the problem. The first iteration is, in 90% of cases, nothing more than a test to get the initial user's first feedbacks."/>
        <Card
          image={require('../images/greasio.gif')}
          title="Creating prototypes and validating with user"
          subtitle="When testing flows and prototypes with users, we come with tasks that users need to complete in a prototype. We let the user tell us how they feel and what is their thoughts are. In some other cases, using a data-driven approach, we would analyze data gathered from Hot-Jar or analytics."
          />
        <Card
          image={require('../images/magicCircle.jpg')}
          title="Magic circle of iterations"
          subtitle="Iterative design is a design methodology based on a cyclic process of prototyping, testing, analyzing, and refining a product or process. Honestly, that is something that designers always did, but now we have a name for it. Based on the results of testing, we would make a new set of iterations of a design, changes, and refinements. As we used to call it - Back to the drawing board."/>
    </div>
  <SectionStyled
    image= {require ('../images/Footer.jpg')}
    text="Feel free to use website and projects as an inspiration. Knowledge-sharing and helping others is something that fills my heart. I made this portfolio with Gatsby react.">
      <div className="Contacts">
        <a href="https://www.linkedin.com/in/bojankocijan/" title="Linked in profile"  target="_blank"><img src={require('../images/ln.svg')} width="36px" /></a>
        <a href="https://www.behance.net/KOCIJAN" title="Behance" target="_blank"><img src={require('../images/behance.svg')} width="36px" /></a>
        <a href="https://dribbble.com/bojankocijan82" title="Dribbble" target="_blank"><img src={require('../images/dribbble-ball-mark.svg')} width="36px" /></a>
        <a href="https://github.com/BojanKocijan" title="GitHub" target="_blank"><img src={require('../images/gitHub.svg')} width="36px" /></a> 
        <a href="https://twitter.com/bojankocijan" title="Twitter" target="_blank"><img src={require('../images/twitter.svg')} width="36px" /></a>
        <a href="https://www.instagram.com/bojan_kocijan/?hl=nl" title="Connect with me on Instagram" target="_blank"><img src={require('../images/instagram.svg')} width="36px" /></a>
      </div>
  </SectionStyled>

  <form name="contact" netlify netlify-honeypot="bot-field" hidden>
    <input type="text" name="name" />
    <input type="email" name="email" />
    <textarea name="message"></textarea>
  </form>
  </div>
)

export default IndexPage