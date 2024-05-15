/* eslint-disable react/prop-types */
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projectsList"

export const ProjectsFlex = ({selectedSkill}) => {

    const filteredProjects = selectedSkill
    ? projects.filter((project) => project.skill === selectedSkill)
    : projects;

  return (
    <div className="flip-card-container">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
    </div>
  )
}
