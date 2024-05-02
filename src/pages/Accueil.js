import React from 'react'
import barro from './../barro.JPG';
import { Link } from 'react-scroll';


const Accueil = () => {
    return (
        <div className='container-fluid d-flex mt-3 mb-5' id='accueil-section'>
            <div className='col-8 me-3'>
                <div className='mt-5'>
                    <div className='fw-semibold'>
                        Bonjour :), je suis
                    </div>
                    <h1 className='fw-bold text-warning'>Aboubakar Barro</h1>
                </div>
                <h4>
                    Développeur fullstack web
                </h4>
                <div className='text-center mt-5'><Link to='contact' className="btn btn-warning">Contactez-moi</Link></div>
            </div>
            <div className='col-4'>
                <div className='card-img-top rounded-5 me-5'>
                    <img src={barro} className="img-fluid rounded-5" style={{ width: 350, height: 355}} alt="ceci est ma photo..."/>
                </div>
            </div>
        </div>
    )
}

export default Accueil