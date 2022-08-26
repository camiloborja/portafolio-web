import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Principal from './components/Principal'
import Skills from './components/Skills'
import { Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


function App() {
  const [menu, setMenu] = useState('navbar__box')
  const deplyMenu = () => {
    if (menu === 'navbar__box') {
      setMenu('navbar__box_active')
    } else (
      setMenu('navbar__box')
    )
  }
  const exitMenu = () => {
    if (menu === 'navbar__box_active') {
      setMenu('navbar__box')
    }
  }
  return (
    <div className="App">
      <button onClick={deplyMenu} className='btn__menu'><i class='bx bx-menu'></i></button>
      <div className={menu}>
        <nav className='navbar'>
          <div className='navbar__name'>
            <span>Camilo</span>
            <span>Borja</span>
            <div class="contact__container">
              <a href="tel:+573108355390" target='_blank'><i className='bx bx-mobile-alt'></i></a>
              <a href="https://wa.me/573108355390/?text=Hola! he visto tu portafolio y me interesa ponerme en contacto contigo" target="_blank"><i className='bx bxl-whatsapp'></i></a>
              <a href="https://www.linkedin.com/in/camilo-borja-arroyave-992919229/" target='_blank'><i className='bx bxl-linkedin'></i></a>
            </div>
          </div>
          <div className='nav'>
            <Link to='/' className='navbar__items' onClick={exitMenu}>Home</Link>
            <Link to='/about' className='navbar__items' onClick={exitMenu}>About me</Link>
            <Link to='/skills' className='navbar__items' onClick={exitMenu}>Skills</Link>
            <Link to='/work' className='navbar__items' onClick={exitMenu}>Work</Link>
            <Link to='/contact' className='navbar__items' onClick={exitMenu}>Contact</Link>
          </div>

        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={'sera work'} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
