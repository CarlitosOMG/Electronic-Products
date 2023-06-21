import React, { useState, useEffect } from 'react'
import ProductCard from './productCardAdmin'
import API from '../../api/api'

const SectionCardProductsAdmin = () => {
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

 const sectionCardProductsAdmin = () => {
  fetch(API + '/products/', {
   headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
   }
  })
   .then((response) => response.json())
   .then((data) => setProducts(data))
   .catch((error) => console.log(error))
 }

 return (
  <div className="card-container">
   {products.map((product) => (
    <ProductCard
     key={product._id}
     product={product}
     onUpdate={sectionCardProductsAdmin}
    />
   ))}
  </div>
 )
}

export default SectionCardProductsAdmin
