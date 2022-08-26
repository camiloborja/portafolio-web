import React from 'react'

const Skills = () => {
  return (
    <div className='skills'>
      <h1 className='presentation__h1'>
        <div>
          <span className='tittle blue__tittle'>S</span>
          <span className='tittle blue__tittle'>k</span>
          <span className='tittle blue__tittle'>i</span>
          <span className='tittle blue__tittle'>l</span>
          <span className='tittle blue__tittle'>l</span>
          <span className='tittle blue__tittle'>s </span>
          <span className='tittle blue__tittle'>{'&'}</span>
        </div>
        <br />
        <div>
          <span className='tittle blue__tittle'>E</span>
          <span className='tittle blue__tittle'>x</span>
          <span className='tittle blue__tittle'>p</span>
          <span className='tittle blue__tittle'>e</span>
          <span className='tittle blue__tittle'>r</span>
          <span className='tittle blue__tittle'>i</span>
          <span className='tittle blue__tittle'>e</span>
          <span className='tittle blue__tittle'>n</span>
          <span className='tittle blue__tittle'>c</span>
          <span className='tittle blue__tittle'>e</span>
        </div>
        <br />
      </h1>
      <div className='skills__box'>
        <div className='skills__box__text'>
          <p className='about__me__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur ut non cupiditate adipisci, sed eum. Officia natus reprehenderit sint, voluptate, placeat itaque illum commodi cum doloremque ullam fuga repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias architecto facere perspiciatis distinctio beatae odit, facilis dignissimos placeat nemo nostrum accusantium eos est animi inventore nulla doloremque tenetur quibusdam fugiat!
          </p>
          <p className='about__me__p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis placeat repellendus facere expedita dignissimos beatae velit est dolor? Praesentium ullam iste pariatur labore nihil asperiores architecto impedit perspiciatis dolor eveniet.
          </p>
          <p className='about__me__p'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nisi nemo voluptatibus inventore eos assumenda libero cum autem vitae, nam itaque voluptas! Dolor veniam illo, beatae laborum rem sit velit!
          </p>
          <p className='about__me__p'>Visit mi  <a href="https://www.linkedin.com/in/camilo-borja-arroyave-992919229/" target='_blank'>Linkedin</a> profile for more details</p>
        </div>

        <div className='skills_container'>
          <div className="skills__items">
            <i className='bx bxl-javascript' ></i>
            <span> JavaScript</span>
          </div>
          <div className="skills__items">
            <i className='bx bxl-html5' ></i>
            <span> HTML5</span>
          </div>
          <div className="skills__items">
            <i className='bx bxl-css3'></i>
            <span>CSS3</span>
          </div>
          <div className="skills__items">
            <i className='bx bxl-react'></i>
            <span> React.js</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills