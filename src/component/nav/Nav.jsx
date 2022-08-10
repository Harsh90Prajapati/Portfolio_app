/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
function Nav() {
  const[ activeNav, setActiceNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiceNav('#')}className={activeNav ==='#' ? 'active':''}><AiOutlineHome/></a>
      <a href="#about"  onClick={()=> setActiceNav('#about')}className={activeNav ==='#about' ? 'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiceNav('#experience')}className={activeNav ==='#experience' ? 'active':''}><AiOutlineBook/></a>
      <a href="#service" onClick={()=> setActiceNav('#service')}className={activeNav ==='#service' ? 'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActiceNav('#contact')}className={activeNav ==='#contact' ? 'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav