import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src="https://files.oaiusercontent.com/file-lHfCnPIZuY3iPkKK63hjMCir?se=2024-09-23T13%3A09%3A36Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3DIMG_9407.jpg&sig=6p5970uWNjCGFUyfhPnF6Y50N/3kFUIqo1M%2BFMMr3Fs%3D" alt="" width="401" height="602" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced Fullstack Developer with over 2 years of professional expertise in the field. Throughout my career I have had the priviledge of collaborating with prestigious organizations, contributing to their success and growth.</p>

                    <p>My passion for fullstack development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>

                    <div className="about-skill"><p>Python</p><hr style={{width:"70%"}}/></div>

                    <div className="about-skill"><p>React Js</p><hr style={{width:"60%"}}/></div>

                    <div className="about-skill"><p>Javascript</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
        <h1>5+</h1>
        <p>HAPPY CLIENTS</p>
    </div>
 </div>
</div>

        
  )
}

export default About