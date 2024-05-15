import { useState } from "react"
import { ProjectsFlex } from "./ProjectsFlex";
import { useMediaQuery } from 'react-responsive';
import { ProjectsCarousel } from "./ProjectsCarousel";

export const Projects = () => {

  const [selectedSkill, setSelectedSkill] = useState('design');
  

  const handleFilterBySkill = (skill) => {
    setSelectedSkill(skill);
  };

  const isSmallScreen = useMediaQuery({ maxWidth: 900 });

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

      {/* Project cards */}
      {
        isSmallScreen 
        ?
        <>
          <ProjectsCarousel selectedSkill={selectedSkill} />
          <p>Clic on the card to see the description.</p>
        </>
        : 
        <ProjectsFlex selectedSkill={selectedSkill} />
      }

    </>
  )
}

