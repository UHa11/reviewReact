import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomeForm from './pages/HomeForm'
import LoginForm from './pages/LoginForm'
import NotFound from './pages/NotFound'

function App() {

  return (
      <BrowserRouter>
      <nav style={{marginBottom: 20}}>
        <Link to="/" style={{marginRight: 12}}>홈</Link>
        <Link to="/login" style={{marginRight: 12}}>로그인</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomeForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
