import { HomePage, AboutPage, AddProductPage, CartPage } from './pages'
import Layout from './components/Layout'
import CartLayout from './components/CartLayout'

const routerConfig = [
  {
    element: <Layout />,
    children: [
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
    ],
  },
  {
    element: <CartLayout />,
    children: [
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
]

export default routerConfig
