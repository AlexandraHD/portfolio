import { lastProjects } from "../data/projectsList";
import { designSkills, programmingSkills } from "../data/skillsList";
import { LastProjectsCard } from "./LastProjectsCard";
import { SkillsCard } from "./SkillsCard";

export const Home = () => {
  return (
    <>
        <div className="skills-group-container">
            <div className="skills-group" >
                <h3>Programming skills</h3>
                <div className="skills-container">
                    {
                        programmingSkills.map(skill => (
                            <SkillsCard
                                key={skill.image}
                                {...skill}
                            />
                        ))
                    }
                </div>
            </div>

            <div className="skills-group">
                <h3>UX/UI skills</h3>
                <div className="skills-container">
                    {
                        designSkills.map(skill => (
                            <SkillsCard
                                key={skill.image}
                                {...skill}
                            />
                        ))
                    }
                </div>
            </div>

            <div className="skills-group" id="last-projects">
                <h3>Last Projects</h3>
                <div className="skills-container">
                    {
                        lastProjects.map(project => (
                            <LastProjectsCard
                                key={project.id}
                                {...project}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
        
    </>
  )
}
