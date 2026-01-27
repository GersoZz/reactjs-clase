import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = (isAdded) => {
    if (isAdded) {
      setCartCount((prev) => prev + 1)
    } else {
      setCartCount((prev) => prev - 1)
    }
  }

  const value = { cartCount, handleAddToCart }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
