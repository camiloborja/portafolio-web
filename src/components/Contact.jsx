import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>

      <h1 className='contact__presentation' >
        <span className='tittle blue__tittle'>C</span>
        <span className='tittle blue__tittle'>o</span>
        <span className='tittle blue__tittle'>n </span>
        <span className='tittle blue__tittle'>t</span>
        <span className='tittle blue__tittle'>a</span>
        <span className='tittle blue__tittle'>c</span>
        <span className='tittle blue__tittle'>t </span>
        <span className='tittle blue__tittle'> m</span>
        <span className='tittle blue__tittle'>e</span>
      </h1>
      <div className='form'>
        <form className='contact__form'>
          <label htmlFor=""></label>
          <input type="text" placeholder='Name' className='contact__input' />
          <label htmlFor=""></label>
          <input type="email" placeholder='Email' className='contact__input' />
          <label htmlFor=""></label>
          <input type="text" placeholder='Subjet' className='contact__input' />
          <label htmlFor=""></label>
          <input type="text" placeholder='Message' className='contact__input message' />
          <button className='btn'>Send message!</button>
        </form>
      </div>
    </div>
  )
}

export default Contact