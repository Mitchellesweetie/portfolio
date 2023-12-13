import React from 'react'
import logo2 from  './p2.jpg'
import './pages.css'

function About (props) {
  return (
    <main>
      <div className='profile'>
      
      <img src={logo2} alt='logo'className='card' ></img>
      <section className='text'>
      <p>Software Developer</p>
      <p1>My portfolio</p1><br></br>
      <p2>I am a Web Developer base in Mombasa-Kenya</p2>
      </section>
    </div>    
    <div className='about'>
      <h3>SELF SUMMARY</h3>
      <div className='abouttext'>
      <p>
        
<h1>Mitchelle Ngoli Mwachoo</h1>
I am a skilled web developer based in Kenya, specializing in web development, 
web design, and mobile application development.
 I bring a versatile and adaptable approach to my work.
      </p>
      </div>
    </div>
    <div>
    <div className='experience'>
      <h1>EXPERIENCE</h1>
      <p>I am a Fullstack web Developer</p>
      <ul>
      <b><li> FRONT-END DEVELOPER</li></b>
      <p>I comfortably work with Basic Flutter,Reactjs,html and CSS</p>
      <b><li>BACK-END DEVELOPER</li></b>
      <p>I program using Nodejs,Expressjs and MYSQL</p>

      <b>
        <li>Mobile Proramming</li></b>
        <p>Passionate about developing android apps using Java </p>
        <li>
          <b>Database Programming</b><p>MYSQL SERVER,MYSQL</p>
        </li>
      </ul>
      

    </div>
    <div className='education'>
      <h3>EDUCATION</h3>
      <h4>2019-2023</h4>
      <b>Bachelor of Science in Computer Science</b>
      <p>Masinde Muliro University of Science and Technology</p>

    </div>
    </div>
    </main>
    
  )
}

export default About