import React from 'react'
import { useNavigate } from 'react-router-dom'
import GoToSection from './goToSection'

const Navbar = () => {
 const navigate = useNavigate()
 const goToSection5 = GoToSection
 const handleSummit = () => {
  navigate('/auth')
 }
 return (
  <nav
   className="navbar navbar-expand-lg bg-primary fixed-top"
   data-bs-theme="dark"
  >
   <div className="container-fluid">
    <a className="navbar-brand fs-4" href="#">
     Turing IA
    </a>
    <i className="bx bxs-brain fs-1 text-success"></i>
    <button
     className="navbar-toggler"
     type="button"
     data-bs-toggle="collapse"
     data-bs-target="#navbarColor01"
     aria-controls="navbarColor01"
     aria-expanded="false"
     aria-label="Toggle navigation"
    >
     <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
     <ul className="navbar-nav me-auto">
      <li className="nav-item">
       <a className="nav-link" href="#">
        Home
        <span className="visually-hidden">(current)</span>
       </a>
      </li>

      <li className="nav-item">
       <a className="nav-link" onClick={goToSection5} href="#about">
        About
       </a>
      </li>
     </ul>
     <form className="d-flex">
      <button
       type="button"
       className="btn btn-secondary"
       onClick={handleSummit}
      >
       Cerrar sesión
      </button>
     </form>
    </div>
   </div>
  </nav>
 )
}

export default Navbar
