import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  const productsData = [
    {
      id: "card-01",
      imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      title: "Zapatillas Runing",
      text: "Zapatillas ligeras para correr largas distancias.",
      price: 120.5,
    },
    {
      id: "card-02",
      imageUrl: "https://images.unsplash.com/photo-1593369196682-6d8ec9ff3ae0",
      title: "Cafetera Express",
      text: "Cafetera de café con leche, leche con café, y café con leche.",
      price: 199,
    },
    {
      id: "card-03",
      imageUrl: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
      title: "Reloj Inteligente",
      text: "Monitor de tiempo inteligente con vista de día y de año.",
      price: 299,
    },
  ];

  const handleAddToCart = () => {
    console.log("Agregar al Carrito");
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card-list">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            text={product.text}
            price={product.price}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
}

export default App;
