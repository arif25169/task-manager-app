import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { AppLayout } from './components/AppLayout'
import { Register } from './pages/Register'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<div>About Page</div>}/>
        </Route>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='*' element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
