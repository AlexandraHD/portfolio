import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Navbar = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const isSmallScreen = useMediaQuery({ maxWidth: 900 });

    const menuRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Si el menú está abierto y el clic se produce fuera del menú
            if (menuOpen && !menuRef.current.contains(event.target)) {
                setMenuOpen(false); // Cierra el menú
            }
        };

        // Agrega el manejador de eventos al documento
        document.addEventListener("mousedown", handleOutsideClick);

        // Remueve el manejador de eventos al desmontar el componente
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [menuOpen]);

    const handleMenuItemClick = () => {
        // Cierra el menú cuando se selecciona una opción del menú
        setMenuOpen(false);
    };

    
  return (
    // Icons
    <div className="nav-container">
        <div className="nav-icons">
            <a href="https://github.com/AlexandraHD" target="_blank">
                <img src="icons/github.svg" alt="" />
            </a>
            <a href="https://www.behance.net/alexahd" target="_blank">
                <img src="icons/behance.svg" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/alexandrahernandez-dev" target="_blank">
                <img src="icons/linkedin.svg" alt="" />
            </a>
        </div>

        {/* Icon Menu */}
        <div className="menu-toggle" onClick={toggleMenu}>
            <img src="icons/icon-menuH.svg" alt="Menu Icon" />
        </div>

        {/* Menu */}
        <div>
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`} ref={menuRef}>
                <a href="#about" className="nav-link" onClick={handleMenuItemClick}>
                    <li>About me</li>
                </a>
                <a href="#projects" className="nav-link" onClick={handleMenuItemClick}>
                    <li>Projects</li>
                </a>
                <a href="#contact" className="nav-link" onClick={handleMenuItemClick}>
                    <li>Contact me</li>
                </a>
            </ul>
        </div>
        {
            isSmallScreen
            ?
            null
            :
            <div id="btn-pdf">
                <a href="documents/CV-AlexandraH-UXUIDev.pdf" download target="_blank">
                    <button className="btn-cv">Download CV</button>
                </a>
            </div>
        }
        
    </div>
  )
}
