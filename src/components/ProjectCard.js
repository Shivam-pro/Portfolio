
const ProjectCard = ({items}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={items.pimage} alt="" />
      </div>
      <h2>{items.pname}</h2>
      <div className="card-btn">
        <div className="button"><a href={items.githublink}>GitHub</a></div>
        <div className="button"><a href={items.demolink}>Live Demo</a></div>
      </div>
    </div>
  )
}

export default ProjectCard
