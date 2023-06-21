import { useState } from 'react'
import Register from '../components/registerPage'
import Login from '../components/loginPage'

const AuthPage = () => {
 const [isRegister, setIsRegister] = useState(true)

 const toggleForm = () => {
  setIsRegister(!isRegister)
 }

 return (
  <div
   className="container d-flex align-items-center justify-content-center"
   style={{ minHeight: '100vh' }}
  >
   <div className="text-center border rounded p-4 shadow">
    {isRegister ? <Register /> : <Login />}
    <div className="mt-3">
     <button className="btn btn-link" onClick={toggleForm}>
      {isRegister
       ? '¿Ya tienes una cuenta? Inicia sesión'
       : '¿No tienes una cuenta? Regístrate'}
     </button>
    </div>
   </div>
  </div>
 )
}

export default AuthPage
