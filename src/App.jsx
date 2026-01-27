import { useState } from 'react'
import './App.css'
import PromoBanner from './components/PromoBanner'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Container from './components/Container'

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [promoAvailability, setPromoAvailability] = useState(true)

  const productsData = [
    {
      id: 'card-01',
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      title: 'Zapatillas Runing',
      text: 'Zapatillas ligeras para correr largas distancias.',
      price: 120.5,
    },
    {
      id: 'card-02',
      imageUrl: 'https://images.unsplash.com/photo-1593369196682-6d8ec9ff3ae0',
      title: 'Cafetera Express',
      text: 'Cafetera de café con leche, leche con café, y café con leche.',
      price: 199,
    },
    {
      id: 'card-03',
      title: 'Reloj Inteligente',
      text: 'Monitor de tiempo inteligente con vista de día y de año.',
      price: 299,
    },
  ]

  const handleAddToCart = (isAdded) => {
    if (isAdded) {
      setCartCount((prev) => prev + 1)
    } else {
      setCartCount((prev) => prev - 1)
    }
  }

  const onClose = () => {
    console.log('Desmontar PromoBanner')
    setPromoAvailability(false)
  }

  return (
    <>
      <Header cartCount={cartCount} />
      <h1>Vite + React</h1>
      {promoAvailability && <PromoBanner onClose={onClose} initialSeconds={20} />}
      <Container title="Productos disponibles">
        <p style={{ textAlign: 'center', opacity: 0.8, marginBottom: '16px' }}>
          Estos son los productos que puedes comprar.
        </p>
        <ProductList productsData={productsData} handleAddToCart={handleAddToCart} />
      </Container>

      <Container title="Productos sugeridos">
        <p style={{ textAlign: 'center', opacity: 0.8, marginBottom: '16px' }}>
          Explora nuestra selección de productos recomendados para ti.
        </p>
        <ProductList productsData={productsData.slice(0, 2)} handleAddToCart={handleAddToCart} />
      </Container>
    </>
  )
}

export default App
