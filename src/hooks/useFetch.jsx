import { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los productos')
        }

        return response.json()
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { data, loading, error }
}

export default useFetch
