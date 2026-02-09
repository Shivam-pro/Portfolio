import './skills.css'
import image from '../../Image/skillsimage.webp'
const Skills = () => {
    return (
        <div id='skills' className='skills-container section'>
            <div className='skills-head'>
                <p>Explore My</p>
                <h1>Skills</h1>
            </div>
            <div className="skills-content">
                <div className="skills-info">
                    <div className="all-skills">
                        <div className='skill'>
                            <i className="fa-brands fa-html5"></i>
                            <p>HTML</p>
                        </div>
                        <div className='skill'>
                            <i className="fa-brands fa-css3-alt"></i>
                            <p>CSS</p>
                        </div>
                        <div className='skill'>
                            <i className="fa-brands fa-square-js"></i>
                            <p>Javascript</p>
                        </div>
                        <div className='skill'>
                            <i className="fa-brands fa-react"></i>
                            <p>ReactJs</p>
                        </div>
                        <div className='skill'>
                            <i className="fa-brands fa-bootstrap"></i>
                            <p>Bootstrap</p>
                        </div>
                        <div className='skill'>
                            <i class="fa-brands fa-node-js"></i>
                            <p>NodeJs</p>
                        </div>
                        <div className='skill'>
                            <i className="fa-brands fa-node-js"></i>
                            <p>ExpressJs</p>
                        </div>
                        <div className='skill'>
                            <i className="fa-solid fa-database"></i>
                            <p>MongoDB</p>
                        </div>
                        <div className='skill'>
                            <i className="fa-brands fa-github"></i>
                            <p>Git/Github</p>
                        </div>
                    </div>
                    <div className="skill-description">
                        <h4><span className='bold'>Frontend: </span>HTML5, CSS3, Javascript, React.js, Bootstrap.</h4>
                        <h4><span className='bold'>Backend: </span>NodeJs, ExpressJ.</h4>
                        <h4><span className='bold'>Database: </span>MongoDB, Mysql.</h4>
                        <h4><span className='bold'>Programming Languages: </span>C, C++, Java, Javascript.</h4>
                        <p>I build responsive and user-friendly websites using HTML, CSS, and JavaScript. With React, currently learning backend technologies.</p>
                    </div>
                </div>
                <div className="skills-image">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Skills
