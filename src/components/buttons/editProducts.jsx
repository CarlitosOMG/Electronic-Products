import React, { useState } from 'react'
import axios from 'axios'
import API from '../../api/api'

const PutButton = ({ productId, onUpdate }) => {
 const [titulo, setTitulo] = useState('')
 const [precio, setPrecio] = useState('')

 const handleEditar = async () => {
  const role = localStorage.getItem('role')
  const token = localStorage.getItem('token')

  // Verificar el rol de administrador y autenticar el token
  if (role !== 'admin' || !token) {
   alert('Acceso no autorizado')
   return
  }

  const newTitulo = prompt('Ingresa el nuevo título')
  if (newTitulo === null || newTitulo === '') {
   alert('El título no puede estar vacío')
   return
  }

  const newPrecio = prompt('Ingresa el nuevo precio')
  if (newPrecio === null || newPrecio === '') {
   alert('El precio no puede estar vacío')
   return
  }

  try {
   // Realizar la petición PUT al backend para actualizar el producto
   const response = await axios.put(
    `${API}/products/${productId}`,
    {
     title: newTitulo,
     original_price: newPrecio
    },
    {
     headers: {
      Authorization: `Bearer ${token}`
     }
    }
   )

   // Actualizar el estado local del producto con los nuevos datos
   setTitulo(newTitulo)
   setPrecio(newPrecio)

   // Ejecutar la función de actualización pasada por prop después de que la solicitud PUT se haya completado correctamente
   onUpdate()

   alert('Producto actualizado exitosamente')
  } catch (error) {
   alert('Error al actualizar el producto:', error)
  }
 }

 return (
  <button className="btn btn-info me-2" onClick={handleEditar}>
   Editar
  </button>
 )
}

export default PutButton
