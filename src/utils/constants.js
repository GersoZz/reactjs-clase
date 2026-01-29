// API Configuration
export const API_BASE_URL = 'https://api.escuelajs.co/api/v1'

export const API_ENDPOINTS = {
  PRODUCTS: `${API_BASE_URL}/products`,
  PRODUCTS_AVAILABLE: `${API_BASE_URL}/products/?offset=0&limit=6`,
  PRODUCTS_SUGGESTED: `${API_BASE_URL}/products/?offset=6&limit=3`,
  PRODUCTS_ELECTRONICS: `${API_BASE_URL}/products/?categorySlug=electronics`,
}
