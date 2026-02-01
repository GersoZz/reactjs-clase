import { useEffect, useState } from 'react'
import './App.css'
import PromoBanner from './components/PromoBanner'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Container from './components/Container'
import { productAdapter } from './adapters/products.adapter'
import Loader from './components/Loader'
import useFetch from './hooks/useFetch'
import ErrorMessage from './components/ErrorMessage'

function App() {
  const [promoAvailability, setPromoAvailability] = useState(true)

  const [productsData, setProductsData] = useState([])
  const [productsSuggestedData, setProductsSuggestedData] = useState([])
  const [productsElectronicsData, setProductsElectronicsData] = useState([])

  const [errorMessage, setErrorMessage] = useState(null)

  const onClose = () => {
    console.log('Desmontar PromoBanner')
    setPromoAvailability(false)
  }

  const {
    data: productsRawData,
    loading: loadingProducts,
    error: errorProducts,
  } = useFetch('https://api.escuelajs.co/api/v1/products/?offset=0&limit=6')
  console.log('errorProducts', errorProducts)

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

  useEffect(() => {
    if (productsRawData) {
      const adaptedProducts = productsRawData.map(productAdapter)
      setProductsData(adaptedProducts)
    }

    if (suggestedRawData) {
      const adaptedSuggested = suggestedRawData.map(productAdapter)
      setProductsSuggestedData(adaptedSuggested)
    }

    if (electronicsRawData) {
      const adaptedElectronics = electronicsRawData.map(productAdapter)
      setProductsElectronicsData(adaptedElectronics.slice(0, 6))
    }
  }, [productsRawData, suggestedRawData, electronicsRawData])

  useEffect(() => {
    if (errorProducts) {
      setErrorMessage('Error al obtener los productos')
    }

    if (errorSuggested) {
      setErrorMessage('Error al obtener los productos sugeridos')
    }

    if (errorElectronics) {
      setErrorMessage('Error al obtener los productos electrónicos')
    }
  }, [errorProducts, errorSuggested, errorElectronics])

  const onCloseError = () => {
    setErrorMessage(null)
  }
  return (
    <>
      {errorMessage && <ErrorMessage message={errorMessage} onClose={onCloseError} />}
      <Header />
      <h1>Vite + React</h1>
      {promoAvailability && <PromoBanner onClose={onClose} initialSeconds={20} />}

      {!errorProducts && (
        <Container title="Productos disponibles">
          <p style={{ textAlign: 'center', opacity: 0.8, marginBottom: '16px' }}>
            Estos son los productos que puedes comprar.
          </p>
          {loadingProducts ? <Loader /> : <ProductList productsData={productsData} />}
        </Container>
      )}

      {!errorSuggested && (
        <Container title="Productos sugeridos">
          <p style={{ textAlign: 'center', opacity: 0.8, marginBottom: '16px' }}>
            Explora nuestra selección de productos recomendados para ti.
          </p>
          {loadingSuggested ? <Loader /> : <ProductList productsData={productsSuggestedData} />}
        </Container>
      )}

      {!errorElectronics && (
        <Container title="Productos electrónicos">
          <p style={{ textAlign: 'center', opacity: 0.8, marginBottom: '16px' }}>
            Descubre nuestra selección de productos electrónicos.
          </p>
          {loadingElectronics ? <Loader /> : <ProductList productsData={productsElectronicsData} />}
        </Container>
      )}
    </>
  )
}

export default App
