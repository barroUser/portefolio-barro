import React from 'react'
import Css from '../assets/css.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import php from '../assets/php_PNG26.png'
import Mysql from '../assets/mysql.png'
import react from '../assets/react.png'
import Quarkus from '../assets/quarkus-icon.png'
import Wordpress from '../assets/wordpress.png'

const Competence = () => {
  return (
    <div className='competence-section'>
        <div className='container'>
            <div className='text-center fs-2 fw-semibold'>Mes Compétences</div>
            <div className='info mb-2'>* Il s'agit des langages que j'ai déjà utilisés pour des projets antérieurs</div>
            <div className='row g-3 text-center'>
            <div class="col">
                <img src={Css} width={200} alt="logo css..."/>
                <p className='mt-2'>CSS</p>
            </div>
            <div class="col">
                <img src={html} width={200} alt="logo css..."/>
                <p className='mt-2'>HTML</p>
            </div>
            <div class="col">
                 <img src={javascript} width={180} alt="logo css..."/>
                 <p className='mt-4'>JavaScript</p>
            </div>
            <div class="col">
                <img src={react} width={200} alt="logo css..."/>
                <p className='mt-2'>React JS</p>
            </div>
            <div class="col">
                 <img src={php} width={350} alt="logo css..."/>
                 <p className='mt-4'>PHP</p>
            </div>
            <div class="col">
                <img src={Quarkus} width={180} alt="logo css..."/>
                <p className='mt-4'>QUARKUS/JAVA</p>
            </div>
            <div class="col">
                <img src={Mysql} width={195} alt="logo css..."/>
                <p className=''>MySQL</p>
            </div>
            <div class="col">
                <img src={Wordpress} width={190} alt="Wordpress css..."/>
                <p className='mt-2'>MySQL</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Competence