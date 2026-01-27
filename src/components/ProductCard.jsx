import { useState, useContext } from 'react'
import './ProductCard.css'
import { CartContext } from '../context/CartContext'

function ProductCard({ id, imageUrl = 'https://picsum.photos/300', title, text, price }) {
  const { handleAddToCart: onAddToCart } = useContext(CartContext)
  const [isAdded, setIsAdded] = useState(false)
  // console.log("🚀 ~ ProductCard ~ isAdded:", isAdded);

  const handleAddToCart = () => {
    // console.log("🎈 ~ handleAddToCart ~ isAdded:", isAdded);
    const newState = !isAdded
    setIsAdded((prevState) => !prevState)
    onAddToCart(newState)
    // console.log("🎈 ~ handleAddToCart ~ isAdded:", isAdded);
  }

  return (
    <div id={id} className="card">
      <img className="card-image" src={imageUrl} alt={title} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <div className="card-footer">
          <span className="card-price">${price}</span>
          <button className={`card-button ${isAdded ? 'added' : ''}`} onClick={handleAddToCart}>
            {isAdded ? 'Agregado' : 'Agregar al Carrito'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
