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
          <h1>Hi, I am a UI/UX Designer</h1>
          <p>based in Hilversum, Netherlands.<br />My name is Bojan Kocijan, I'm passionate about user interface, user research, and coding. I do it with &#10084; and passion!</p>
          <a href="https://drive.google.com/file/d/1OS1oqg8mV8-XL9ccnZFKTXri-2jCOVtY/view?usp=sharing" target="_blank"><button>Download CV</button></a>
          <div className="Logos">
            <Tooltip className="BlackTooltip" label="LinkedIn profile" style={{ background: "hsla(0, 0%, 0%, 0.75)", color: "white", border: "none", borderRadius: "4px", padding: "0.5em 1em", possition: "relative", marginLeft:"-50px", }}><a href="https://www.linkedin.com/in/bojankocijan/"  target="_blank"><img src={require('../images/ln.svg')} width="36px" /></a></Tooltip>
            <Tooltip className="BlackTooltip" label="GitHub profile" style={{ background: "hsla(0, 0%, 0%, 0.75)", color: "white", border: "none", borderRadius: "4px", padding: "0.5em 1em", possition: "relative", marginLeft: "-40px",}}><a href="https://github.com/BojanKocijan"  target="_blank"><img src={require('../images/gitHub.svg')} width="36px" /></a></Tooltip> 
            <Tooltip className="BlackTooltip" label="Behance profile" style={{ background: "hsla(0, 0%, 0%, 0.75)", color: "white", border: "none", borderRadius: "4px", padding: "0.5em 1em", possition: "relative", marginLeft: "-40px",}}><a href="https://www.behance.net/KOCIJAN"  target="_blank"><img src={require('../images/behance.svg')} width="36px" /></a></Tooltip>
            <Tooltip className="BlackTooltip" label="Dribbble profile" style={{ background: "hsla(0, 0%, 0%, 0.75)", color: "white", border: "none", borderRadius: "4px", padding: "0.5em 1em", possition: "relative", marginLeft: "-46px",}}><a href="https://dribbble.com/bojankocijan82"  target="_blank"><img src={require('../images/dribbble-ball-mark.svg')} width="36px" /></a></Tooltip>
            <Tooltip className="BlackTooltip" label="Twitter profile" style={{ background: "hsla(0, 0%, 0%, 0.75)", color: "white", border: "none", borderRadius: "4px", padding: "0.5em 1em", possition: "relative", marginLeft: "-40px",}}><a href="https://twitter.com/bojankocijan"  target="_blank"><img src={require('../images/twitter.svg')} width="36px" /></a></Tooltip>
            <Tooltip className="BlackTooltip" label="Instagram profile" style={{ background: "hsla(0, 0%, 0%, 0.75)", color: "white", border: "none", borderRadius: "4px", padding: "0.5em 1em", possition: "relative", marginLeft: "-40px",}}><a href="https://www.instagram.com/bojan_kocijan/?hl=nl" target="_blank"><img src={require('../images/instagram.svg')} width="36px" /></a></Tooltip>
          </div>
    <div className="bckgImage"></div>
            <svg width="100%" height="172" viewBox="0 auto 100% auto" fill="none">
            <path fill="white">
              <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="19s"
              values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

               M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

              M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
 
              M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;" />
              </path>
           </svg>
        </div>
     </div>
      <h2 id="Projects">Projects and contributions</h2>
      <div className="ProjectGroup">
        <Project
          image={require('../images/xebialabs.png')}
          title="XebiaLabs, Hilversum"
          subtitle="For the past 2 years, I was working with XebiaLabs on XL Release and XL Deploy DevOps products. That employment helped me grow and become better UX researcher, designer and more valuable team member."
          button="Find out more"
          link="/XebiaLabs"
          target="_self"/>
        
        <Project
          image={require('../images/DSM.png')}
          title="Design System Manager, XebiaLabs"
          subtitle="At XebiaLabs, I used DSM as a place from where designers and developers are working from the same source of truth. InVision DSM helped me manage all our components and comunicate design language."
          button="View Library"
          link="https://projects.invisionapp.com/dsm/xebia-labs/xl-base"
          target="_blank"/>

        <Project
          image={require('../images/CityExpert.png')}
          title="CityExpert, Belgrade"
          subtitle="I was working with CityExpert Serbian startup as UI/UX designer and consultant. City Expert is online real-estate agency from Belgrade. It was a great experience to use a data-driven approach in user testing!"
          button="Find out more"
          link="/CityExpert"
          target="_self"/>

        <Project
          image={require('../images/CONDA.png')}
          title="CONDA, Vienna"
          subtitle="CONDA is more than a crowd investing platform. CONDA is the connecting link between entrepreneurs and investors based on blockchain technology, and while working with CONDA, I've learned a lot about FinTech."
          button="Find out more"
          link="/Conda"
          target="_self"/>

        <Project
          image={require('../images/progressBar.png')}
          title="Contributing to Framer X store"
          subtitle="I am always keen to learn new things, new tools, and to improve myself. I made this small component to contribute to Framer X store. I am really excited to be a part of this big community. Search for Bojan Kocijan as a contributor."
          button="Go to Framer store"
          link="https://packages.framer.com/?q=Bojan%20Kocijan"
          target="_blank"/>   

        <Project
          image={require('../images/microInteractions.gif')}
          title="Micro Interactions"
          subtitle="Micro interactions have only one purpose: To enable communication between the user and the application. It will delight the user by providing them with human interaction response from your product."
          button="Go to prototype"
          link="https://microinteractions.netlify.com/"
          target="_blank"/>
      </div>

      <SectionStyled
        image= {require ('../images/Footer.jpg')}
        title="Tools in my toolbelt"
        text="I have more than 15 years of experience as a designer. For me, everything started with playing around with Photoshop, which is probably the same start for most of the designers.">
          <div className="LogosTools">
              <img src={require('../images/framer.svg')} height="36px" title="Experienced in Framer X" />
              <img src={require('../images/sketch.svg')} height="36px" title="Experienced with Sketch"/>
              <img src={require('../images/figma.svg')} height="36px" title="Experienced with Figma"/>
              <img src={require('../images/invision.svg')} height="29px" title="Experienced with InVision"/>
              <img src={require('../images/principle.svg')} height="36px" title="Experienced with Principle"/>
              <img src={require('../images/Creative_Cloud.svg')} height="30px" title="More then 15 years of experiance with Adobe"/>
          </div>
      </SectionStyled>
      <h2>My approach</h2>
      <div className="CardGroup">
        <Card
          image={require('../images/understanding.png')}
          title="Understanding the problem"
          subtitle="To be able to understand what the user needs, the first step in my thought process is to understand the problem the user is facing. Depending on the scale of the feature or improvement that needs to be taken into account, I would organize a workgroup or simply talk with people that can give me more information."/>
        <Card
          image={require('../images/taskModal.jpg')}
          title="Design thinking"
          subtitle="Design thinking is a non-linear, iterative process that seeks to understand users, challenge assumptions, redefine problems, and create innovative solutions to prototype and test. Together, with the team, after understanding or thinking that we understand the problem, we would come together with sketches of assumptions that would help the user to solve the problem. The first iteration is, in 90% of cases, nothing more than a test to get the initial user's first feedbacks."/>
        <Card
          image={require('../images/greasio.png')}
          title="Creating prototypes and validating with user"
          subtitle="To test flows and prototypes with users we would come with tasks that users need to complete in a prototype. Also, we would let the user tell us how he feels and what is his thoughts. In some other cases with the data-driven approach, we would analyze data gathered from Hot-Jar or analytics."
          />
        <Card
          image={require('../images/magicCircle.jpg')}
          title="Magic circle of iterations"
          subtitle="Iterative design is a design methodology based on a cyclic process of prototyping, testing, analyzing, and refining a product or process. Honestly, that is something that designers always did, but now we have a name for it. Based on the results of testing, we would make a new set of iterations of a design, changes, and refinements. As we used to call it - Back to the drawing board."/>
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

  <form name="contact" netlify netlify-honeypot="bot-field" hidden>
    <input type="text" name="name" />
    <input type="email" name="email" />
    <textarea name="message"></textarea>
  </form>
  </div>
)

export default IndexPage