
export const ProjectCard = ({...project}) => {
  const imageUrl = `/thumbnails/${project.image}.png`
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={imageUrl} alt={project.name} />
          </div>
          <div className="flip-card-back">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="flip-card-buttons">
              <a href={project.url}>{project.goto}</a>
              <a href={project.url2}>{project.goto2}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
