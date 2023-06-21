import React, { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import API from '../api/api'

const NewProduct = () => {
 const [website, setWebsite] = useState('')
 const [title, setTitle] = useState('')
 const [originalPrice, setOriginalPrice] = useState()
 const [discountPrice, setDiscountPrice] = useState()
 const [offerUrl, setOfferUrl] = useState('')
 const [categoryName, setCategoryName] = useState('')
 const [shouldRedirect, setShouldRedirect] = useState(false)
 const [imageUrl, setImageUrl] = useState('')

 const handleSubmit = async (e) => {
  e.preventDefault()

  // Obtener el token y el rol del usuario desde el localStorage
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')

  // Verificar el rol de administrador y autenticar el token
  if (role !== 'admin' || !token) {
   alert('Acceso no autorizado')
   return
  }

  // Validar que los campos no estén vacíos
  if (
   !website ||
   !title ||
   !originalPrice ||
   !discountPrice ||
   !offerUrl ||
   !categoryName ||
   !imageUrl
  ) {
   alert(
    'Por favor, completa todos los campos del formulario, incluyendo la URL de la imagen'
   )
   return
  }

  const newProduct = {
   website,
   title,
   original_price: originalPrice,
   discount_price: discountPrice,
   offer_url: offerUrl,
   is_offer_day: false,
   is_available: true,
   delivery_is_free: '',
   category: {
    Id: '',
    Name: categoryName
   },
   discount_percentage: '',
   image: imageUrl, // Agrega la URL de la imagen al objeto newProduct
   rating: { rating: 0, amount: '' },
   sales: { days: '', amount: '' }
  }

  try {
   // Realizar la petición POST al backend para crear el nuevo producto
   const response = await axios.post(`${API}/products/`, newProduct, {
    headers: {
     Authorization: `Bearer ${token}`
    }
   })

   // Limpiar los campos del formulario después de enviar la petición correctamente
   setWebsite('')
   setTitle('')
   setOriginalPrice()
   setDiscountPrice()
   setOfferUrl('')
   setCategoryName('')

   alert('Producto creado exitosamente')

   // Establecer shouldRedirect a true para realizar la redirección
   setShouldRedirect(true)
  } catch (error) {
   alert('Error al crear el producto:', error)
  }
 }

 return shouldRedirect ? (
  <Navigate to="/home" replace />
 ) : (
  <div className="container border rounded p-4 shadow text-primary bg-light">
   <h1>Crear Nuevo Producto</h1>
   <form onSubmit={handleSubmit}>
    <div className="mb-3">
     <label className="form-label">Website:</label>
     <input
      type="text"
      className="form-control text-primary bg-light border border-primary shadow shadow rounded"
      value={website}
      onChange={(e) => setWebsite(e.target.value)}
     />
    </div>
    <div className="mb-3">
     <label className="form-label">Título:</label>
     <input
      type="text"
      className="form-control text-primary bg-light border border-primary shadow shadow rounded"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
     />
    </div>
    <div className="mb-3">
     <label className="form-label">Precio Original:</label>
     <input
      type="number"
      className="form-control text-primary bg-light border border-primary shadow shadow rounded"
      value={originalPrice}
      onChange={(e) => setOriginalPrice(Number(e.target.value))}
     />
    </div>
    <div className="mb-3">
     <label className="form-label">Precio con Descuento:</label>
     <input
      type="number"
      className="form-control text-primary bg-light border border-primary shadow shadow rounded"
      value={discountPrice}
      onChange={(e) => setDiscountPrice(Number(e.target.value))}
     />
    </div>
    <div className="mb-3">
     <label className="form-label">URL de la Oferta:</label>
     <input
      type="text"
      className="form-control text-primary bg-light border border-primary shadow shadow rounded"
      value={offerUrl}
      onChange={(e) => setOfferUrl(e.target.value)}
     />
    </div>
    <div className="mb-3">
     <label className="form-label">URL de la Imagen:</label>
     <input
      type="text"
      className="form-control text-primary bg-light border border-primary shadow shadow rounded"
      value={imageUrl}
      onChange={(e) => setImageUrl(e.target.value)}
     />
    </div>

    <div className="mb-3">
     <label className="form-label">Categoría:</label>
     <input
      type="text"
      className="form-control text-primary bg-light border border-primary shadow shadow rounded"
      value={categoryName}
      onChange={(e) => setCategoryName(e.target.value)}
     />
    </div>
    <button type="submit" className="btn btn-success">
     Crear Producto
    </button>
   </form>
  </div>
 )
}

export default NewProduct
