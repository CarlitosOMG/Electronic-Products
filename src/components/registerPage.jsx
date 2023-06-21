import React, { useState } from 'react'
import axios from 'axios'
import FormInput from './formInput'
import API from '../api/api'

const RegisterPage = () => {
 const [formData, setFormData] = useState({
  username: '',
  password: '',
  confirmPassword: ''
 })
 const [errors, setErrors] = useState({})
 const [successMessage, setSuccessMessage] = useState('')

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
   const response = await axios.post(API + '/users/register', formData)
   console.log(response.data) // Token recibido después de registrar
   handleChange()
   // Limpiar campos y mostrar mensaje de registro exitoso
   setFormData({
    username: '',
    password: '',
    confirmPassword: ''
   })
   setErrors({})
   setSuccessMessage('¡Registro exitoso!')
  } catch (error) {
   if (error.response && error.response.data) {
    setErrors(error.response.data)
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

  // Validar confirmación de contraseña
  if (formData.password !== formData.confirmPassword) {
   errors.confirmPassword = 'Las contraseñas no coinciden'
  }

  return errors
 }

 return (
  <div className="container">
   <h1>Registro</h1>
   {successMessage && (
    <div className="alert alert-success">{successMessage}</div>
   )}
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
    <FormInput
     label="Confirmar contraseña"
     type="password"
     name="confirmPassword"
     value={formData.confirmPassword}
     onChange={handleChange}
     error={errors.confirmPassword}
    />
    <button type="submit" className="btn btn-primary">
     Registrarse
    </button>
   </form>
  </div>
 )
}

export default RegisterPage
