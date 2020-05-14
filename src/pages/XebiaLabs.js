import React from 'react'
import Link from 'gatsby-link'
import SectionStyled from '../components/sections/Section-bckg-img'
import Header from '../components/header/Header'

const XebiaLabs = () => (
  <div id="Home">
    <Header />
    <div className="HeroProjHeaderXL"> 
      <div className="ProjectHeroBody">
        <div className="TextAndImage">
          <h1>XebiaLabs, DevOps at scale</h1>
          <p>For the last two years, I have been working with some of the brightest minds that I have ever met. The amount of knowledge that I received and shared on everyday bases is enormous. I became better UX researcher and designer. I've started working with more developers than ever before, and it has reignited my passion for coding.</p> 
        </div>
        <img className="HeroImages" src={require('../images/XLHero.png')}/>
      </div>
    </div>     
    <div className="CE"> 
    <h2>Work process</h2>
    <h3>XebiaLabs helped me grow by focusing on the problem. Even that I was already practicing analyze the problem first approach, with XebiaLabs that approach just had more value.</h3>
    
    <h2>Calendar redesigned</h2>
    <h4>The challenge</h4>
    <p>Users are not able clearly to see duration of the elemnts inside the curent calendar.</p>
    
    <h4>The solution</h4>
    <p>New was created is created to align list and communication between all release Managers. The new Calendar allows you to easily overview your planned work and how others work infecting yours. </p>
    <div id="Images"><img src={require('../images/calendar.png')}/></div>

    <h2>Task modal redesign</h2>

    <h4>The challenge</h4>
    <p>With the help of ticketing system, based on users requests and the preliminary investigation of the current design of a task modal, we were aware that current design of task modal creates lot of confusion with users, we documented all the pain points that the users has, analysed them, and take them into account wheh we were designing new task modal.</p>
    

    <h4>Analize the problem</h4>
    <p>First thing that we did, we organised card sorting exercise and analyzed the problem in order to reduce noise on a task modal and come up with the same base and common ground and understanding.</p>
    <div id="Images"><img src={require('../images/understandingProblem.png')}/></div>

    <h4>The solution</h4>
    <p>Together with the team, we together come up with assumptions and some quick sketches for task modal redesign.</p>
      
    <h4>New design task modal</h4>
    <p>New task modal, driven by design-thinking got great feedback from many of our customers. We gave them more space to operate with tasks, which were, at the same time, easier to understand, and see most important things in order to finish their job faster and easier.
By having in mind that the company is an enterprise, I am not eligible to share screens.
</p>
    <div id="Images"><img src={require('../images/taskModalSolution.png')}/></div>   

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

export default XebiaLabs
