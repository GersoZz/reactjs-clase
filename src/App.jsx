import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Router'
import { Suspense } from 'react'
import Loader from './components/Loader'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
