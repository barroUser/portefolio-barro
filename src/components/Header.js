import React from "react";
// import { NavLink } from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";
import CV from '../assets/barro_cv.pdf';

export const Header = () => {
  const scrollToTop = () => {
    scroll.getAnimationType();
  };

  return (
    <div>
      <nav className="navbar bg-light">
      <div className="container-fluid">
        <Link href="#" className="navbar-brand fw-semibold">
          Brico-Codeur
        </Link>
        <nav class="navbar navbar-expand-lg">
          <button class="navbar-toggler mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <div class="navbar-toggler-icon"></div>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
          <div className="d-flex" role="search">
            
            <Link
              activeClass="active"
              to="accueil"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={scrollToTop}
              isDynamic={true}
              className="nav-link text-black align-items-center me-4"
              id="navlien"
            >
              Accueil
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
              A propos
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
              Projets
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
              Compétences
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
              Contact
            </Link>
            <a
              className="btn btn-outline-warning me-3"
              href={CV}
              download="Barro_CV"
              // onClick=
              type="submit"
            >
              Télécharger mon CV
            </a>
          </div>
          </div>
        </nav>
      </div>
      </nav>
    </div>
  );
};
