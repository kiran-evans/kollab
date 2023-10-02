import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { useContext } from 'react'
import './App.css'
import Root from './components/Root/Root'
import { AppContext } from './lib/ContextProvider'
import { Comments } from './pages/comments/Comments'
import { Home } from './pages/home/Home'
import Login from './pages/login/Login'
import NewPost from './pages/new-post/NewPost'
import { Preferences } from './pages/preferences/Preferences'
import Register from './pages/register/Register'

function App() {

    const { state } = useContext(AppContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Root />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/new-post" element={state.user ? <NewPost /> : <Navigate to="/login" />} />
                    <Route path="/comments/:postId" element={<Comments />} />
                    <Route path="/user/:userId" element={<UserProfile />} />
                    
                    <Route path="/preferences" element={state.user ? <Preferences /> : <Navigate to="/login" />} />
                    <Route path="/login" element={state.user ? <Navigate to="/" /> : <Login />} />
                    <Route path="/register" element={state.user ? <Navigate to="/" /> : <Register />} />
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App
