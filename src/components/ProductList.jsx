import ProductCard from './ProductCard'

function ProductList({ productsData, handleAddToCart }) {
  return (
    <div className="card-list">
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          imageUrl={product.imageUrl}
          title={product.title}
          text={product.text}
          price={product.price}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  )
}

export default ProductList
