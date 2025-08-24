import { useState } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Project from './components/project/Project';
import Skills from './components/skills/Skills';

function App() {
  const [mode, setMode] = useState("moon");
  return (
    <div className='portfolio-container'>
      <Navbar mode={mode} setMode={setMode}/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <p className='footer'>Copyright &copy; 2025 Shivam Prakash. All Rights Reserved</p>
    </div>
  );
}

export default App;
