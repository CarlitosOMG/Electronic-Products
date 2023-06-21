import React, { useState, useEffect } from 'react'
import WelcomeMessage from '../components/welcomeMessage'
import Navbar from '../components/navbar'
import SectionCardProducts from '../components/productsAccessUser/sectionCardProductsUser'
import SectionCardProductsAdmin from '../components/productsAccessAdmin/sectionCardProductsAdmin'
import { useNavigate } from 'react-router'

const Home = () => {
 const navigate = useNavigate()
 const handleSummit = () => {
  navigate('/newProduct')
 }
 function copiarTexto() {
  var texto = document.getElementById('texto').innerText.trim()
  navigator.clipboard.writeText(texto)
  alert('Correo electrónico copiado al portapapeles')
 }
 const [userRole, setUserRole] = useState('')

 useEffect(() => {
  // Obtener el rol del usuario almacenado en el localStorage
  const role = localStorage.getItem('role')
  setUserRole(role)
 }, [])

 return (
  <div>
   <Navbar />
   <div className="container-xxl mt-4">
    <div className="row">
     <section className="col-12 bg-primary mt-5" id="seccion1">
      <WelcomeMessage />
     </section>
     {userRole === 'admin' ? (
      <section className="col-12 mt-4" id="seccion2">
       <button
        type="button"
        className="btn btn-warning mb-4"
        onClick={handleSummit}
       >
        Agregar nuevo producto
       </button>
       <SectionCardProductsAdmin />
      </section>
     ) : (
      <section className="col-12 mt-4" id="seccion2">
       <SectionCardProducts />
      </section>
     )}
     {userRole === 'admin' ? (
      <section className="col-12 mt-4" id="seccion3">
       <a className="text-success nav-link fs-2 text-center mt-4" href="#">
        It's Over :(
       </a>
      </section>
     ) : (
      <section className="col-12 mt-4" id="seccion3">
       <a className="text-success nav-link fs-2 text-center" href="#">
        It's Over :(
       </a>
      </section>
     )}
     <section
      className="col-12 bg-primary mt-5 text-success nav-link fs-3 text-center"
      id="seccion4"
     >
      <a href="http://www.linkedin.com/in/carlos-isaac-s%C3%A1nchez-calva">
       LinkedIn
       <i className="bx bxl-linkedin-square me-4"></i>
      </a>
      <a href="https://github.com/CarlitosOMG">
       GitHub
       <i className="bx bxl-github"></i>
      </a>
      <br />
      <p id="texto" style={{ fontWeight: 'bold' }}>
       carlosisaacsanchezcalva@gmail.com
       <i style={{ color: 'red' }} className="bx bxl-gmail"></i>
       <br />
       <button className="btn btn-info" onClick={copiarTexto}>
        <i className="bx bx-copy"></i>
       </button>
      </p>
     </section>
    </div>
   </div>
  </div>
 )
}

export default Home
