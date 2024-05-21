import React from 'react'
import barro from './../assets/barro.JPG';
import BarroImg from './../assets/barro2.JPG';
import { Link } from 'react-scroll';


const Accueil = () => {
    return (
        <div className='container-fluid d-flex mt-3 mb-5' id='accueil-section'>
            <div className='d-flex'>
                <div className='row'>
                <div className='col-lg-6'>
                    <div className='mt-5'>
                        <div className='fw-semibold'>
                            Bonjour, je suis
                        </div>
                        <h1 className='fw-bold text-warning'>Aboubakar Barro</h1>
                    </div>
                    <h4>
                        Développeur fullstack web
                    </h4>
                    <div className='text-center mt-5 mb-3'><Link to='contact' className="btn btn-warning">Contactez-moi</Link></div>
                </div>
                <div className='col-lg-6'>
                    <div className='card-img rounded-5'>
                        <img src={BarroImg} className="img-fluid rounded-5" style={{ width: 650, height: 365}} alt="ceci est ma photo..."/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Accueil