
import React from 'react'
import "./Home.css"
import SocialIcons from './SocialIcons'

export default function Home() {
  return (
    <div className='home'>
      
      <div className='text'>
        <h2>Hi,I'm Nirmal Kumar</h2>
        <h2 className='tit'>Frontend  <span className='spm'>Developer</span></h2>
      {/* <h1>Frontend <span className="spm">DEVELOPER</span></h1> */}
      <p>"I’m a creative Frontend Developer who builds responsive, 
        user-friendly websites using modern technologies.
         I transform ideas into interactive and visually appealing web experiences."</p>
        <h3>Hire Me</h3>

        <div>
          <SocialIcons/>
        </div>


        <div>
          
        </div>
      </div>

      <div className='picture'>
                <img  src="src\assets\sample2.png" alt="" />
      </div>

    </div>
  )
}
