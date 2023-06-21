import React from 'react'
import axios from 'axios'
import API from '../../api/api'

const ViewDetailsButton = ({ productId }) => {
 const verDetalles = async () => {
  const role = localStorage.getItem('role')
  const token = localStorage.getItem('token')

  // Verificar el rol de administrador y autenticar el token
  if (!token) {
   alert('Token invalido')
   return
  }

  try {
   const response = await axios.get(`${API}/products/${productId}`, {
    headers: {
     Authorization: `Bearer ${token}`
    }
   })
   const { data } = response
   // Mostrar pantalla con los detalles del producto
   alert(`Detalles del producto: ${JSON.stringify(data, null, 2)}`)
  } catch (error) {
   alert('Error al obtener los detalles del producto:', error)
  }
 }

 return (
  <button className="btn btn-success me-2" onClick={verDetalles}>
   Ver detalles
  </button>
 )
}

export default ViewDetailsButton
