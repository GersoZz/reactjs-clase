import { Routes, Route } from 'react-router-dom'
import routes from './routerConfig'

function AppRouter() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} element={route.element}>
          {route.children.map((child, i) => (
            <Route key={i} path={child.path} element={child.element} />
          ))}
        </Route>
      ))}
    </Routes>
  )
}

export default AppRouter
