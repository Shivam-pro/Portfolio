import './about.css'
import image from '../../Image/aboutme.png'
const About = () => {
    return (
        <div id='about' className='about-container section'>
            <div className="about-head">
                <p>Get To Know More</p>
                <h1>About <span className='lastname'>Me</span></h1>
            </div>
            <div className="about-content">
                <div className='about-image'>
                    <img src={image} alt="" />
                </div>
                <div className="about-info">
                    <div className='about-box'>
                        <i className="fa-solid fa-building-columns"></i>
                        <h4>Education</h4>
                        <p>BCA</p>
                        <p>Bachelors in Computer Application</p>
                        <p>Duration(2023-2026)</p>
                    </div>
                    <p className='center'>I’m a full-stack developer with a passion for building dynamic, user-friendly applications. Skilled in React, Node.js, and cloud-based solutions, I enjoy turning complex problems into elegant digital experiences. Over the past few years, I’ve worked on projects ranging from e-commerce platforms to data-driven dashboards.</p>
                    <p className='center'> Beyond coding, I love exploring emerging technologies and sharing knowledge with the developer community. Let’s connect and create something impactful together.</p>
                </div>
            </div>
        </div>
    )
}

export default About
