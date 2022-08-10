import React from 'react'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Services from './component/services/Services'
import Portfolio from './component/portfolio/Portfolio'
import Testimonial from './component/testimonial/Testimonial'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import { useState, useEffect } from "react";
import db from './Firebase'


function App() {
   
  const ref = db.collection("developer")
  const [data , setData] = useState([])
  const [loader, setLoader] = useState([true])

  function getData(){
    ref.onSnapshot((querySnapshot) =>{
      const items =[]
      querySnapshot.forEach((doc) =>{
        items.push(doc.data())
      })
       setData(items)
       setLoader(false)
    })
  }
  useEffect(() =>{
    getData()
 },[])
  return (
   <>
      <Header />
      <Nav />
      <About data={data} loader={loader} />
      <Experience />
      <Services data={data} loader={loader}/>
      <Portfolio data={data} loader={loader} />
      <Testimonial />
      <Contact />
      <Footer />
   </>
  )
}

export default App