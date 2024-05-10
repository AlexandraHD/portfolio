import './App.css'
import { About, Navbar, Footer } from './components'
import { MainHeader } from './components/MainHeader'
import { Contact } from './components/contact'
import { Home } from './components/home/Home'
import { Projects } from './components/projects'

function App() {

  return (
    <>
      <Navbar />
      <MainHeader />
      <div className='home-about-container'>
        <Home />
        <About />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
