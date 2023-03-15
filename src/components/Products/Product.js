import React from 'react'
import ProductList from './ProductList'

const Product = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <ProductList  />
    </div>
  )
}

export default Product