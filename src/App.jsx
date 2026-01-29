import { useEffect, useState } from 'react'
import './App.css'
import PromoBanner from './components/PromoBanner'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Container from './components/Container'
import { productAdapter } from './adapters/products.adapter'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import { useFetch } from './hooks/useFetch'

function App() {
  const [promoAvailability, setPromoAvailability] = useState(true)

  const [productsData, setProductsData] = useState([])
  const [productsSuggestedData, setProductsSuggestedData] = useState([])
  const [productsElectronicsData, setProductsElectronicsData] = useState([])

  const [errorMessage, setErrorMessage] = useState(null)

  // Usar el custom hook useFetch
  const {
    data: productsRawData,
    loading: loadingProducts,
    error: errorProducts,
  } = useFetch('https://api.escuelajs.co/api/v1/products/?offset=0&limit=6')

  const {
    data: suggestedRawData,
    loading: loadingSuggested,
    error: errorSuggested,
  } = useFetch('https://api.escuelajs.co/api/v1/products/?offset=6&limit=3')

  const {
    data: electronicsRawData,
    loading: loadingElectronics,
    error: errorElectronics,
  } = useFetch('https://api.escuelajs.co/api/v1/products/?categorySlug=electronics')

  // Detectar errores
  useEffect(() => {
    if (errorProducts) {
      setErrorMessage('Error al cargar productos disponibles')
    } else if (errorSuggested) {
      setErrorMessage('Error al cargar productos sugeridos')
    } else if (errorElectronics) {
      setErrorMessage('Error al cargar productos electrónicos')
    }
  }, [errorProducts, errorSuggested, errorElectronics])

  const onCloseError = () => {
    setErrorMessage(null)
  }

  // const isLoading = loadingProducts || loadingSuggested || loadingElectronics

  const onClose = () => {
    console.log('Desmontar PromoBanner')
    setPromoAvailability(false)
  }

  // Procesar productos disponibles
  useEffect(() => {
    if (productsRawData) {
      const products = productsRawData.map((product) => productAdapter(product))
      setProductsData(products)
    }
  }, [productsRawData])

  // Procesar productos sugeridos
  useEffect(() => {
    if (suggestedRawData) {
      const products = suggestedRawData.map(productAdapter)
      setProductsSuggestedData(products)
    }
  }, [suggestedRawData])

  // Procesar productos electrónicos
  useEffect(() => {
    if (electronicsRawData) {
      const products = electronicsRawData.map(productAdapter)
      setProductsElectronicsData(products.slice(0, 6))
    }
  }, [electronicsRawData])

  return (
    <>
      {errorMessage && <ErrorMessage message={errorMessage} onClose={onCloseError} />}
      <Header />
      <h1>Vite + React</h1>
      {promoAvailability && <PromoBanner onClose={onClose} initialSeconds={20} />}
      <Container title="Productos disponibles">
        <p style={{ textAlign: 'center', opacity: 0.8, marginBottom: '16px' }}>
          Estos son los productos que puedes comprar.
        </p>
        {loadingProducts ? <Loader /> : <ProductList productsData={productsData} />}
      </Container>

      <Container title="Productos sugeridos">
        <p style={{ textAlign: 'center', opacity: 0.8, marginBottom: '16px' }}>
          Explora nuestra selección de productos recomendados para ti.
        </p>
        {loadingSuggested ? <Loader /> : <ProductList productsData={productsSuggestedData} />}
      </Container>

      <Container title="Productos electrónicos">
        <p style={{ textAlign: 'center', opacity: 0.8, marginBottom: '16px' }}>
          Descubre nuestra selección de productos electrónicos.
        </p>
        {loadingElectronics ? <Loader /> : <ProductList productsData={productsElectronicsData} />}
      </Container>
    </>
  )
}

export default App
