import React from 'react'
import HomePage from './HomePage'

export { HomePage }

// Promesa
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const AboutPage = React.lazy(() => import('./AboutPage'))
export const AddProductPage = React.lazy(() => import('./AddProductPage'))
export const CartPage = React.lazy(async () => {
  await delay(2000)
  return import('./CartPage')
})
