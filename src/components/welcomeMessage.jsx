import React from 'react'
import GoToSection from './goToSection'

const WelcomeMessage = () => {
 const goToSection5 = GoToSection

 return (
  <div className="text-center">
   <h2 className="text-success">
    Bienvenido, es un placer tenerte con nosotros.
   </h2>
   <p className="text-light">Aquí puedes encontrar información relevante.</p>
   <button className="btn btn-success" onClick={goToSection5}>
    Conócenos
   </button>
   <p></p>
  </div>
 )
}

export default WelcomeMessage
