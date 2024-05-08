import { projects } from "../data/projectsList"
import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
  return (
    <>
        <div className="section-header">
            <div className="line-left" />
            <div className="header-title">Projects</div>
            <div className="line-right" />
        </div>
        <div className="projects-btns">
            <a href="">Design</a>
            <a href="">Programming</a>
        </div>

        {/* Projects cards */}
        <div className="flip-card-container">
          {
            projects.map(project => (
              <ProjectCard
                key={project.image}
                {...project}
              />
            ))
          }
        </div>
    </>
  )
}

