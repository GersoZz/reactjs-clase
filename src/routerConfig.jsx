import { HomePage, AboutPage, AddProductPage, CartPage } from './pages'

const routerConfig = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/add-product',
    element: <AddProductPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
]

export default routerConfig
