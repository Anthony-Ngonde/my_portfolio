import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Anthony Ngonde,</span> fullstack developer based in Kenya</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ratione tempora deserunt non sit ad accusantium perferendis architecto nemo, numquam fuga perspiciatis sed animi cupiditate odio eaque reiciendis illum vel!</p>
        <div className='hero-action'>
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
          <div className='hero-cv'>My CV</div>
        </div>
    </div>
  )
}

export default Hero