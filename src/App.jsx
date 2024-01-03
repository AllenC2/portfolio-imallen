import './App.css'
import NavBar from './components/NavBar'
import MobileCardsSlider from './components/MobileCardsSlider'
import { ContactCard } from './components/ContactCard'
import {AccordionJobs} from './components/AccordionJobs'
import cads_img from './assets/imgs/site/cads.png'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import { CVLanding } from './pages/CVLanding'
import { SingleProject } from './pages/SingleProject'
function App() {
  const location = useLocation();
  return (
    <>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<CVLanding></CVLanding>} />
          <Route path='post/:id' element={<SingleProject id=":id"></SingleProject>}/>
        </Routes>

    </>
  )
}

export default App
