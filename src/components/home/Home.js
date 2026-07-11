import './home.css'
import image from '../../Image/Profile.png'
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const Home = () => {
  const roleArr = ["Frontend", "Backend", "Fullstack"];
  const element = useRef(null);
  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ["Frontend", "Backend", "Fullstack"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });
    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <div className='home-container section'>
      <div className='my-image'>
        <img src={image} alt="" />
      </div>
      <div className='information'>
        <h4>Hello, I'm</h4>
        <h1 className='fullname'>Shivam Prakash</h1>
        <h2 className='role'><span className='role-type' ref={element} /> Developer</h2>
        <div className="buttons">
          <div className='btn'><a className='black' href="/Shivam Prakash Resume.pdf" download="Shivam Prakash Resume">Download CV</a></div>
          <div className='btn bg-black'><a href="#contact">Contact Info</a></div>
        </div>
        <div className="social-media-platforms">
          <a href="https://www.linkedin.com/in/shivam-prakash-a7603834a/"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/Shivam-pro"><i className="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Home
