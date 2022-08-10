/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="containor about_containor">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>
          
          <div className="about_content">
            <div className="about_cards">
              
              <article className="card">
                <FaAward className='Icon'/>
                <h5>Experience</h5>
                <small>1+ Years </small>
              </article>

              <article className="card">
                <FiUsers className='Icon'/>
                <h5>Client</h5>
                <small>1+ client </small>
              </article>

              <article className="card">
                <VscFolderLibrary className='Icon'/>
                <h5>Projects</h5>
                <small>6+ completed </small>
              </article>
            </div>
            <p>Hello My name is Harsh Prajapti. I'm a Engineering student and Fullstack Developer.</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>

      </div>
    </section>
  )
}

export default About