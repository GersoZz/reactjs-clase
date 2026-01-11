import "./App.css";
import ProductCard from "./components/ProductCard";

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
      <ProductCard
        id={cardId}
        imageUrl={cardImageUrl}
        title={cardTitle}
        text={cardText}
        price={cardPrice}
        handleAddToCart={handleAddToCart}
      />
    </>
  );
}

export default App;
