import React from 'react'
import "./About.css"

export default function About() {
  return (
    <div  className='Mainabout'>

        <div className="abtimage">
        <img  src="src\assets\abtimg1.jpeg" alt="" />
      </div>

      <div className='Abttext'>
      <h2>Hello! </h2>
      <h2>I'm Nirmalkumar.</h2>

      <p>I'm a passionate Frontend Developer who loves building clean, responsive, and user-friendly web applications.
         I specialize in creating modern interfaces using HTML, CSS, JavaScript, and React.</p>

      <p>I enjoy turning complex problems into simple, beautiful designs. I focus on performance, accessibility, and 
        creating smooth user experiences across all devices.</p>

      <p>Currently, I am improving my skills by working on real-world projects and learning new technologies.
         I am always excited to explore new trends in web development and continuously grow as a developer.</p>
      </div>

    </div>
  )
}
