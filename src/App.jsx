import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Login from './pages/login'
import Register from './pages/register'
import HomePage from './pages/homepage'
import RecoverPassword from './pages/recover-password'

function App() {
  return (
    <div className="min-h-screen bg-fundo text-texto">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registo" element={<Register />} />
        <Route path="/recuperar-palavra-passe" element={<RecoverPassword />} />

      </Routes>
    </div>
  )
}

export default App