import React from 'react'
import Link from 'gatsby-link'
import SectionStyled from '../components/sections/Section-bckg-img'
import Header from '../components/header/Header'
import Testimonials from '../components/testimonial/Testimonials'

const XebiaLabs = () => (
  <div id="Home">
    <Header />
    <div className="HeroProjHeaderXL"> 
      <div className="ProjectHeroBody">
        <div className="TextAndImage">
          <h1>XebiaLabs, DevOps at scale</h1>
          <p>For the last two years, I was helping XebiaLabs build and modernize their products and make consistent look across the tools.</p> 
        </div>
        <img className="HeroImages" src={require('../images/XLHero.gif')}/>
      </div>
    </div>     
    <div className="CE"> 
    <h4>My Role</h4>
    <h3>I lead design for most of the feaures for XL products, like new calendar look and feel and new layout of the applications.</h3>

    
    <h2>Calendar redesign</h2>
    <h4>The challenge</h4>
    <p>Users are not able clearly to see duration of the releases inside the curent calendar.</p>
    <div id="Images"><img src={require('../images/calendar.png')}/></div>
    <h4>Approach</h4>
    <p>To gather insights on the current experience from customers, Sales Engeneers that has a lot of contact with customers, with a focus on both long term and short term releases.</p>
    <h4>The solution</h4>
    <p>The new calendar addressed all users' pain points and provided them easy to use and to overview solutions of their releases. Calendar now allows you to easily overview your planned and ongoing releases and how others release infecting yours. </p>
    <div id="Images"><img src={require('../images/CalendarAnimation.gif')}/></div>


    
    <h2>Task modal redesign</h2>

    <h4>The challenge</h4>
    <p>With the help of ticketing system, based on users requests and the preliminary investigation of the current design of a task modal, we were aware that current design of task modal creates lot of confusion with users, we documented all the pain points that the users has, analysed them, and take them into account wheh we were designing new task modal.</p>
    

    <h4>Analyze the problem</h4>
    <p>First thing that we did, we organised card sorting exercise and analyzed the problem in order to reduce noise on a task modal and come up with the same base and common ground and understanding.</p>
    <div id="Images"><img src={require('../images/understandingProblem.png')}/></div>

    <h4>The solution</h4>
    <p>Together with the team, we together come up with assumptions and some quick sketches for task modal redesign.</p>
      
    <h4>New design task modal</h4>
    <p>New task modal, driven by design-thinking got great feedback from many of our customers. We gave them more space to operate with tasks, which were, at the same time, easier to understand, and see most important things in order to finish their job faster and easier. By having in mind that the company is an enterprise, I am not eligible to share screens.</p>
    <div id="Images"><img src={require('../images/taskModalSolution.png')}/></div>   

    <h4>Learnings</h4>
    <p>The introduction of design systems was a relatively new aspect of our process and I had underestimated the success of it's adoption. A design system needs constant reference, particularly when operating within teams that see regular change in personnel or growing teams. A design system's success relies on a dedicated advocate.</p>
    <a href="/CityExpert" target="_self"><button>Next project: City Expert</button></a>
    
  </div>


  <h2>Testimonials</h2>
    <div className="CardGroup">
      <Testimonials
        image={require('../images/NadiaUdalova.png')}
        title="Nadia Udalova"
        position="Product Design Manager, Verify and Release at GitLab Inc."
        subtitle="Bojan is an exceptional designer to have on the team. He is a hard worker, always giving it all to solve a challenge. Bojan has great visual and prototyping skills, as well as a broad experience with a number of design tools. Bojan is great person to work with, very kind and welcoming to others. I would be happy if our career paths would cross again."/>

<Testimonials
        image={require('../images/Hes.png')}
        title="Hes Siemelink"
        position="Senior Product Architect at digital.ai."
        subtitle="Bojan is a joy to work with and he creates beautiful and clean designs that work. I've had the pleasure to work with Bojan on various occasions and he is a very good listener and highly skilled in bringing ideas to live in the screen. His designs are logical and esthetically pleasing. He also takes feedback very well and won't stop until he has found a satisfactory solution. I hope to work with Bojan in the future."/>
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

export default XebiaLabs
