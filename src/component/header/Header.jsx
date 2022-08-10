/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './header.css'
import Ct from './Ct'
import ME from '../../assets/me.png'
import Social from './Social'

function Header() {
  return (
    <header>
      <div className="containor header_containor">

        <h5>Hello I'm</h5>
        <h1>Harsh Prajapati</h1>
        
        <div className="text-light">Fullstack Developer</div>
        
        <Ct />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll_down'> Scroll Down </a>

        <Social/>
        
      </div>
    </header>
  )
}

export default Header