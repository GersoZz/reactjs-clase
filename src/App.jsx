import { useEffect, useState } from 'react'
import './App.css'
import PromoBanner from './components/PromoBanner'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Container from './components/Container'
import { productAdapter } from './adapters/products.adapter'
import Loader from './components/Loader'

function App() {
  const [promoAvailability, setPromoAvailability] = useState(true)

  const [productsData, setProductsData] = useState([])
  const [productsSuggestedData, setProductsSuggestedData] = useState([])
  const [productsElectronicsData, setProductsElectronicsData] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const onClose = () => {
    console.log('Desmontar PromoBanner')
    setPromoAvailability(false)
  }

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products/?offset=0&limit=6')
      .then((response) => response.json())
      .then((data) => {
        const products = data.map((product) => productAdapter(product))
        setProductsData(products)
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error)
      })
      .finally(() => {
        setIsLoading(false)
      })

    // Para productos sugeridos
    fetch('https://api.escuelajs.co/api/v1/products/?offset=6&limit=3')
      .then((response) => response.json())
      .then((data) => {
        const products = data.map(productAdapter)
        setProductsSuggestedData(products)
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error)
      })
      .finally(() => {
        setIsLoading(false)
      })

    // Para productos electronicos
    fetch('https://api.escuelajs.co/api/v1/products/?categorySlug=electronics')
      .then((response) => response.json())
      .then((data) => {
        const products = data.map(productAdapter)
        setProductsElectronicsData(products.slice(0, 6))
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <Header />
      <h1>Vite + React</h1>
      {promoAvailability && <PromoBanner onClose={onClose} initialSeconds={20} />}
      <Container title="Productos disponibles">
        <p style={{ textAlign: 'center', opacity: 0.8, marginBottom: '16px' }}>
          Estos son los productos que puedes comprar.
        </p>
        {isLoading ? <Loader /> : <ProductList productsData={productsData} />}
      </Container>

      <Container title="Productos sugeridos">
        <p style={{ textAlign: 'center', opacity: 0.8, marginBottom: '16px' }}>
          Explora nuestra selección de productos recomendados para ti.
        </p>
        {isLoading ? <Loader /> : <ProductList productsData={productsSuggestedData} />}
      </Container>

      <Container title="Productos electrónicos">
        <p style={{ textAlign: 'center', opacity: 0.8, marginBottom: '16px' }}>
          Descubre nuestra selección de productos electrónicos.
        </p>
        {isLoading ? <Loader /> : <ProductList productsData={productsElectronicsData} />}
      </Container>
    </>
  )
}

export default App
