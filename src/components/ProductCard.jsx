import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ id, imageUrl, title, text, price }) {
  const [isAdded, setIsAdded] = useState(false);
  // console.log("🚀 ~ ProductCard ~ isAdded:", isAdded);

  const handleAddToCart = () => {
    // console.log("🎈 ~ handleAddToCart ~ isAdded:", isAdded);
    setIsAdded((prevState) => !prevState);
    // console.log("🎈 ~ handleAddToCart ~ isAdded:", isAdded);
  };

  return (
    <div id={id} className="card">
      <img
        className="card-image"
        src={imageUrl || "https://picsum.photos/300"}
        alt={title}
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <div className="card-footer">
          <span className="card-price">${price}</span>
          <button
            className={`card-button ${isAdded ? "added" : ""}`}
            onClick={handleAddToCart}
          >
            {isAdded ? "Agregado" : "Agregar al Carrito"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
