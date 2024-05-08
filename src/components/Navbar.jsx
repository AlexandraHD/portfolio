
export const Navbar = () => {
    
  return (
    <div className="nav-container">
        <div className="nav-icons">
            <img src="../public/icons/github.svg" alt="" />
            <img src="../public/icons/behance.svg" alt="" />
            <img src="../public/icons/linkedin.svg" alt="" />
        </div>
        <div>
            <ul>
                <li>About me</li>
                <li>Projects</li>
                <li>Contact me</li>
            </ul>
        </div>
        <div>
            <button className="btn-cv">Download CV</button>
        </div>
    </div>
  )
}
