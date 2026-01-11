import { useEffect, useState } from 'react'
import './PromoBanner.css'

function PromoBanner({ initialSeconds = 10, onClose }) {
  const [visible, setVisible] = useState(true)
  console.log('🚀 ~ PromoBanner ~ visible:', visible)
  const [seconds, setSeconds] = useState(initialSeconds)

  useEffect(() => {
    if (!visible) return

    const interval = setInterval(() => {
      console.log('tick')
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    // CleanUp: limpiar el intervalo cuando cambie 'visible' o el componente se descomente
    return () => {
      console.log('CleanUp: Intervalo Limpiado')
      clearInterval(interval)
    }
  }, [visible])

  useEffect(() => {
    if (seconds === 0) {
      setVisible(false)
    }
  }, [seconds])

  if (!visible) return null

  return (
    <div className="promo-banner">
      <span>Oferta por tiempo limitado: {seconds}s</span>
      <button className="promo-close" onClick={() => onClose()}>
        X
      </button>
    </div>
  )
}

export default PromoBanner
