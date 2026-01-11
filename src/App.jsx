import "./App.css";

function App() {
  const cardId = "card-01";
  const cardImageUrl =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff";
  const cardTitle = "Zapatillas Runing";
  const cardText = "Zapatillas ligeras para correr largas distancias.";
  const cardPrice = 120.5;

  const handleAddToCart = () => {
    console.log("Agregar al Carrito");
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div id={cardId} className="card">
        <img
          className="card-image"
          src={cardImageUrl || "https://picsum.photos/300"}
          alt={cardTitle}
        />
        <div className="card-content">
          <h3 className="card-title">{cardTitle}</h3>
          <p className="card-text">{cardText}</p>
          <div className="card-footer">
            <span className="card-price">${cardPrice}</span>
            <button className="card-button" onClick={handleAddToCart}>
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
