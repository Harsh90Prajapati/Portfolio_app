import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsInstagram}  from 'react-icons/bs'

function Footer() {
  return (
   <footer>
    <a href="#"className='footer_logo'>HARSH PRAJAPATI</a>

    <ul className="links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Experience</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Testimonial</a></li>
      <li><a href="#">Contact</a></li>
    </ul>

    <div className="footer_socials">
      <a href="https://www.instagram.com/_harshprajapati_/"><BsFacebook/></a>
      <a href="https://www.instagram.com/_harshprajapati_/"><BsInstagram/></a>
      <a href="https://www.instagram.com/_harshprajapati_/"><AiOutlineGithub/></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; Harsh Prajapati. All rights reserved</small>
    </div>
   </footer>
  )
}

export default Footer