import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'

const Social = () => {
  return (
    <div className='header-social'>
         <a href="https://www.instagram.com/_harshprajapati_/" target="_blanks"><AiOutlineInstagram/></a>
         <a href="https://github.com/Harsh90Prajapati" target="_blanks"><FaGithub/></a>
         <a href="https://www.linkedin.com/in/harsh-prajapati-032746223/" target="_blanks"><AiFillLinkedin/></a>
    </div>
  )
}

export default Social