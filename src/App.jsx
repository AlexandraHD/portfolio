import './App.css'
import { About, Navbar, Footer } from './components'
import { Contact } from './components/contact'
import { Home } from './components/home/Home'
import { Projects } from './components/projects'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
