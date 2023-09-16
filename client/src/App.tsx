import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Root from './components/Root/Root'
import Posts from './pages/posts/Posts'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import Comments from './pages/comments/Comments'
import UserPreferences from './pages/userPreferences/UserPreferences'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children:[
      {
        path: '/',
        element:<ProtectedRoutes />,
        children: [
          {
            path: '',
            element: <Posts />
          }, {
            path: 'comments',
            element: <Comments />
          }, {
            path: '/preference',
            element: <UserPreferences />
          }
        ]
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/register',
        element: <Register />
      }, 
    ],
  }
])

function App() {
  document.title = "Collab-Rate"
  return (
    <>
    <RouterProvider router={routes} />
    </>
  )
}

export default App
