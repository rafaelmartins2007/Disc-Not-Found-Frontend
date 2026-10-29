import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Login from './pages/login'
import Register from './pages/register'

function App() {
  return (
    <div className="min-h-screen bg-fundo text-texto">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main className="p-8">
              <h1 className="text-4xl font-bold text-titulo">
                Disc Not Found
              </h1>

              <div className="mt-6 rounded-xl bg-cartao p-6">
                <p className="text-texto">
                  Texto principal dentro de um cartão.
                </p>

                <button className="mt-4 rounded-lg bg-destaque px-4 py-2 font-semibold text-black">
                  Comprar
                </button>
              </div>
            </main>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/registo" element={<Register />} />

        <Route
          path="/recuperar-palavra-passe"
          element={
            <main className="px-4 py-12 text-center">
              <h1 className="text-3xl font-light text-titulo">
                Recuperar palavra-passe
              </h1>

              <p className="mt-4">
                Esta funcionalidade estará disponível mais tarde.
              </p>

              <Link
                to="/login"
                className="mt-6 inline-block rounded underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-destaque"
              >
                Voltar a entrar
              </Link>
            </main>
          }
        />
      </Routes>
    </div>
  )
}

export default App