import React from 'react'

const Apropos = () => {
  return (
    <div className='apropos-section'>
      <div className='container'>
        <div className='text-center fs-1 fw-semibold mt-5 py-3'>À propos de moi</div>
        <div className='row'>
          <div className='col'>
            <div className='card'>
              <div className="card-body">
                <div className='' card-text>
                  <p>Titulaire d'une licence en science du langage, j'ai décidé de me consacrer dans le développement web et mobile avec l'école inclusive Simplon. Ce qui m'a permis d'être certifié développeur fullstack web. </p>
                  <p>En tant que jeune passionné, motivé par les nouvelles technologies, je suis toujours à la recherche de nouvelle opportunité pour m'exprimer dans mon domaine de prédilection.</p>
                  <p>Au cours, des mes récentes expériences en entreprise, j'ai acquis des bases solides pour méner à bien des projets. Toutefois, je suis en constante évolution.</p>
                  <p>Je serais très heureux de travailler avec vous sur des nouveaux projets innovants.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 card">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <div class="text-warning fw-bold">DEVELOPPEUR WEB</div>
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    <p class="text-break">En tant que <code>développeur fullstack</code>, je suis capable de:</p>
                    <ul>
                      <li>Maîtriser les langages de programmation côté client et côté serveur pour créer des applications web complètes.</li>
                      <li>Concevoir et mettre en œuvre des bases de données pour stocker et gérer des données efficacement.</li>
                      <li>Déployer et maintenir des applications web sur des serveurs ou sur site</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <div class="text-warning fw-bold">UI/UX DESIGNER
                    </div>
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body"><p>En tant que <code>UI/UX designer</code>, je suis capable de :</p>
                    <ul>
                      <li>Comprendre les besoins des utilisateurs et les traduire en conceptions intuitives et attrayantes;</li>
                      <li>Maîtriser les principes de conception UI et UX pour créer des expériences utilisateur fluides et agréable;</li>
                      <li>Collaborer efficacement avec des équipes pluridisciplinaires pour concrétiser des visions de produits.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className=''>
            <div className='col mb-4'>
              <div className='card'>
                <div className="card-body">
                  <h4 className='card-title text-warning'>
                    UI/UX Design
                  </h4>
                  <div className='card-text'>
                    <p>En tant que UI/UX designer, je suis capable de :</p>
                    <ul>
                      <li>Comprendre les besoins des utilisateurs et les traduire en conceptions intuitives et attrayantes.</li>
                      <li>Maîtriser les principes de conception UI et UX pour créer des expériences utilisateur fluides et agréables</li>
                      <li>Collaborer efficacement avec des équipes pluridisciplinaires pour concrétiser des visions de produits.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card'>
              <div className="card-body">
                <h4 className='card-title text-warning'>
                  DEVELOPPEMENT WEB
                </h4>
                <div className='card-text'>
                  <p>En tant que développeur fullstack, je suis capable de:</p>
                  <ul>
                    <li>Maîtriser les langages de programmation côté client et côté serveur pour créer des applications web complètes.</li>
                    <li>Concevoir et mettre en œuvre des bases de données pour stocker et gérer des données efficacement.</li>
                    <li>Déployer et maintenir des applications web sur des serveurs ou sur site</li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Apropos