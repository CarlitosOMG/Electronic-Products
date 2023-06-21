import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import FormInput from './formInput'
import API from '../api/api'

const LoginPage = () => {
 const navigate = useNavigate() // Hook para la navegación

 const [formData, setFormData] = useState({
  username: '',
  password: ''
 })
 const [errors, setErrors] = useState({})
 const [successMessage, setSuccessMessage] = useState('')
 const [errorMessage, setErrorMessage] = useState('')

 const handleChange = (e) => {
  const { name, value } = e.target
  setFormData((prevData) => ({
   ...prevData,
   [name]: value
  }))
 }

 const handleSubmit = async (e) => {
  e.preventDefault()

  // Validar campos
  const errors = validateFields()
  if (Object.keys(errors).length > 0) {
   setErrors(errors)
   return
  }

  try {
   const response = await axios.post(API + '/users/login', formData)
   const { token, role } = response.data // Obtener el token y el rol del usuario recibidos después de iniciar sesión
   //console.log('token:' + token)
   //console.log('role:' + role)
   // Guardar el token y el rol del usuario en el localStorage
   localStorage.setItem('token', token)
   localStorage.setItem('role', role)

   // Limpiar campos y mostrar mensaje de inicio de sesión exitoso
   setFormData({
    username: '',
    password: ''
   })
   setErrors({})
   setSuccessMessage('¡Inicio de sesión exitoso!')
   setErrorMessage('')

   // Redirigir a la página de inicio
   navigate('/home')
  } catch (error) {
   if (error.response && error.response.data) {
    setErrors(error.response.data)
    setErrorMessage('Error al iniciar sesión. Verifique sus credenciales.')
   }
  }
 }

 const validateFields = () => {
  const errors = {}

  // Expresión regular para validar que no esté en blanco
  const notEmptyRegex = /^\S+$/

  // Validar nombre de usuario
  if (!formData.username || !notEmptyRegex.test(formData.username)) {
   errors.username = 'Ingrese un nombre de usuario válido'
  }

  // Validar contraseña
  if (!formData.password || !notEmptyRegex.test(formData.password)) {
   errors.password = 'Ingrese una contraseña válida'
  }

  return errors
 }

 return (
  <div className="container">
   <h1>Iniciar sesión</h1>
   {successMessage && (
    <div className="alert alert-success">{successMessage}</div>
   )}
   {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
   <form onSubmit={handleSubmit}>
    <FormInput
     label="Usuario"
     type="text"
     name="username"
     value={formData.username}
     onChange={handleChange}
     error={errors.username}
    />
    <FormInput
     label="Contraseña"
     type="password"
     name="password"
     value={formData.password}
     onChange={handleChange}
     error={errors.password}
    />
    <button type="submit" className="btn btn-primary">
     Iniciar sesión
    </button>
   </form>
  </div>
 )
}

export default LoginPage
