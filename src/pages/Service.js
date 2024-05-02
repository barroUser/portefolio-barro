import React from 'react'
import { FaEye } from 'react-icons/fa6'

const Service = () => {
  return (
    <div className='container-fluid' id='service-container'>
      <div className='container mb-5'>
        <div className='text-center fs-1 fw-semibold py-4 mb-2'>Mes projets réalisés</div>
        <p className='info'>* Découvrez quelques-uns de mes projets les plus récents et les plus remarquables.</p>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Vil-cotière</h5>
                <p class="card-text">Il s'agit d'un site qui met en valeur les villes côtières ivoiriennes.</p>
              </div>
              <div class="card-footer text-center">
                <a href='#' class="text-muted btn btn-warning"><FaEye/> voir</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Djassaly</h5>
                <p class="card-text">Il s'agit d'un site de type E-commerce qui ressemble plusieurs vendeurs et clients.</p>
              </div>
              <div class="card-footer text-center">
                <a href='#' class="text-muted btn btn-warning"><FaEye/> voir</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Monde du dev</h5>
                <p class="card-text">Le Monde du dev est un site de type blog qui parle des informations sur...</p>
              </div>
              <div class="card-footer text-center">
              <a href='#' class="text-muted btn btn-warning"><FaEye/> voir</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service