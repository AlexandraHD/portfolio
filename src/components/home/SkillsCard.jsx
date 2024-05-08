
export const SkillsCard = ({...skill}) => {

  const skillUrl = `/skills/${skill.image}.svg`

  return (
    <>
        <div className="skillCard">
          <img src={skillUrl} alt={skill.image}  className="skill-image"/>
          <p className="skill-name">{skill.name}</p>
        </div>
    </>
  )
}
