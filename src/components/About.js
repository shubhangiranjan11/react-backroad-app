import React from 'react'
import aboutImg from '../images/beach.jpg'
import Title from './Title';

const About = () => {
  return (
  <section className="section" id="about">
   <Title title='about' subTitle='us'/>
  
   <div className="section-center about-center">
     <div className="about-img">
       <img
         src={aboutImg}
         className="about-photo"
         alt="awesome beach"
       />
     </div>
     <article className="about-info">
       <h3>explore the difference</h3>
       <p>
       Tourism is the activity of traveling to a place for pleasure.
       Tourism mainly refers to the activity of traveling for pleasure.
       </p>
       <p>
       Travel means to go on a journey, especially a long one.
       Travel is a generic term that is commonly used in day to day life.
       Travel changes you. As you move through this life and this world, you change things slightly, 
       you leave marks behind, however small. And in return, life — and travel — leaves marks on you.
       </p>
       <a href="#about" className="btn">read more</a>
     </article>
   </div>
 </section>

  )
}

export default About;



