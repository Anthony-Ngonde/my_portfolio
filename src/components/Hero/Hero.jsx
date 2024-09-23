import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Anthony Ngonde,</span> fullstack developer based in Kenya</h1>
        <p>I am a fullstack developer from Nairobi, Kenya with 2 years of experience in multiple companies like Ecom Services Limited, Epsilon and Bodo Moller Chemie.</p>
        <div className='hero-action'>
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
          <div className='hero-cv'>My CV</div>
        </div>
    </div>
  )
}

export default Hero