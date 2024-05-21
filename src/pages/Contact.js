import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";


const Contact = () => {
  return (
    <div className='container'>
      <div className='text-center fs-1 fw-semibold mt-2 mb-4'>Contactez-moi</div>
      <div className='d-flex'>
        <div className='col-sm-10 lg-2'>
          <div className='text-start'>
            <h3>Barro Aboubakar</h3>
            <h6>Développeur fullstack web</h6>
            <h6>aboubakarbarro23@gmail.com</h6>
            <div className='br'></div>
            <h6>Tel: +225 0768328264</h6>
            <h6>Tel: +225 0506790055</h6>
            <div className='br'></div>
            <h6>Abidjan, Adjamé</h6>
            <div className='br'></div>
            <small className='info'>*N'hésitez pas à me contacter pour discuter de vos besoins en matière de développement web.</small>
          </div>
        </div>

        <div className='col-sm-6'>
          <h4 className=''>Réseaux sociaux</h4>
          <div className='d-flex'>
            <div className='column'>
            <div className='col'>
              <Link to="https://aboubakarbarro23@gmail.com">
                <IoIosMail />
              </Link>
              <span>Email</span>
            </div>
            <div className='col'>
              <Link to="https://www.linkedin.com/in/aboubakar-barro-91b8ab202">
                <FaLinkedin />
              </Link>
              <span>Linkedin</span>
            </div>
            <div className='col'>
              <Link to="https://github.com/Aboubakabarro09">
                <FaGithub />
              </Link>
              <span>Github</span>
            </div>
            <div className='col'>
              <Link to="https://wa.me/qr/2T7R4CEYXBEOH1">
                <FaWhatsapp />
              </Link>
              <span>Whatsapp</span>
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact