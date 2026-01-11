import "./ProductCard.css";

function ProductCard({ id, imageUrl, title, text, price, handleAddToCart }) {
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
          <button className="card-button" onClick={handleAddToCart}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
