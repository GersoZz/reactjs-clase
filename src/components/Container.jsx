import './Container.css'

function Container({ children, title, className = '' }) {
  return (
    <div className={`container ${className}`}>
      {title && <h2 className="container-title">{title}</h2>}
      <div className="container-content">{children}</div>
    </div>
  )
}

export default Container
