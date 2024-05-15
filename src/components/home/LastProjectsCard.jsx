
export const LastProjectsCard = ({...project}) => {

  const imgUrl = `thumbnails/${project.image}.png`

  return (
    <div className="last-container">
      <a href={project.url} target="_blank">
        <img src={imgUrl} alt={project.name} />
      </a>
    </div>
  )
}
