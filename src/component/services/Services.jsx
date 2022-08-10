import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='service'>
      <h5>What I Offer </h5>
      <h2>Services</h2>

      <div className="containor serv_cont">
        <article className="service">
          <div className="serv_head">
            <h3>UI/UX Design</h3>

          </div>
          <div className="serv_list">
            <li><BiCheck className="serv-icon"/>
            <p> Login template</p></li> 
            <li><BiCheck className="serv-icon"/>
            <p> Anime template</p></li> 
          </div>
        </article>

        <article className="service">
          <div className="serv_head">
            <h3>WEB Development</h3>

          </div>
          <div className="serv_list">
            <li><BiCheck className="serv-icon"/>
            <p> Movie website</p></li> 
            <li><BiCheck className="serv-icon"/>
            <p> Insta clone</p></li> 
            <li><BiCheck className="serv-icon"/>
            <p> Disney clone</p></li> 
            <li><BiCheck className="serv-icon"/>
            <p> Spotify clone</p></li> 
            <li><BiCheck className="serv-icon"/>
            <p> Portfolio website</p></li> 
          </div>
        </article>
        
        <article className="service">
          <div className="serv_head">
            <h3>College Projects</h3>
          </div>
          <div className="serv_list">
            <li><BiCheck className="serv-icon"/>
            <p> Disney Clone</p></li> 
            <li><BiCheck className="serv-icon"/>
            <p> Movie website </p></li> 
            <li><BiCheck className="serv-icon"/>
            <p> Personal Portfolio</p></li>  
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services