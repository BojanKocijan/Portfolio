import React from 'react'
import Link from 'gatsby-link'
import SectionStyled from '../components/sections/Section-bckg-img'
import Header from '../components/header/Header'

const XebiaLabs = () => (
  <div id="Home">
    <Header />
    <div className="CE">
    <div className="CEHeaderHolder">
      <div className="XebiaLabsLeftImage"></div>
      <div className="XebiaLabsRightText">
        <h1>XebiaLabs, DevOps at scale</h1>
        <p>For the last two years, I have been working with some of the brightest minds that I have ever met. The amount of knowledge that I received and shared on everyday bases is enormous. I became better UX researcher and designer. I've started working with more developers than ever before, and it has reignited my passion for coding.</p> 
       </div>
    </div>
    <h2>Work process</h2>
    <h3>XebiaLabs helped me grow by focusing on the problem. Even that I was already practicing analyze the problem first approach, with XebiaLabs that approach just had more value.</h3>
    
    <h2>Task modal redesign</h2>

    <h4>The challenge</h4>
    <p>With the help of ticketing system, based on users requests and the preliminary investigation of the current design of a task modal, we were aware that current design of task modal creates lot of confusion with users, we documented all the pain points that the users has, analysed them, and take them into account wheh we were designing new task modal.</p>
    

    <h4>Analize the problem</h4>
    <p>First thing that we did = we organised card sorting exercise to come up with the same base and common ground and understanding about the problem..</p>
    <div id="Images"><img src={require('../images/understanding.png')}/></div>
    <div id="Images"><img src={require('../images/XebiaLabsOldTask.jpg')}/></div>

    <h4>The solution</h4>
    <p>Together with the team, we together come up with assumptions and some quick sketches for task modal redesign.</p>
      
    <h4>New design task modal</h4>
    <p>New task modal, driven by design-thinking got great feedback from many of our customers. We gave them more space to operate with tasks, which were, at the same time, easier to understand, and see most important things in order to finish their job faster and easier.
By having in mind that the company is an enterprise, I am not eligible to share screens.
</p>
<div id="Images"><img src={require('../images/taskModal.jpg')}/></div>
    <h2>Folder navigation redesign</h2>
    <h4>The challenge</h4>
    <p>Our current folder navigation is not scalable, so simply it can not grow anymore. Analyzing this problem even further,it was obvious that there was a need to redesign whole tool navigation to get a good and scalable foundation.</p>
    
    <h4>The solution</h4>
    <p>By talking with Stake holders and latter with users more changes to navigation were made in order to help  to have more understandable and easier to use tool. I am not eligible to share final screens and prototype.</p>
    <div id="Images"><img src={require('../images/XebiaLabsFolderNavigation.png')}/></div>
    <div id="Images"><img src={require('../images/NewNav.jpg')}/></div>


    <h2>Documentation website</h2>
    <h4>The challenge</h4>
    <p>XebiaLabs documentation website was not scalable and not user friendly. We needed a good and scalable foundation for new documentation website which can support growth. <a href="https://legacydocs.xebialabs.com/" target="_blank">Take a look at old documentation website.</a></p>
    
    <p>Based on our user research, we determined the main pain points of the documentation site. This helped us make important decisions around organizing the content and making scalable, easy-to-use layouts for the new site.</p>
    <p>We discovered that most users were using the search bar instead of the navigation system to find content, so we put a lot of effort into making the site easier to navigate. We added an easier way to find and interact with the most popular topics and broke down each main content area into categories and tiles.</p>
    <div id="Images"><img src={require('../images/XebiaLabsDocumentationOld.png')}/></div>
   
    <h4>The solution</h4>
    <p>We completely redesigned the site navigation and display categories and related topics on tiles. This helps remove the user’s cognitive load by grouping information logically, allowing them to drill down to the content they need. <a href="https://docs.xebialabs.com/#get-started" target="_blank">Visit new documentation web-site.</a></p>
    <div id="Images"><img src={require('../images/DocSite.jpg')}/></div>
    <div id="Images"><img src={require('../images/XebiaLabs_Documentation.png')}/></div>
    <a href="https://blog.xebialabs.com/2019/08/22/meet-the-new-xebialabs-documentation-site/" target="_blank"><button>Read blog post</button></a>
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
