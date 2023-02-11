import React from 'react'
import img from "./img/img.jpeg"
import "./Accueil.css"

import { Typewriter } from "react-simple-typewriter"

export const Accueil = () => {
  return (
    <>
    <section className='hero' id='accueil'>
      <div className='container f_flex top'>
        <div className='left top'>
          <h3>Bienvenue,</h3>
          <h1>
          Je suis <span>ALA EDDINE BEN MAAMER</span>
          </h1>
          <h2>
            <span>
              <Typewriter words={[" Développeur Web.", " Développeur Full Stack."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
            </span>
          </h2>
          <p>Passionné par le développement web (JS, React, Node.js, PHP, Symfony, MySQL) mais également du développement mobile (Android studio(JAVA),flutter)...</p>

          <div className='hero_btn d_flex'>
                <div className='col_1'>
                    <div className='button'>
                        <button className='btn_shadow'>
                            <i class='fab fa-github'></i>
                        </button>
                        <button className='btn_shadow'>
                            <i class='fab fa-linkedin-in'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='right'>
            <div className='right_img'>
              <img src={img} alt='' />
            </div>
        </div>
    </div>

      </section>
    </>
  )
}
export default Accueil

