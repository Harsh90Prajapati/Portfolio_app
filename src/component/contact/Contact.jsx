import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

 
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o6bnn7m', 'template_g8mlw7k', form.current, 'YvtX4oSKJvaj0YToj')
    
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="containor contact_cont">
       <div className="contact_options">
        <article className='contact_option'>
          <MdOutlineEmail className='icon'/>
          <h4>Email</h4>
          <h5>harshprajapti904433@gmail.com</h5>
          <a href="mailto:harshprajapti904433@gmail.com" target="_blank">Send a Message</a>
        </article>
        <article className='contact_option'>
          <RiMessengerLine className='icon'/>
          <h4>Messenger</h4>
          <h5>Harsh Prajapati</h5>
          <a href="http://m.me/_harshprajapati_/" target="_blank">Send a Message</a>
        </article>
        <article className='contact_option'>
          <BsWhatsapp className='icon'/>
          <h4>WhatsApp</h4>
          <h5>+91 8840497081</h5>
          <a href="https://api.whatsapp.com/send?phone=+918840497081" target="_blank">Send a Message</a>
        </article>
       </div>

       <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder=' Your Message' required></textarea>
        <button type='submit'className='btn btn-primary'>Send Message</button>
       </form>
      </div>
    </section>
  )
}

export default Contact
