import { useMediaQuery } from "react-responsive";

export const About = () => {

  const isSmallScreen = useMediaQuery({ maxWidth: 900 });

  return (
    <>
        <section id="about" className="section-header">
            <div className="line-left" />
            <div className="header-title">About</div>
            <div className="line-right" />
        </section>
        <div className="header-text">
            <p>Passionate about both programming and user experience, I bring a solid foundation in JavaScript, HTML, CSS, Bootstrap, ReactJS, and Figma, along with expertise in UI design, user experience, and usability testing. I also have experience in Python, Java, and SQL databases.  Enriching my skill set through formal education, diverse courses, and hands-on projects, I have gained proficiency in agile methodologies like SCRUM. Successfully delivering minimum viable web products integrated with databases underscores my capability to drive projects from conception to realization.</p>

            {
              isSmallScreen && (
                <div id="btn-pdf">
                  <a href="/documents/prueba.pdf" download target="_blank">
                      <button className="btn-cv">Download CV</button>
                  </a>
                </div>
              )
            }
        </div>
        
    </>
  )
}
