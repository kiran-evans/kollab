import './App.css'
import Root from './components/Root/Root'
import Main from './components/Main/Main'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children:[
      {
        path: '/',
        element:<Main />,
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
