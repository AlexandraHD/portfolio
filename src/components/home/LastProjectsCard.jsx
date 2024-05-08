
export const LastProjectsCard = ({...project}) => {

  const imgUrl = `thumbnails/${project.image}.png`

  return (
    <div className="last-container">
      <img src={imgUrl} alt={project.name} />
    </div>
  )
}
