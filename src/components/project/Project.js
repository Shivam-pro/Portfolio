import ProjectCard from '../ProjectCard'
import './project.css'
import { projects } from '../../Image/assets'
const Project = () => {
  return (
    <div id='projects' className='project-container section'>
      <div className="project-head">
        <p>Browse My Recent</p>
        <h1>Projects</h1>
      </div>
      <div className="projects">
        {projects.map((items, index)=>{
          return(
            <ProjectCard key={index} items={items}/>
          )
        })}
      </div>
    </div>
  )
}

export default Project
