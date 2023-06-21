import React from 'react'
import DeleteProduct from '../buttons/deleteProduct'
import PutButton from '../buttons/editProducts'
import ViewDetailsButton from '../buttons/viewDetails'

const ProductCard = ({ product, onUpdate }) => {
 const {
  image,
  _id,
  website,
  title,
  original_price,
  discount_price,
  offer_url
 } = product

 return (
  <div className="card card-container mb-3">
   <img src={image} alt={title} style={{ width: '200px', height: '200px' }} />
   <div className="card-body">
    <h5 className="card-title">ID: {_id}</h5>
    <p className="card-text">Website: {website}</p>
    <p className="card-text">Titulo: {title}</p>
    <p className="card-text">Precio original: {original_price}</p>
    <p className="card-text">Precio con descuento: {discount_price}</p>
    <p className="card-text">
     URL de la oferta:{' '}
     <a className="card-text" href={offer_url}>
      {offer_url}
     </a>
    </p>
    <ViewDetailsButton productId={_id} />
    <PutButton productId={_id} onUpdate={onUpdate} />
    <DeleteProduct productId={_id} onUpdate={onUpdate} />
   </div>
  </div>
 )
}

export default ProductCard
