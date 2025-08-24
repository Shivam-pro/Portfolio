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
                    <p className='center'>I’m SHIVAM — a frontend developer who thrives at the intersection of code and design. I specialize in building responsive, accessible, and performant web applications using mordern technologies.</p>
                    <p className='center'>I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.</p>
                </div>
            </div>
        </div>
    )
}

export default About
