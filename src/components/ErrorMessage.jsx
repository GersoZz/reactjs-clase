import './ErrorMessage.css'

function ErrorMessage({ message, onClose }) {
  if (!message) return null

  return (
    <div className="error-message">
      <div className="error-content">
        <span className="error-icon">⚠️</span>
        <p>{message}</p>
        <button onClick={onClose} className="error-close-btn">
          ✕
        </button>
      </div>
    </div>
  )
}

export default ErrorMessage
