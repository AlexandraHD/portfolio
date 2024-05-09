
export const Navbar = () => {
    
  return (
    <div className="nav-container">
        <div className="nav-icons">
            <a href="https://github.com/AlexandraHD" target="_blank">
                <img src="../public/icons/github.svg" alt="" />
            </a>
            <a href="https://www.behance.net/alexahd" target="_blank">
                <img src="../public/icons/behance.svg" alt="" />
            </a>
            <a href="www.linkedin.com/in/alexandrahernandez-dev" target="_blank">
                <img src="../public/icons/linkedin.svg" alt="" />
            </a>
        </div>
        <div>
            <ul>
                <a href="#about">
                    <li>About me</li>
                </a>
                <a href="#projects">
                    <li>Projects</li>
                </a>
                <a href="#contact">
                    <li>Contact me</li>
                </a>
            </ul>
        </div>
        <div>
            <a href="../../public/documents/prueba.pdf" download target="_blank">
                <button className="btn-cv">Download CV</button>
            </a>
        </div>
    </div>
  )
}
