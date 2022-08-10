import React from 'react'
import './portfolio.css'

function Portfolio(props) {
 
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="containor port_cont"> 
       {props.loader === false && (props.data.map((dev) => (
          <article className="port_item"key={dev.id}>
            <>
              <div className="port_item_img" >
               <img src={dev.image} alt={dev.text}/>
              </div>
              <h3>{dev.text}</h3>
              <div className="port_item_cta">
                <a href={dev.link1} className='btn'>Github</a>
                 <a href={dev.link2} className="btn btn-primary">Project Code</a>
              </div>
            </>
          </article>
       )))}
      </div>
      </section>
  )
}

export default Portfolio