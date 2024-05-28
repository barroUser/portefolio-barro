import React from "react";
// import { NavLink } from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";
import CV from '../assets/barro_cv.pdf';

export const Header = () => {
  // const scrollToTop = () => {
  //   scroll.getAnimationType();
  // };

  return (
    <div>
      <div className="container-fluid" id="header">
        <nav className="navbar navbar-expand-lg">
          <Link href="#" className="navbar-brand fw-semibold">
            Brico-Codeur
          </Link>
          <button className="navbar-toggler mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <div className="navbar-toggler-icon"></div>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <div>
              <ul class="navbar-nav text-center me-auto mb-2 mb-lg-0">
                <Link
                  activeClass="active"
                  to="accueil"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  // onClick={scrollToTop}
                  isDynamic={true}
                  className="nav-link text-black align-items-center me-4"
                  id="navlien"
                >
                  <li class="nav-item">

                    Accueil
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="apropos"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  isDynamic={true}
                  className="nav-link text-black text-truncate align-items-center me-4"
                  id="navlien"
                >
                  <li class="nav-item">

                    A propos
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="competence"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  isDynamic={true}
                  className="nav-link text-black align-items-center me-4"
                  id="navlien"
                >
                  <li class="nav-item">

                    Compétences
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="service"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  isDynamic={true}
                  className="nav-link text-black align-items-center me-4"
                  id="navlien"
                >
                  <li class="nav-item">

                    Projets
                  </li>
                </Link>

                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  isDynamic={true}
                  className="nav-link text-black align-items-center me-5"
                  id="navlien"
                >
                  <li class="nav-item">
                    Contact
                  </li>
                </Link>

                <li class="nav-item">
                  <a
                    className="btn btn-outline-warning me-3"
                    href={CV}
                    download="Barro_CV"
                    // onClick=
                    type="submit"
                  >
                    Télécharger mon CV
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
