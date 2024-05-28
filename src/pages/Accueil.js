import React from 'react'
import BarroPhoto from './../assets/barro2.JPG';
import { Link } from 'react-scroll';


const Accueil = () => {
    return (
        <div className='container-fluid d-flex mt-5 mb-4' id='accueil-section'>
            <div className='row g-2'>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <div className='mt-5'>
                        <div className='fw-semibold'>
                            Bonjour, je suis
                        </div>
                        <h1 className='fw-bold text-warning'>Aboubakar Barro</h1>
                    </div>
                    <h4>
                        Développeur fullstack web
                    </h4>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6 mt-4'>
                    <div className='card-img rounded-5'>
                        <img src={BarroPhoto} className="img-fluid rounded-5" style={{ width: 650, height: 365 }} alt="Ma photo" />
                    </div>
                </div>

                <div className='col-12'>
                    <div className='text-center mt-5 mb-3'><Link to='contact' className="btn btn-warning btn-lg text-light">Contactez-moi</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Accueil