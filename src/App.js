import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import Timeline from './components/Experience'
import './App.scss'

function App() {

  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="About" element={<About />}/>
          <Route path="experience" element={<Timeline />}/>
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />}/>
        </Route>    
      </Routes>

 
  )
}
export default App;
