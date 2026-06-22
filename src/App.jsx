import './App.css'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Education from './Component/Education/Education'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import Projects from './Component/Projects/Projects'
import Technology from './Component/Technology/Technology'

function App() {
  return (
    <>
     <Navbar/>
     <Header/>
     <Technology/>
     <Projects/>
     <About/>
     <Education/>
     <Contact/>
<Footer/>
    </>
  )
}

export default App
