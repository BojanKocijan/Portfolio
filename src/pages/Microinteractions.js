import React from 'react'
import Link from 'gatsby-link'
import SectionStyled from '../components/sections/Section-bckg-img'
import Header from '../components/header/Header'

const Microinteractions = () => (
  <div>
    <Header />
    <div className="CE">
    <div className="CEHeaderHolder">
      <div className="MicroLeftImage"></div>
      <div className="MicroRightText">
        <h1>Micro-interactions</h1>
        <p>Micro interactions have only one purpose: To enable communication between the user and the application. It will delight the user by providing them with human interaction response from your product.</p> 
       </div>
    </div>
    <h2>Work process</h2>
    <h3>This is the first time that I've joined a team of designers that was bigger than two people. Working in a team brings a lot of new challenges, such as consistency across the team, design critiques, etc. XebiaLabs helped me grow by focusing on the problem. They helped me think more openly and push analyzing the problem approach.</h3>
    
    <h4>1. Task modal redesign</h4>
    <p>For the redesigning of the task modal for XL Release, we first organised card sorting exercise to come up with the same base common ground. The exercise was lead by my co-worker UX Researcher. (My co-worker, the UX Researcher, led the exercise.)</p>
    <div id="Images"><img src={require('../images/understanding.png')}/></div>

    <h4>2. Step 2 teamwork workshop</h4>
    <p>Together with the team, we organised a workshop to come up with assumptions and some quick sketches.</p>
    <div id="Images"><img src={require('../images/taskModal.jpg')}/></div>
  

    <h4>3. Current design</h4>
    <p>Since the preliminary investigation of the current design of a task modal created a lot of confusion with users, we documented all pain points that the user has, analysed them, and proposed a new solution. After that, we user-tested it again with correct user roles for this feature.</p>
    <div id="Images"><img src={require('../images/XebiaLabsOldTask.jpg')}/></div>
    <h4>4. New design task modal</h4>
    <p>Task modal driven by design-thinking got great feedback from many of our customers. We gave them more space to operate with tasks, which were, at the same time, easier to understand, and see most important things in order to finish their job faster and easier.
By having in mind that the company is an enterprise, I am not eligible to share screens.
</p>

    <h4>1. Redesigning Folder navigation</h4>
    <p>The end result was that the folder navigation is not scalable. Analyzing this problem even further, in order to solve it, it was obvious that there was a need for a good and scalable foundation.</p>
    <div id="Images"><img src={require('../images/XebiaLabsFolderNavigation.png')}/></div>
    <p>By analysing folder navigation, an even bigger problem emerged. The navigation of the tool needed changes to become more understandable and easier to navigate. By having in mind that the company is an enterprise, I am not eligible to share screens.</p>

    <h4>1. Redesigning XebiaLabs Documentation site</h4>
    <p>XebiaLabs documentation website was not scalable and not user friendly. Analyzing this problem even further, in order to solve it, it was obvious that we need a good and scalable foundation for new documentation website. <a href="https://legacydocs.xebialabs.com/" target="_blank">Take a look at old documentation website.</a></p>
    <div id="Images"><img src={require('../images/XebiaLabsDocumentationOld.png')}/></div>
    <p>Based on our user research, we determined the main pain points of the documentation site. This helped us make important decisions around organizing the content and making scalable, easy-to-use layouts for the new site.</p>
    <p>We discovered that most users were using the search bar instead of the navigation system to find content, so we put a lot of effort into making the site easier to navigate. We added an easier way to find and interact with the most popular topics and broke down each main content area into categories and tiles.</p>
    <h4>Navigating the Content</h4>
    <p>We completely redesigned the site navigation and display categories and related topics on tiles. This helps remove the user’s cognitive load by grouping information logically, allowing them to drill down to the content they need. <a href="https://docs.xebialabs.com/#get-started" target="_blank">Visit new documentation web-site.</a></p>
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

export default Microinteractions
