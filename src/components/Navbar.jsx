import { useState } from "react"

export const Navbar = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    
  return (
    // Icons
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

        {/* Icon Menu */}
        <div className="menu-toggle" onClick={toggleMenu}>
            <img src="../public/icons/icon-menuH.svg" alt="Menu Icon" />
        </div>

        {/* Menu */}
        <div>
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <a href="#about" className="nav-link">
                    <li>About me</li>
                </a>
                <a href="#projects" className="nav-link">
                    <li>Projects</li>
                </a>
                <a href="#contact" className="nav-link">
                    <li>Contact me</li>
                </a>
            </ul>
        </div>
        <div id="btn-pdf">
            <a href="../../public/documents/prueba.pdf" download target="_blank">
                <button className="btn-cv">Download CV</button>
            </a>
        </div>
    </div>
  )
}
