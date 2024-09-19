import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'


const Navbar = () => {

  const [menu, setmenu] = useState("home");


  return (
    <div className='navbar'>
        <img src={logo} alt='' />
        <ul className="nav-menu">
            <li><AnchorLink><p onClick={()=>setmenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink><p onClick={()=>setmenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink><p onClick={()=>setmenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink><p onClick={()=>setmenu("work")}>Projects</p></AnchorLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink><p onClick={()=>setmenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar