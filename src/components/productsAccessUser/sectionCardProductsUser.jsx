import React, { useState, useEffect } from 'react'
import ProductCard from './productCardUser'
import API from '../../api/api'

const SectionCardProducts = () => {
 const [userRole, setUserRole] = useState('')
 const [products, setProducts] = useState([])

 useEffect(() => {
  // Obtener el rol del usuario almacenado en el localStorage
  const role = localStorage.getItem('role')
  setUserRole(role)

  // Obtener los productos desde el backend (ejemplo)
  fetch(API + '/products/', {
   headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
   }
  })
   .then((response) => response.json())
   .then((data) => setProducts(data))
   .catch((error) => console.log(error))
 }, [])

 return (
  <div className="card-container">
   {products.map((product) => (
    <ProductCard key={product._id} product={product} />
   ))}
  </div>
 )
}

export default SectionCardProducts
