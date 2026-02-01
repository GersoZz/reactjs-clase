import { useContext } from 'react'
import './Header.css'
import { CartContext } from '../context/CartContext'
import { Link, NavLink } from 'react-router-dom'

const Header = ({}) => {
  const { cartCount } = useContext(CartContext)

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="header-logo">
            ShopStore
          </Link>
        </div>
        <nav className="header-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            About
          </NavLink>
          <NavLink to="/add-product" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Add Product
          </NavLink>
        </nav>
        <Link to="/cart" className="header-cart">
          <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
