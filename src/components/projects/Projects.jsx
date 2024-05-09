import { useState } from "react"
import { projects } from "../data/projectsList"
import { ProjectCard } from "./ProjectCard"

export const Projects = () => {

  const [selectedSkill, setSelectedSkill] = useState('design');
  

  const handleFilterBySkill = (skill) => {
    setSelectedSkill(skill);
  };

  const filteredProjects = selectedSkill
    ? projects.filter((project) => project.skill === selectedSkill)
    : projects;

  return (
    <>
        <section id="projects" className="section-header">
            <div className="line-left" />
            <div className="header-title">Projects</div>
            <div className="line-right" />
        </section >
        <div className="projects-btns">
          <button onClick={() => handleFilterBySkill("design")} className={selectedSkill === "design" ? "active" : ""}>Design</button>
          <button onClick={() => handleFilterBySkill("programming")} className={selectedSkill === "programming" ? "active" : ""}>Programming</button>
        </div>

        {/* Projects cards */}
        <div className="flip-card-container">
          {
            filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                {...project}
              />
            ))
          }
        </div>
    </>
  )
}

