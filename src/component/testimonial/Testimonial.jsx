import React from 'react'
import './testimonial.css'
import  AT1 from '../../assets/avatar1.jpg'
import  AT2 from '../../assets/avatar2.jpg'
import  AT3 from '../../assets/avatar3.jpg'
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
  {
    avatar: AT1,
    name : 'Aditya',
    review: 'He is great . he made very good websites'
  },
  {
    avatar: AT1,
    name : 'Aditya',
    review: 'He is great . he made very good websites'
  },
  {
    avatar: AT1,
    name : 'Aditya',
    review: 'He is great . he made very good websites'
  }
]

function Testimonial() {
  return (
    <section id="testimonial">
      <h5>Review from Client</h5> 
      <h2>Testimonials</h2>    
      <Swiper className="containor test_cont"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
       >
       {data.map(({avatar, name , review}, index)=>{
        return(
          <SwiperSlide className='Test' key={index}>
          <div className="client_avatar">
           <img src={avatar} alt="Avatar-1" />
          </div>
          <h5>{name}</h5>
          <small className='client_review'>
          {review}
          </small>
        </SwiperSlide>
        )
       })}
      </Swiper>    
    </section>
  )
}

export default Testimonial