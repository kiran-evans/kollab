import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { useContext } from 'react'
import './App.css'
import Root from './components/Root/Root'
import { AppContext } from './lib/ContextProvider'
import NewPost from './pages/NewPost/NewPost'
import Comments from './pages/comments/Comments'
import Login from './pages/login/Login'
import Posts from './pages/posts/Posts'
import Register from './pages/register/Register'
import UserPreferences from './pages/userPreferences/UserPreferences'

function App() {

    const { state } = useContext(AppContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Root />

                    <Route path="" element={<Posts />} />
                    <Route path="new-post" element={<NewPost />} />
                    <Route path="comments" element={<Comments />} />
                    <Route path="preferences" element={state.user ? <UserPreferences /> : <Navigate to="/login" />} />
                </Route>

                <Route path="/login" element={state.user ? <Navigate to="/" /> : <Login />} />
                <Route path="/register" element={state.user ? <Navigate to="/" /> : <Register />} />
                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
