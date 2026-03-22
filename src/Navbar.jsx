import React from 'react'
import { BrowserRouter, Route ,Routes,Link} from 'react-router-dom'
import "./Navbar.css"
import Home from './Routers/Home'
import About from './Routers/About'
import Resume from './Routers/Resume'
import Services from './Routers/Services'
import Contact from './Routers/Contact'
import Profile from './Profile'

export default function Navbar() {
  return (
     <div>
        <div className='NavMain'>
            <BrowserRouter>
       <div className="Navagation">

    <div className='pro'>
    <Profile/>
    </div>
  

  <div className="menu">
    <Link to="/Home">Home</Link>
    <Link to="/About">About</Link>
     <Link to="/Contact">Contact</Link>
    <Link to="/Services">Services</Link>
    <Link to="/Resume">project</Link>
  </div>

</div>
    
        <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Resume' element={<Resume/>}/>
            <Route path='/Services' element={<Services/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
        </div>
        
    
        </div>
  )
}
