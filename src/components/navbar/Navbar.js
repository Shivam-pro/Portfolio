import { useState } from 'react'
import './navbar.css'
const Navbar = ({ mode, setMode }) => {
  const [display, setDisplay] = useState("");
  const [flex, setFlex] = useState("")
  function togglemode() {
    if (mode == "moon") {
      setMode("sun");
    }
    else {
      setMode("moon");
    }
    document.body.classList.toggle("dark-theme");
  }
  function handleClick() {
    if (display == "" && flex == "") {
      setDisplay("display");
      setFlex("flex");
    }
    else {
      setDisplay("");
      setFlex("");
    }
  }
  return (
    <div className='nav-container'>
      <div className="name">Shivam <span className="lastname">Prakash</span></div>
      <div className="menu">
        <ul className={`menu-items ${flex}`}>
          <li><a href="#about" onClick={handleClick}>About</a></li>
          <li><a href="#skills" onClick={handleClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleClick}>Contact</a></li>
        </ul>
      </div>
          <div className={`close-icon ${flex}`} onClick={handleClick}><i className="fa-solid fa-x"></i></div>
          <div className={`mode ${flex}`} onClick={togglemode}><i className={`fa-solid fa-${mode}`}></i></div>
      <div className={`menu-icon ${display}`} onClick={handleClick}><i className="fa-solid fa-bars"></i></div>
    </div>
  )
}

export default Navbar
