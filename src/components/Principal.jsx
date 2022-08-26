import React, { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Typed from 'typed.js'

const Principal = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        'Web developer',
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };
    Typed.current = new Typed(el.current, options);

    return () => {
      Typed.current.destroy();
    }
  }, [])

  return (
    <div className='presentation'>
      <div>
        <h1 className='presentation__h1'>
          <div>
            <span className='tittle'>H</span>
            <span className='tittle'>i</span>
            <span className='tittle'>,</span>
          </div>
          <br />
          <div>
            <span className='tittle'>I</span>
            <span className='tittle'>'</span>
            <span className='tittle'>m </span>
            <span className='tittle blue__tittle'>C</span>
            <span className='tittle blue__tittle'>a</span>
            <span className='tittle blue__tittle'>m</span>
            <span className='tittle blue__tittle'>i</span>
            <span className='tittle blue__tittle'>l</span>
            <span className='tittle blue__tittle'>o</span>
          </div>
          <br />
          <div>
            <div className="type-wrap tittle_efect">
              <span style={{ whiteSpace: 'pre' }} ref={el} />
            </div>
          </div>
        </h1>
        <br />
        <p className='presentation__p'>Front End Developer</p>
        <Link to='/contact'><button className='btn'>Contact me</button></Link>
      </div>
      <div className='img__profile'>
        <img src="/profile.png" alt="img no disponible" />
      </div>
    </div>
  )
}

export default Principal