import React from 'react'
import axios from 'axios'
import API from '../../api/api'

const DeleteProduct = ({ productId, onUpdate }) => {
 const eliminarProducto = async () => {
  const role = localStorage.getItem('role')
  const token = localStorage.getItem('token')

  // Verificar el rol de administrador y autenticar el token
  if (role !== 'admin' || !token) {
   alert('Acceso no autorizado')
   return
  }

  try {
   // Realizar petición DELETE para eliminar el producto
   await axios.delete(`${API}/products/${productId}`, {
    headers: {
     Authorization: `Bearer ${token}`
    }
   })

   // Actualizar la consulta de productos en Home
   onUpdate() // Esta función debe ser pasada desde el componente padre
  } catch (error) {
   alert('Error al eliminar el producto:', error)
  }
 }

 return (
  <button className="btn btn-danger" onClick={eliminarProducto}>
   Eliminar
  </button>
 )
}

export default DeleteProduct
